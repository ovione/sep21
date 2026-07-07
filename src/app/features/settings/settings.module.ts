import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { UserActionsAuditLogModule } from '../user-actions-audit-log/user-actions-audit-log.module';
import {VisibleIfUserHasRoleDirective} from "../../common/security/roles/directives/visible-if-user-has-role.directive";

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    UserActionsAuditLogModule,
    VisibleIfUserHasRoleDirective,
  ]
})
export class SettingsModule { }
