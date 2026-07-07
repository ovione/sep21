import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings.component';
import { UserActionsAuditLogComponent } from '../user-actions-audit-log/user-actions-audit-log.component';
import { AuthorizationRoleGuard } from '../../common/security/roles/guards/authorization-role.guard';
import { ApplicationFunctionalityEnum } from '../../common/security/roles/model/application-functionality.enum';

const routes: Routes = [
    {
        path: 'settings', component: SettingsComponent,
        children: [
            {
                path: 'logview',
                component: UserActionsAuditLogComponent,
                canActivate: [ AuthorizationRoleGuard ],
                data: { functionality: ApplicationFunctionalityEnum.AUDITLOG }
            }
        ],
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
