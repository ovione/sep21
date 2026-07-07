import { EuiMenuItem } from "@eui/base";
import {LeftTreeConverterBase} from "./left-tree-converter.base";
import {LayoutItemTree, LayoutItemTreeData} from "../../model/layout-item-tree.model";

export class LeftTreeToEuiMenuItemConverter extends LeftTreeConverterBase {

    convert(layoutItemTreeData: LayoutItemTreeData = [], queryparamKey='type', queryparamValue='id', seed: number = 0, seedId: string = ''): Array<EuiMenuItem> {
        return layoutItemTreeData.map((layoutItemTree: LayoutItemTree) => {
            const id: string = seedId + ++seed;
            const euiMenuItem: EuiMenuItem = {
                label: layoutItemTree.label,
                metadata: this.getMetadata(layoutItemTree, queryparamKey, queryparamValue),
                id: id,
            };
            this.determineIconsAndColors(euiMenuItem, layoutItemTree);

            const children: Array<EuiMenuItem> = this.convert(layoutItemTree.children, queryparamKey, queryparamValue, 0, id);
            euiMenuItem.children = children?.length > 0 ? children : void 0;

            return euiMenuItem;
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

    private determineIconsAndColors(euiMenuItem: EuiMenuItem, layoutItemTree: LayoutItemTree) {
        euiMenuItem.tagLabel = layoutItemTree.tagLabel;
        euiMenuItem.tagTypeClass = layoutItemTree.tagTypeClass;

        switch (layoutItemTree.type) {
            case 'OBLIGATION':
                layoutItemTree.campaign ?   euiMenuItem.iconSvgName = 'eui-ecl-list' :
                                            euiMenuItem.iconSvgName = 'eui-ecl-file';
                euiMenuItem.iconTypeClass = 'grey-100';
                break;
            case 'OBLIGATION_DEADLINE':
                euiMenuItem.iconSvgName = 'eui-scheduled-list';
                euiMenuItem.iconTypeClass = 'grey-100';
                break;
            case 'OBLIGATION_TYPE':
                euiMenuItem.iconSvgName = void 0;
                euiMenuItem.iconTypeClass = void 0;
                break;
            default:
                euiMenuItem.iconSvgName = layoutItemTree.iconSvgName;
                euiMenuItem.iconTypeClass = layoutItemTree.iconTypeClass;
        }
    }
}
