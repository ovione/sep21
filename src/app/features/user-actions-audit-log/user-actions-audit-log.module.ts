import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

import { UserActionsAuditLogComponent } from './user-actions-audit-log.component';

@NgModule({
    imports: [
        CommonModule,
        TableModule,
    ],
    declarations: [ UserActionsAuditLogComponent ],
    exports: [ UserActionsAuditLogComponent ]
})
export class UserActionsAuditLogModule { }
