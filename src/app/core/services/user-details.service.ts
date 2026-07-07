import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDetails } from '../models/user-details.model';

@Injectable({
    providedIn: 'root'
})
export class UserDetailsService {
    protected http = inject(HttpClient);
    private readonly loggedUser$: Observable<UserDetails>;

    constructor() {
        this.loggedUser$ = this.getLoggedUserDetails();
    }

    getUserDetails(): Observable<UserDetails> {
        return this.loggedUser$;
    }

    getLoggedUserDetails(): Observable<UserDetails> {
        return this.http.get<UserDetails>('restapi/user-details');
    }

}
