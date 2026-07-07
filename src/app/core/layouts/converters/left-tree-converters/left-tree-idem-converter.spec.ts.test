import {LeftTreeIdemConverter} from "./left-tree-idem-converter";
import {LayoutItemTreeData} from "../../model/layout-item-tree.model";
import {constructLayoutItemTreeData} from "./layout-item-tree-data.spec.util";

describe('MetaDataColectorEuiTreeService', () => {
    let converter: LeftTreeIdemConverter;

    beforeEach(() => {
        converter = new LeftTreeIdemConverter();
    });

    it('convert', () => {
        const tree: LayoutItemTreeData = constructLayoutItemTreeData();

        const treeConverted: any = converter.convert(tree);

        expect(treeConverted).toBe(tree);
    });
});

