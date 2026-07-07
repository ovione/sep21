import { Component } from '@angular/core';

import { ApplicationFunctionalityEnum } from '../../common/security/roles/model/application-functionality.enum';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    standalone: false,
})
export class SettingsComponent {
    ApplicationFunctionalityEnum = ApplicationFunctionalityEnum;
}
