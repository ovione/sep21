import {inject, Injectable, SecurityContext} from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
    private sanitizer = inject(DomSanitizer);

    navigateWithUrlSameTab(url) {
        this.navigateTarget(url,'_parent', null);
    }

    navigateWithUrlNewTab(url) {
        this.navigateTarget(url,'_blank', 'noopener,noreferrer');
    }

    private navigateTarget(url: string, target: string, relAttributeTokens: string) {
        const sanitizedUrl = this.sanitizer.sanitize(SecurityContext.URL, url);
        if (relAttributeTokens) {
            window.open(sanitizedUrl, target, 'noopener,noreferrer');
        } else {
            window.open(sanitizedUrl, target);
        }
    }

}
