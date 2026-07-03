import {inject, Injectable} from '@angular/core';
import {EuiMessageBoxConfig, EuiMessageBoxService} from '@eui/components/eui-message-box';
import {MessageBoxConfigInterface} from './message-box-config.interface';

@Injectable({
  providedIn: 'root'
})
export class MessageBoxService {
    private euiMessageBoxService = inject(EuiMessageBoxService);


    private defaultConfig: Partial<MessageBoxConfigInterface> = {
        title: 'Warning',
        acceptLabel: 'Ok',
        dismissLabel: 'Cancel',
        content: 'You will lose all the changes!',
        variant: 'warning',
        accept: () => {},
        hasDismissButton: true
    };

    public openPrimary(config: Partial<MessageBoxConfigInterface> = {}): void {
        config['variant'] = 'primary';

        this.openMessageBox(config);
    }

    public openSecondary(config: Partial<MessageBoxConfigInterface> = {}): void {
        config['variant'] = 'secondary';

        this.openMessageBox(config);
    }

    public openInfo(config: Partial<MessageBoxConfigInterface> = {}): void {
        config['variant'] = 'info';

        this.openMessageBox(config);
    }

    public openSuccess(config: Partial<MessageBoxConfigInterface> = {}): void {
        config['variant'] = 'success';

        this.openMessageBox(config);
    }

    public openWarning(config: Partial<MessageBoxConfigInterface> = {}): void {
        config['variant'] = 'warning';

        this.openMessageBox(config);
    }

    public openDanger(config: Partial<MessageBoxConfigInterface> = {}): void {
        config['variant'] = 'danger';

        this.openMessageBox(config);
    }

    public openAccent(config: Partial<MessageBoxConfigInterface> = {}): void {
        config['variant'] = 'accent';

        this.openMessageBox(config);
    }

    public openMessageBox(config: Partial<MessageBoxConfigInterface> = {}): void {
        this.euiMessageBoxService.openMessageBox(new EuiMessageBoxConfig({ ...this.defaultConfig, ...config }));
    }

    public closeMessageBox(): void {
        this.euiMessageBoxService.closeMessageBox();
    }
}
