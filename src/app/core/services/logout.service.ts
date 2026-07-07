import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LogoutService {
    protected http = inject(HttpClient);

    logoutUser(): Observable<Set<string>> {
        return this.http.post<Set<string>>('restapi/logout', '');
    }

}
