import { Injectable } from '@angular/core';
import { TreeDataModel, TreeItemModel } from "@eui/components/eui-tree";
import {FilterCriteria} from "../../model/filter-criteria.model";
import {TreeHelperNode} from "./model/tree-helper-node.model";

@Injectable({
  providedIn: 'root'
})
export class MetaDataColectorEuiTreeService {
    private treeHelper: Map<string, TreeHelperNode>;

    public prepareTreeParents(treeItems: TreeDataModel) {
        this.treeHelper = new Map<string, TreeHelperNode>();
        this.createTreeHelper(treeItems, this.treeHelper)
    }

    private createTreeHelper(treeItems: Array<TreeItemModel>, treeHelper: Map<string, TreeHelperNode>, parent?: string) {
        treeItems.forEach((treeItem: TreeItemModel) => {
            const treeContentBlock = treeItem.node.treeContentBlock;
            treeHelper.set(treeContentBlock.id, new TreeHelperNode(parent, treeContentBlock.metadata) );
            this.createTreeHelper(treeItem.children ?? [], treeHelper, treeContentBlock.id);
        })
    }

    public getMetadataAsFilterCriteria(nodeId: string, filterCriteria: FilterCriteria = new FilterCriteria()): FilterCriteria {
        const treeHelperNode = this.treeHelper.get(nodeId);
        if(treeHelperNode) {
            for (const [key, value] of Object.entries(treeHelperNode.metadata)) {
                filterCriteria.setCriteria(key, value);
            }
            if(treeHelperNode.parent) {
                this.getMetadataAsFilterCriteria(treeHelperNode.parent, filterCriteria);
            }
        }

        return filterCriteria;
    }
}
