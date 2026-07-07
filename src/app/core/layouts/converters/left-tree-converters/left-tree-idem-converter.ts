import {LeftTreeConverterBase} from "./left-tree-converter.base";
import {LayoutItemTreeData} from "../../model/layout-item-tree.model";

export class LeftTreeIdemConverter extends LeftTreeConverterBase {

  convert(layoutItemTreeData: LayoutItemTreeData): Array<any> {
      return layoutItemTreeData;
  }
}
