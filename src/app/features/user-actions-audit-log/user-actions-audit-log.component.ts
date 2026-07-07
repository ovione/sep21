import { Component, OnInit } from '@angular/core';
import { UserActionsAuditLogService } from './user-actions-audit-log.service';
import { UserActionsAuditLogModel } from './model/user-actions-audit-log.model';

@Component({
    selector: 'app-user-actions-audit-log',
    templateUrl: './user-actions-audit-log.component.html',
    standalone: false,
})
export class UserActionsAuditLogComponent implements OnInit {
    public userActions: Array<UserActionsAuditLogModel> = [];

    constructor(private userActionsAuditLogService: UserActionsAuditLogService) {}

    ngOnInit(): void {
        this.getUserActionsAuditLogs();
    }

    private getUserActionsAuditLogs():void {
        this.userActionsAuditLogService.getUserActionsAuditLogs().subscribe({
            next: (userActions: Array<UserActionsAuditLogModel>) => { this.userActions = userActions; }
        })
    }
}
