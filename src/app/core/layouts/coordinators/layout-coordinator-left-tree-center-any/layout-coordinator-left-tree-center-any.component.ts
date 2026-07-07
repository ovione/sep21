import {Component, EventEmitter, input, InputSignal, NO_ERRORS_SCHEMA, Output, TemplateRef} from '@angular/core';

import {
    LayoutTemplateLeftCenterComponent
} from "../../templates/layout-template-left-center/layout-template-left-center.component";
import {LayoutComunicatorService} from "../../services/layout-comunicator.service";
import {ConfigLeftColumn} from "../../templates/layout-template-left-center/model/config-left-column.model";
import {
    LayoutContentCenterAnyComponent
} from "../../content/layout-content-center-any/layout-content-center-any.component";
import {ConfigAnyInput} from "../../model/config-any-input.model";
import {
    LayoutContentLeftTreeComponent
} from "../../content/layout-content-left-tree/layout-content-left-tree.component";
import {ConfigTreeInput} from "../../content/layout-content-left-tree/model/config-tree-input.model";

@Component({
    selector: 'eplatform-layout-coordinator-left-tree-center-any',
    providers: [LayoutComunicatorService],
    templateUrl: './layout-coordinator-left-tree-center-any.component.html',
    imports: [
    LayoutTemplateLeftCenterComponent,
    LayoutContentCenterAnyComponent,
    LayoutContentLeftTreeComponent
],
    schemas: [NO_ERRORS_SCHEMA]
})
export class LayoutCoordinatorLeftTreeCenterAnyComponent {
    configLeftColumn: InputSignal<ConfigLeftColumn> = input.required<ConfigLeftColumn>();
    configLeftContent: InputSignal<ConfigTreeInput> = input.required<ConfigTreeInput>();
    templateLeftContent: InputSignal<TemplateRef<any>> = input.required<TemplateRef<any>>();
    configRightContent: InputSignal<ConfigAnyInput> = input.required<ConfigAnyInput>();
    templateRightContent: InputSignal<TemplateRef<any>> = input.required<TemplateRef<any>>();
    toolTip: string;
    @Output('customToolTip') customToolTipEmitter = new EventEmitter<string>();

    customToolTip(toolTipVar: string) {
        this.toolTip = toolTipVar;
        this.customToolTipEmitter.emit(toolTipVar);
    }
}
