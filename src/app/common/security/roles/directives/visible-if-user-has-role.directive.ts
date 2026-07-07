import { Directive, TemplateRef, ViewContainerRef, Input, inject } from '@angular/core';
import { take } from 'rxjs/operators';

import { AuthorizationRolesService } from '../services/authorization-roles/authorization-roles.service';
import { ApplicationRolesService } from '../services/application-roles/application-roles.service';

@Directive({
  selector: '[sepVisibleIfUserHasRoleForFunctionality]'
})
export class VisibleIfUserHasRoleDirective {
    private applicationRolesService = inject(ApplicationRolesService);
    private authorizationRolesService = inject(AuthorizationRolesService);
    private templateRef = inject<TemplateRef<any>>(TemplateRef);
    private viewContainer = inject(ViewContainerRef);

    loggedInUserRoles: string[];
    private hasView = false;

    @Input() set sepVisibleIfUserHasRoleForFunctionality(functionality: string) {
        const requiredRoles = this.getRolesForFunctionality(functionality);

        this.authorizationRolesService.isUserRoleAuthorized(requiredRoles).pipe(take(1)).subscribe({
            next: (isRoleAuthorized: boolean) => {
                this.showOrHide(isRoleAuthorized);
            }
        })
    }

    private showOrHide(isRoleAuthorized: boolean) {
        if (isRoleAuthorized && !this.hasView) {
            this.showElement();
            this.hasView = true;
        } else if (!isRoleAuthorized && this.hasView) {
            this.clearElement();
            this.hasView = false;
        }
    }

    private showElement() {
        this.clearElement();
        this.viewContainer.createEmbeddedView(this.templateRef);
    }

    private clearElement() {
        this.viewContainer.clear();
    }

    private getRolesForFunctionality(functionality: string): string[] {
        return this.applicationRolesService.getRolesForFunctionality(functionality);
    }
}
