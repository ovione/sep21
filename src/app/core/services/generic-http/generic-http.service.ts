import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileHttpHelperService } from '../file-helpers/file-http-helper.service';
import { FileUploadAllowed } from '../file-helpers/model/file-upload-allowed.model';
import { FileUploadedDeletedResponse } from '../file-helpers/model/file-uploaded-deleted-response.model';

@Injectable({
                providedIn: 'root'
            })
export class GenericHttpService {
    private http = inject(HttpClient);
    private fileHttpHelperService = inject(FileHttpHelperService);


    get<T>(url: string, paramsAsObject?: any, headersAsObject?: any): Observable<T> {
        return this.http.get<T>(url, this.fileHttpHelperService.getOptions(paramsAsObject, headersAsObject));
    }

    post<T>(url: string, body: any | null, paramsAsObject?: any, headersAsObject?: any): Observable<T> {
        return this.http.post<T>(url, body, this.fileHttpHelperService.getOptions(paramsAsObject, headersAsObject));
    }

    put<T>(url: string, body: any | null, paramsAsObject?: any, headersAsObject?: any): Observable<T> {
        return this.http.put<T>(url, body, this.fileHttpHelperService.getOptions(paramsAsObject, headersAsObject));
    }

    delete(url: string): Observable<FileUploadedDeletedResponse> {
        return this.http.delete<FileUploadedDeletedResponse>(url);
    }

    downloadFile(url: string, paramsAsObject?: any, headersAsObject?: any): Observable<any> {
        return this.http.get(url, this.fileHttpHelperService.getFileDownloadOptions(paramsAsObject, headersAsObject));
    }


    uploadFile(url: string, id: string, filesAllowed: FileUploadAllowed[] = [], paramsAsObject?: any, headersAsObject?: any, key = 'keyFormDataForFileUpload'): Observable<any> {
        return this.http.post<any>( url,
                                    this.fileHttpHelperService.createFormDataForFilesToUpload(filesAllowed, key),
                                    this.fileHttpHelperService.getOptions(paramsAsObject, headersAsObject));
    }

    deleteById(url: string, id: string): Observable<any> {
        return this.http.delete<any>(`${url}\\${id}`);
    }

}
