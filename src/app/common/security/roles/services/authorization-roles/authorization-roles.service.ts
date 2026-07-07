import {inject, Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {map, take} from 'rxjs/operators';

import {UserDetailsService} from '../../../../../core/services/user-details.service';
import {UserDetails} from '../../../../../core/models/user-details.model';

@Injectable({
    providedIn: 'root'
})
export class AuthorizationRolesService {
    private userDetailsService = inject(UserDetailsService);
    loggedInUserRoles: string[];

    isUserRoleAuthorized(requiredRoles: string[] = []): Observable<boolean> {
        if (this.loggedInUserRoles) {
            return of(this.userHasRole(this.loggedInUserRoles, requiredRoles));
        }

        return this.userDetailsService.getUserDetails().pipe(
            take(1),
            map((userDetails: UserDetails) => {
                this.loggedInUserRoles = [];
                this.loggedInUserRoles.push(userDetails.role);

                return this.userHasRole(this.loggedInUserRoles, requiredRoles)
            }));

    }

    private userHasRole(userRoles: string[], requiredRoles: string[]): boolean {
        if (!Array.isArray(requiredRoles) || !Array.isArray(userRoles)) {
            return false;
        }
        return userRoles.some((role: string) => requiredRoles.indexOf(role) !== -1);
    }
}
