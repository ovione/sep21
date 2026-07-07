import { Injectable, inject } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {MessageBoxService} from "../../../core/shared-for-eui/message-box/message-box.service";

@Injectable()
export class ApplicationHttpInterceptor implements HttpInterceptor {
    private route = inject(Router);
    private locationStrategy = inject(LocationStrategy);
    private messageBoxService = inject(MessageBoxService);

    errorHandling: Array<string> = [];
    API_ENDPOINT: string;

    constructor() {
        this.API_ENDPOINT = this.locationStrategy.getBaseHref().replace('/web/', '/');
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


        // it changes the end point to http://basehref without /web/ and take into account when the Mock server is used
        let apiReq = request.clone({ url: this.API_ENDPOINT.concat(request.url) } );
        if ( this.API_ENDPOINT.startsWith('/Dashboard') && request.url.startsWith('assets') ) {
            apiReq = request.clone({url: this.API_ENDPOINT.concat('web/').concat(request.url)});
        }

        return next.handle(apiReq).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    if ( event.statusText === 'ECAS Authentication Required' ) {
                        this.takeActionOnEcasSessionExpired();
                    }
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                console.log('error', error);

                if (error.statusText === 'ECAS Authentication Required') {
                    console.log('statusText is ECAS Authentication Required');
                    this.takeActionOnEcasSessionExpired();
                } else if (error.status === 401 && error.headers.has('csrf_error') ) {
                    console.log('Token Invalid.');
                    this.takeActionOnCSRFInvalid();
                } else if (error.status === 401) {
                    console.log('Access Denied, session must be invalidated.');
                    this.takeActionOn401();
                }

                return throwError(error);
            }));
    }

    private takeActionOnEcasSessionExpired() {
        this.takeAction('ecasSessionExpired', 'Session Invalid - ECAS Revalidation',
            'Refresh', 'Cancel', 'EU Login session has expired..');
    }

    private takeActionOn401() {
        this.takeAction('401', 'Session Invalid - 401',
            'Go Home', 'Cancel',
            'You session was invalidated due to security reasons.<br/>' +
            'You must go to home in order to revalidate your ECAS Session.');
    }

    /**
     * This method must be in accordance with what the backend is doing.
     * In this case take a look in the class CSRFValidationErrorImpl to understand
     * how the CSRF Errrors are treated.
     */
    takeActionOnCSRFInvalid() {
        this.messageBoxService.openPrimary({ title: 'Invalid CSRF Token', acceptLabel: 'ok', hasDismissButton: false,
            content: 'Request not finalized due to Invalid CSRF Token. <br/>' +
                'The Token will be automatically refreshed.'});
    }

    private takeAction(removeErrorHandlingKey: string, titleLabel: string, acceptLabel: string, dismissLabel: string, content: string) {
        if ( this.errorHandling.includes('ecasSessionExpired') || this.errorHandling.includes('401') ) {
            return;
        }
        this.errorHandling.push(removeErrorHandlingKey);
        this.messageBoxService.openPrimary({ title: titleLabel, acceptLabel: acceptLabel, dismissLabel: dismissLabel,
            content: content,
            accept: () => this.takeActionOnEcasSessionExpiredAccept(removeErrorHandlingKey),
            dismiss: () => this.takeActionOnEcasSessionExpiredCancel(removeErrorHandlingKey)});
    }

    private takeActionOnEcasSessionExpiredAccept(removeErrorHandlingKey: string) {
        setTimeout(() => {
            window.location.reload();
            this.removeErrorHandling(removeErrorHandlingKey);
        }, 500);
        this.route.navigate(['screen/home']);
    }

    private takeActionOnEcasSessionExpiredCancel(removeErrorHandlingKey: string) {
        console.log('This page is no more active. A refresh is necessary.');
        setTimeout(() => {
            this.removeErrorHandling(removeErrorHandlingKey);
        }, 3000);
    }


    removeErrorHandling(value: string) {
        const index = this.errorHandling.indexOf(value);
        if (index > -1) {
            this.errorHandling.splice(index, 1);
        }
    }

}
