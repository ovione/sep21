import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserActionsAuditLogModel } from './model/user-actions-audit-log.model';

@Injectable({
  providedIn: 'root'
})
export class UserActionsAuditLogService {

  constructor(protected http: HttpClient) { }

    getUserActionsAuditLogs(): Observable<Array<UserActionsAuditLogModel>> {
        return this.http.get<Array<UserActionsAuditLogModel>>('restapi/user-actions');
    }
}
