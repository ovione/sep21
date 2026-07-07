import {LeftTreeConverterBase} from "./left-tree-converter.base";
import {LayoutItemTree, LayoutItemTreeData} from "../../model/layout-item-tree.model";
import {LayoutItemTreeIdGenerator} from "./layout-item-tree-id-generator";
import {TreeDataModel, TreeItemModel} from "@eui/components/eui-tree";

export class LeftTreeToEuiTreeConverter extends LeftTreeConverterBase {

    convert(layoutItemTreeData: LayoutItemTreeData = [], queryparamKey='type', queryparamValue='id', seed: number = 0, seedId: string = ''): TreeDataModel {
        return layoutItemTreeData.map((layoutItemTree: LayoutItemTree) => {
            const id: string = LayoutItemTreeIdGenerator.generateID(seedId, ++seed);
            const metadata: any = this.getMetadata(layoutItemTree, queryparamKey, queryparamValue);
            const children: TreeDataModel = this.convert(layoutItemTree.children, queryparamKey, queryparamValue, 0, id);

            const treeItemModel: TreeItemModel = {
                node: {
                    selectable: true,
                    treeContentBlock: {
                        id: id,
                        label: layoutItemTree.label,
                        metadata: metadata
                    },
                    selectConfig: {
                        recursive: true,
                    },
                },
                children: children?.length > 0 ? children : void 0,
            }

            this.determineIconsAndColors(treeItemModel, layoutItemTree);

            return treeItemModel;
        });
    }

    private getMetadata(layoutItemTree: LayoutItemTree, queryparamKey: string, queryparamValue: string): any {
        let key = layoutItemTree[queryparamKey];
        switch (key) {
            case 'OBLIGATION':
                key = 'obligationId';
                break;
            case 'OBLIGATION_DEADLINE':
                key = 'deadline';
                break;
            case 'OBLIGATION_TYPE':
                key = 'obligationType';
                break;
        }
        const value = layoutItemTree[queryparamValue];

        const metadata = {};
        metadata[key] = value;

        return metadata;
    }

    private determineIconsAndColors(treeItemModel: TreeItemModel, layoutItemTree: LayoutItemTree) {
        switch (layoutItemTree.type) {
            case 'OBLIGATION':
                layoutItemTree.campaign ?   treeItemModel.node.treeContentBlock.iconSvgName = 'eui-ecl-list' :
                                            treeItemModel.node.treeContentBlock.iconSvgName = 'eui-ecl-file';
                treeItemModel.node.treeContentBlock.iconTypeClass = 'grey-100';
                break;
            case 'OBLIGATION_DEADLINE':
                treeItemModel.node.treeContentBlock.iconSvgName = 'eui-scheduled-list';
                treeItemModel.node.treeContentBlock.iconTypeClass = 'grey-100';
                break;
            case 'OBLIGATION_TYPE':
                treeItemModel.node.treeContentBlock.iconSvgName = void 0;
                treeItemModel.node.treeContentBlock.iconTypeClass = void 0;
                break;
            default:
                treeItemModel.node.treeContentBlock.iconSvgName = layoutItemTree.iconSvgName;
                treeItemModel.node.treeContentBlock.iconTypeClass = layoutItemTree.iconTypeClass;
        }
    }
}
