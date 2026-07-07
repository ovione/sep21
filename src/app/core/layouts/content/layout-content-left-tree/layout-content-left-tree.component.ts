import { Component, effect, Injector, input, InputSignal, TemplateRef, inject } from '@angular/core';
import {NgTemplateOutlet} from "@angular/common";
import {take} from "rxjs";
import {GenericHttpService} from "../../../services/generic-http/generic-http.service";
import {ConfigTreeInput} from "./model/config-tree-input.model";
import {LayoutItemTreeData} from "../../model/layout-item-tree.model";

@Component({
    selector: 'eplatform-layout-content-left-tree',
    templateUrl: './layout-content-left-tree.component.html',
    imports: [
    NgTemplateOutlet
],
})
export class LayoutContentLeftTreeComponent {
    private genericHttp = inject(GenericHttpService);
    protected injector = inject(Injector);

    configTree: InputSignal<ConfigTreeInput> = input.required<ConfigTreeInput>();
    template: InputSignal<TemplateRef<any>> = input.required<TemplateRef<any>>();
    treeItems: Array<any>;

    constructor() {
        effect(() => {
            this.getTreeItems(this.configTree().url);
        });
    }

    private getTreeItems(url: string) {
        this.genericHttp.get<LayoutItemTreeData>(url).pipe(take(1)).subscribe({
            next: this.getTreeItemsSuccess.bind(this)
        })
    }

    private getTreeItemsSuccess(treeItems: LayoutItemTreeData) {
        const treeItemsConverted = this.configTree().converter.convert(treeItems);
        this.treeItems = treeItemsConverted;
    }
}
