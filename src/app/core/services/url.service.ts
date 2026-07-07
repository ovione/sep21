import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Url} from "./model/url";

@Injectable({
    providedIn: 'root'
})
export class UrlService {
    private urlsCached: Url;
    protected http = inject(HttpClient);

    getUrls(): Observable<Url> {
        return this.urlsCached ? of(this.urlsCached) : this.getUrlsWithHttp()
                                                .pipe(
                                                    tap({next: this.cacheUrl.bind(this)}));
    }

    getUrlsCached(): Url {
        return this.urlsCached;
    }

    getUrlsWithHttp(): Observable<Url> {
        return this.http.get<Url>('restapi/protected/urls');
    }

    private cacheUrl(url: Url) {
        this.urlsCached = url;
    }
}
