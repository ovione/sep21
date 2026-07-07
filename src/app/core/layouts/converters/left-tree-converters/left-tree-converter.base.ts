import {LayoutItemTreeData} from "../../model/layout-item-tree.model";

export class LeftTreeConverterBase {
    convert(treeItems: LayoutItemTreeData = [], queryparamKey='category', queryparamValue='id', seed: number = 0): Array<any> {
        return treeItems;
    }
}
