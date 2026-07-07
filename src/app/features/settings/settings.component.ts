import {Component} from '@angular/core';

import {ApplicationFunctionalityEnum} from '../../common/security/roles/model/application-functionality.enum';
import {VisibleIfUserHasRoleDirective} from '../../common/security/roles/directives/visible-if-user-has-role.directive';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    imports: [
        VisibleIfUserHasRoleDirective,
        RouterLink,
        RouterOutlet,
    ],
})
export class SettingsComponent {
    ApplicationFunctionalityEnum = ApplicationFunctionalityEnum;
}
