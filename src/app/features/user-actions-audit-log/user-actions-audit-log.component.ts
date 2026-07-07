import {Component, inject, OnInit} from '@angular/core';
import {UserActionsAuditLogService} from './user-actions-audit-log.service';
import {UserActionsAuditLogModel} from './model/user-actions-audit-log.model';
import {TableModule} from 'primeng/table';
import {PrimeTemplate} from 'primeng/api';

@Component({
    selector: 'app-user-actions-audit-log',
    templateUrl: './user-actions-audit-log.component.html',
    imports: [
        TableModule,
        PrimeTemplate,
    ],
})
export class UserActionsAuditLogComponent implements OnInit {
    private userActionsAuditLogService = inject(UserActionsAuditLogService);

    public userActions: Array<UserActionsAuditLogModel> = [];

    ngOnInit(): void {
        this.getUserActionsAuditLogs();
    }

    private getUserActionsAuditLogs():void {
        this.userActionsAuditLogService.getUserActionsAuditLogs().subscribe({
            next: (userActions: Array<UserActionsAuditLogModel>) => { this.userActions = userActions; }
        })
    }
}
