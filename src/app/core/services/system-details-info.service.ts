import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SystemDetailsInfo } from '../models/system-details-info.model';

@Injectable({
    providedIn: 'root'
})
export class SystemDetailsInfoService {
    private http = inject(HttpClient)

    getSystemDetailsInfo(): Observable<SystemDetailsInfo> {
        return this.http.get<SystemDetailsInfo>('restapi/v1/system-detail-information');
    }
}
