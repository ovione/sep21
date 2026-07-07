import { Injectable } from '@angular/core';
import { FileUploadAllowed } from './model/file-upload-allowed.model';
import { HttpContext, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileHttpHelperService {

    getFileDownloadOptions(paramsAsObject?: any, headersAsObject?: any): any {
        const fileDownloadOptions = {
            responseType: 'blob' as 'json',
            observe: 'response' as 'response'
        };
        const options = this.getOptions(paramsAsObject, headersAsObject);

        return Object.assign({}, options, fileDownloadOptions)
    }

    getOptions(paramsAsObject: any, headersAsObject: any): {
                                                                headers?: HttpHeaders | {
                                                                    [header: string]: string | string[];
                                                                };
                                                                context?: HttpContext;
                                                                observe?: 'body';
                                                                params?: HttpParams | {
                                                                    [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
                                                                };
                                                                reportProgress?: boolean;
                                                                responseType?: 'json';
                                                                withCredentials?: boolean;
                                                            } {
        const options = {};

        options['params'] = paramsAsObject ? paramsAsObject : {};
        options['headers'] = headersAsObject ? headersAsObject : {};

        return options;
    }

    createFormDataForFilesToUpload(filesAllowed: FileUploadAllowed[], key = 'keyFormDataForFileUpload'): FormData{
        return this.createFormData(key, filesAllowed);
    }

    private createFormData(keyFormData: string, files: FileUploadAllowed[]): FormData {
        const formData = new FormData();

        files
            .filter((file: FileUploadAllowed) => file.file && file.fileName)
            .forEach((file: FileUploadAllowed) => {
                formData.append(keyFormData, file.file, file.fileName);
            });

        return formData;
    }

    downloadFile(response: HttpResponse<any>): boolean {
        let fileName = response.headers.get('content-disposition')?.split(';')[1].split('=')[1];
        if(fileName) {
            fileName = this.replace(fileName);
            const blob: Blob = response.body;
            const anchor = document.createElement('a');
            anchor.download = fileName;
            anchor.href = window.URL.createObjectURL(blob);
            document.getElementsByTagName('body')[0].appendChild(anchor);
            anchor.click();
            anchor.remove();

            return true;
        }
        else {
            return false;
        }
    }

    replace(str: string): string {
        return str.toString().replace(/"/g, '');
    }
}
