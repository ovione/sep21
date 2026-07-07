import {inject, Injectable} from '@angular/core';
import { EuiDialogConfig, EuiDialogService } from '@eui/components/eui-dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogDynamicService {
    private euiDialogService = inject(EuiDialogService);

    open(title: string, content: string, accept: () => {}) {
        this.euiDialogService.openDialog(new EuiDialogConfig({
            title: title,
            content:  content,
            height: '100vh',
            acceptLabel: 'Accept',
            hasCloseButton: false,
            hasClosedOnEscape: false,
            hasDismissButton: false,
            accept: () => {
                if(accept) { accept(); };
            }
        }));
    }
}
