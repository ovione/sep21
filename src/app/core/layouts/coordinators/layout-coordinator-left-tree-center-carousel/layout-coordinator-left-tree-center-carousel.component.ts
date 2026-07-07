import {Component, EventEmitter, input, InputSignal, NO_ERRORS_SCHEMA, Output, TemplateRef} from '@angular/core';
import {CommonModule} from "@angular/common";
import {LayoutTemplateLeftCenterComponent} from "../../templates/layout-template-left-center/layout-template-left-center.component";
import {LayoutComunicatorService} from "../../services/layout-comunicator.service";
import {LayoutContentCenterCarouselComponent} from "../../content/layout-content-center-carousel/layout-content-center-carousel.component";
import {ConfigLeftColumn} from "../../templates/layout-template-left-center/model/config-left-column.model";
import {
    LayoutContentLeftTreeComponent
} from "../../content/layout-content-left-tree/layout-content-left-tree.component";
import {ConfigTreeInput} from "../../content/layout-content-left-tree/model/config-tree-input.model";

@Component({
    selector: 'eplatform-layout-coordinator-left-tree-center-carousel',
    templateUrl: './layout-coordinator-left-tree-center-carousel.component.html',
    providers: [LayoutComunicatorService],
    imports: [
        CommonModule,
        LayoutTemplateLeftCenterComponent,
        LayoutContentCenterCarouselComponent,
        LayoutContentLeftTreeComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class LayoutCoordinatorLeftTreeCenterCarouselComponent {
    configLeftColumn: InputSignal<ConfigLeftColumn> = input.required<ConfigLeftColumn>();
    configLeftContent: InputSignal<ConfigTreeInput> = input.required<ConfigTreeInput>();
    templateHeader: InputSignal<TemplateRef<any>> = input<TemplateRef<any>>();
    templateLeftContent: InputSignal<TemplateRef<any>> = input.required<TemplateRef<any>>();
    configRightContent: InputSignal<any> = input.required<any>();
    templateRightContent: InputSignal<TemplateRef<any>> = input.required<TemplateRef<any>>();
    toolTip: string;
    @Output('customToolTip') customToolTipEmitter = new EventEmitter<string>();

    customToolTip(toolTipVar: string) {
      this.toolTip = toolTipVar;
      this.customToolTipEmitter.emit(toolTipVar);
    }
}
