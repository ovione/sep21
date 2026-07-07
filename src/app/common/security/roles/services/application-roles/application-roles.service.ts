import { Injectable } from '@angular/core';

import { ApplicationFunctionalityEnum } from '../../model/application-functionality.enum';
import { UserRolesEnum } from '../../model/user-roles.enum';

@Injectable({
  providedIn: 'root'
})
export class ApplicationRolesService {
    private applicationRolesPerFunctionality: Map<string, string[]>;

    constructor() {
        this.loadApplicationRoles();
    }

    getRolesForFunctionality(functionalityKey: string): string[] {
        return this.applicationRolesPerFunctionality.get(functionalityKey) ? this.applicationRolesPerFunctionality.get(functionalityKey): [];
    }

    private loadApplicationRoles() {
        this.applicationRolesPerFunctionality = new Map([
            [ApplicationFunctionalityEnum.AUDITLOG, [UserRolesEnum.ADMINISTRATOR, UserRolesEnum.COORDINATOR]],
            [ApplicationFunctionalityEnum.NAVIGATE_HOME_FROM_SETTINGS, [UserRolesEnum.ADMINISTRATOR]],
        ]);
    }
}
