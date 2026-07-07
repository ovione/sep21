import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {AuthorizationRoleGuard} from '../../common/security/roles/guards/authorization-role.guard';
import {ApplicationFunctionalityEnum} from '../../common/security/roles/model/application-functionality.enum';

const routes: Routes = [
    {
        path: 'settings', loadComponent: () => import('./settings.component').then(m => m.SettingsComponent),
        children: [
            {
                path: 'logview',
                loadComponent: () => import('../user-actions-audit-log/user-actions-audit-log.component').then(m => m.UserActionsAuditLogComponent),
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
