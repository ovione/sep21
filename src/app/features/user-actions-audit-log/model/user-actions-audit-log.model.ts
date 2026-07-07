export class UserActionsAuditLogModel {
  constructor(public id: string,
              public actionTime: string,
              public action: string,
              public username: string,
              public comment: string) {}
}
