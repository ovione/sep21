import { Injectable, inject } from '@angular/core';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild,
    UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthorizationRolesService } from '../services/authorization-roles/authorization-roles.service';
import { ApplicationRolesService } from '../services/application-roles/application-roles.service';

@Injectable({
    providedIn: 'root'
})
export class AuthorizationRoleGuard implements CanActivate, CanActivateChild {
    private router = inject(Router);
    private applicationRolesService = inject(ApplicationRolesService);
    private authorizationRolesService = inject(AuthorizationRolesService);


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean| UrlTree> {
        return this.checkIfUserIsAuthorized(route, state);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean| UrlTree> {
        return this.checkIfUserIsAuthorized(route, state);
    }

    private checkIfUserIsAuthorized(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean| UrlTree> {
        const requiredRoles = this.getRolesForFunctionality(route.data['functionality']);

        return this.authorizationRolesService.isUserRoleAuthorized(requiredRoles)
            .pipe(map(this.getHandleResponse));
    }

    private getHandleResponse = (isUserAuthorized: boolean) => {
        if ( !isUserAuthorized) {
            return this.redirectsInCaseOfError();
        }

        return isUserAuthorized;
    };

    private redirectsInCaseOfError(): boolean {
        this.router.navigate(['/non-authorized']);

        return false;
    }

    private getRolesForFunctionality(functionality: string): string[] {
        return this.applicationRolesService.getRolesForFunctionality(functionality);
    }
}
