import { Component, effect, input, InputSignal, OnInit, ViewChild, inject } from '@angular/core';

import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {EUI_TREE, TreeDataModel, TreeItemModel} from "@eui/components/eui-tree";
import {EuiTreeSelectionChanges} from "@eui/components/eui-tree";
import {ConfigTreeInput} from "../layout-content-left-tree/model/config-tree-input.model";
import {LayoutComunicatorService} from "../../services/layout-comunicator.service";
import {FilterCriteria} from "../../model/filter-criteria.model";
import {ConfigTreeEuiTreeInput} from "./model/config-tree-eui-tree-input.model";
import {MetaDataColectorEuiTreeService} from "./meta-data-colector-eui-tree.service";
import {EUI_ICON} from "@eui/components/eui-icon";
import {EUI_INPUT_GROUP} from "@eui/components/eui-input-group";
import {EUI_INPUT_TEXT} from "@eui/components/eui-input-text";
import {EUI_BUTTON} from "@eui/components/eui-button";

@Component({
    selector: 'eplatform-layout-content-left-tree-eui-tree',
    providers: [MetaDataColectorEuiTreeService],
    templateUrl: './layout-content-left-tree-eui-tree.component.html',
    imports: [
    ReactiveFormsModule,
    ...EUI_ICON,
    ...EUI_TREE,
    ...EUI_INPUT_GROUP,
    ...EUI_BUTTON,
    ...EUI_INPUT_TEXT
],
})
export class LayoutContentLeftTreeEuiTreeComponent implements OnInit {
    private layoutComunicatorService = inject(LayoutComunicatorService);
    private metaDataColectorService = inject(MetaDataColectorEuiTreeService);

    configTree: InputSignal<ConfigTreeInput> = input.required<ConfigTreeInput>();
    treeItems: InputSignal<Array<TreeItemModel>> = input.required<Array<TreeItemModel>>();
    configTreeItems: ConfigTreeEuiTreeInput;
    treeItemsToDisplay: TreeDataModel;

    public searchTreeInputControl = new FormControl();
    @ViewChild('treeInstance') public treeInstance: any;
    public isExpandedAll = false;
    public showLines = true;   // when false, not working because it looses identation. Maybe solved in version 18 TODO

    constructor() {
        effect(() => {
            this.configTreeItems = this.configTree().configTreeImplementation;
            this.treeItemsToDisplay = this.treeItems();
            this.metaDataColectorService.prepareTreeParents(this.treeItemsToDisplay);
        });
    }

    ngOnInit() {
        this.searchTreeInputControl.valueChanges.subscribe((filterCriteria: string) => {
            this.treeInstance?.filterTerm(filterCriteria);
        });
    }

    public expandAll() {
        this.isExpandedAll = true;
        this.treeInstance?.expandAll();
    }

    public collapseAll() {
        this.isExpandedAll = false;
        this.treeInstance?.collapseAll();
    }

    public treeItemClick(evt: EuiTreeSelectionChanges) {
        if(evt.selection?.length > 0) {
            const treeItem: TreeItemModel = evt.selection[0];
            let filterCriteria: FilterCriteria = this.metaDataColectorService.getMetadataAsFilterCriteria(treeItem.node.treeContentBlock.id);
            this.layoutComunicatorService.notify(filterCriteria);
        }
    }
}
