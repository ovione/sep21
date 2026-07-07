import {Component, EventEmitter, input, InputSignal, Output, TemplateRef} from '@angular/core';
import {CommonModule, NgStyle} from "@angular/common";
import {ConfigLeftColumn} from "./model/config-left-column.model";
import {EUI_PAGE} from "@eui/components/eui-page";

@Component({
    selector: 'app-layout-template-left-center',
    templateUrl: './layout-template-left-center.component.html',
    styleUrl: 'layout-template-left-center.component.scss',
    imports: [
        CommonModule,
        NgStyle,
        ...EUI_PAGE,
    ],
})
export class LayoutTemplateLeftCenterComponent {
    templateHeader: InputSignal<TemplateRef<any>> = input<TemplateRef<any>>();
    configLeftColumn: InputSignal<ConfigLeftColumn> = input.required<ConfigLeftColumn>();
    @Output('customToolTip') customToolTipEmitter = new EventEmitter<string>();

    onCollapse(){
        this.customToolTipEmitter.emit('');
    }

    backgroundLeftColumn(): string {
        return this.configLeftColumn().layoutDesign.layoutDesignRGBA.rgba();
    }
}
