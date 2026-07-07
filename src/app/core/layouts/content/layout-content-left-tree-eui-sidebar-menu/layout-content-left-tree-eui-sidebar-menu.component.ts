import { Component, effect, EventEmitter, input, InputSignal, Output, inject } from '@angular/core';

import {EuiMenuItem} from "@eui/base";
import {FilterCriteria} from "../../model/filter-criteria.model";
import {LayoutComunicatorService} from "../../services/layout-comunicator.service";
import {ConfigTreeInput} from "../layout-content-left-tree/model/config-tree-input.model";
import {ConfigTreeEuiSidebarMenuInput} from "./model/config-tree-eui-sidebar-menu-input.model";
import {MetaDataColectorEuiSidebarMenuService} from "./meta-data-colector-eui-sidebar-menu.service";
import {EUI_SIDEBAR_MENU} from "@eui/components/eui-sidebar-menu";

@Component({
    selector: 'eplatform-layout-content-left-tree-eui-sidebar-menu',
    templateUrl: './layout-content-left-tree-eui-sidebar-menu.component.html',
    imports: [
    ...EUI_SIDEBAR_MENU
],
})
export class LayoutContentLeftTreeEuiSidebarMenuComponent {
    private layoutComunicatorService = inject(LayoutComunicatorService);
    private metaDataColectorService = inject(MetaDataColectorEuiSidebarMenuService);

    configTree: InputSignal<ConfigTreeInput> = input.required<ConfigTreeInput>();
    treeItems: InputSignal<Array<EuiMenuItem>> = input.required<Array<EuiMenuItem>>();
    configTreeItems: ConfigTreeEuiSidebarMenuInput;
    treeItemsToDisplay: Array<EuiMenuItem>;

    @Output('customToolTip') customToolTipEmitter = new EventEmitter<string>();

    constructor() {
        effect(() => {
            this.configTreeItems = this.configTree().configTreeImplementation;
            this.treeItemsToDisplay = this.treeItems();
            this.fillTreeItemsWithEmptyCommandCalls(this.treeItemsToDisplay);
        });
    }

    private fillTreeItemsWithEmptyCommandCalls(treeItems: Array<EuiMenuItem> = []) {
        treeItems.forEach((treeItem: EuiMenuItem) => {
            treeItem.command = () => {};
            this.fillTreeItemsWithEmptyCommandCalls(treeItem.children);
        });
    }

    public treeItemClick(treeItem: EuiMenuItem) {
        this.deactivateMenuItems(this.treeItemsToDisplay);
        treeItem.active = true;

        const filterCriteria = new FilterCriteria();
        this.metaDataColectorService.collectFilterCriteria(treeItem, filterCriteria);
        this.layoutComunicatorService.notify(filterCriteria);
        this.customToolTipEmitter.emit('');
    }

    private deactivateMenuItems(items: EuiMenuItem[]) {
        items?.forEach(item => {
            item.active = false;
            // If the item has children, recursively deactivate them
            if (item.children?.length > 0) {
                this.deactivateMenuItems(item.children);
            }
        });
    }

    onMouseOver(event: any) {
        const targetElement = event.target as HTMLElement;
        if (event.type === 'mouseover' && targetElement?.className === 'eui-menu-item__label') {
            this.customToolTipEmitter.emit(targetElement.innerText);
        } else {
            this.customToolTipEmitter.emit('');
        }
    }
}
