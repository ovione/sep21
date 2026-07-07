import {Component, inject, OnInit} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { EUI_LANGUAGE_SELECTOR } from '@eui/components/eui-language-selector';
import { EUI_USER_PROFILE } from '@eui/components/eui-user-profile';
import { EUI_ICON } from '@eui/components/eui-icon';
import { EUI_LAYOUT } from '@eui/components/layout';
import { Url } from "./core/services/model/url";
import {UrlService} from "./core/services/url.service";
import {SystemDetailsInfoService} from "./core/services/system-details-info.service";
import {take} from "rxjs";
import {retry} from 'rxjs/operators';
import {SystemDetailsInfo} from "./core/models/system-details-info.model";
import {Router} from "@angular/router";
import {LogoutService} from "./core/services/logout.service";
import {EuiGrowlService} from "@eui/core";
import {DialogDynamicService} from "./common/dialog-dynamic/dialog-dynamic.service";
import { TEXT } from "../config/global";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        TranslateModule,
        ...EUI_LAYOUT,
        ...EUI_ICON,
        ...EUI_USER_PROFILE,
        ...EUI_LANGUAGE_SELECTOR,
    ],
})
export class AppComponent implements OnInit {
    private urlService = inject(UrlService);
    private systemDetailsInfoService = inject(SystemDetailsInfoService);
    private logoutService = inject(LogoutService);
    private growlService = inject(EuiGrowlService);
    private dialogDynamicService = inject(DialogDynamicService);

    systemDetailsInfo = new SystemDetailsInfo();
    router = inject(Router);
    showEnvironmentInfo: boolean;

    ngOnInit() {
        this.getSystemInfo();
        this.getUrls();
    }

    private getSystemInfo() {
        this.systemDetailsInfoService.getSystemDetailsInfo().pipe(take(1)).subscribe(info => {
            this.systemDetailsInfo = info;
            this.showEnvironmentInfo = this.systemDetailsInfo && this.systemDetailsInfo.environment !== 'PRODUCTION';
        });
    }

    private getUrls() {
        this.urlService.getUrls().pipe(take(1)).subscribe({ next: (resultUrls: Url) => {}});
    }

    logout() {
        this.logoutService.logoutUser()
            .pipe(retry(3))
            .subscribe( {
                next: (result) => {
                    if(result) {
                        window.location.href = result[0];
                    } else {
                        this.showLogoutError();
                    }
                },
                error: (error) => {
                    this.showLogoutError();
                }
            })
    }

    private showLogoutError() {
        this.growlService.growl({
            severity: 'danger',
            summary: 'ERROR LOGGING OUT',
            detail: 'Unable to log out'
        });
    }

    goToSettings() {
        this.router.navigate(['settings']);
    }

    showPrivacyStatement() {
        this.dialogDynamicService.open('Privacy Statement, Version: March 2026', TEXT.text, void 0 );
    }
}
