import {ServiceSpecUtil} from "../../../services/util/service.spec.util";
import {FilterCriteria} from "../../model/filter-criteria.model";
import {MetaDataColectorEuiTreeService} from "./meta-data-colector-eui-tree.service";
import {TreeDataModel} from "@eui/components/eui-tree";

describe('MetaDataColectorEuiTreeService', () => {
    let serviceTest: ServiceSpecUtil<MetaDataColectorEuiTreeService>;

    beforeEach(() => {
        serviceTest = new ServiceSpecUtil(MetaDataColectorEuiTreeService);
    });

    it('should create', () => {
        serviceTest.verifyServiceWasCreated();
    });

    it('collectFilterCriteria', () => {
        const treeItems: TreeDataModel = createTree();
        serviceTest.getService().prepareTreeParents(treeItems);

        let filterCriteria: FilterCriteria = serviceTest.getService().getMetadataAsFilterCriteria('idParent_1');
        expectFilterCriteria(   filterCriteria,
                                'idParent_1_1_Value',
                                'idParent_1_2_Value',
                                void 0,
                                void 0,
                                void 0,
                                void 0);

        filterCriteria = serviceTest.getService().getMetadataAsFilterCriteria('idChild_1');
        expectFilterCriteria(   filterCriteria,
            'idParent_1_1_Value',
            'idParent_1_2_Value',
            'idChild_1_1_Value',
            'idChild_1_2_Value',
            void 0,
            void 0);

        // filterCriteria = serviceTest.getService().getMetadataAsFilterCriteria('idChild_2');
        // expectFilterCriteria(   filterCriteria,
        //     'idParent_1_1_Value',
        //     'idParent_1_2_Value',
        //     'idChild_1_1_Value',
        //     'idChild_1_2_Value',
        //     'idChild_2_1_Value',
        //     'idChild_2_2_Value');
    });

    function expectFilterCriteria(filterCriteria: FilterCriteria,
                                  idParent_1_1_Value: string,
                                  idParent_1_2_Value: string,
                                  idChild_1_1_Value: string,
                                  idChild_1_2_Value: string,
                                  idChild_2_1_Value: string,
                                  idChild_2_2_Value: string,) {

        expect(filterCriteria.get('idParent_1_1')).toBe(idParent_1_1_Value);
        expect(filterCriteria.get('idParent_1_2')).toBe(idParent_1_2_Value);

        expect(filterCriteria.get('idChild_1_1')).toBe(idChild_1_1_Value);
        expect(filterCriteria.get('idChild_1_2')).toBe(idChild_1_2_Value);

        expect(filterCriteria.get('idChild_2_1')).toBe(idChild_2_1_Value);
        expect(filterCriteria.get('idChild_2_2')).toBe(idChild_2_2_Value);
    }

    function createTree(): TreeDataModel {
       return [{
            node: {
                selectable: true,
                    treeContentBlock: {
                        id: 'idParent_1',
                        label: 'Type t1 very large Type to see if the resizable column works',
                            iconSvgName: 'eui-file-empty',
                            iconTypeClass: 'primary-100',
                        metadata: {
                            idParent_1_1: 'idParent_1_1_Value',
                            idParent_1_2: 'idParent_1_2_Value',
                        }
                },
                selectConfig: {
                    recursive: true,
                },
            },
            children: [
                {
                    node: {
                        selectable: true,
                        treeContentBlock: {
                            id: 'idChild_1',
                            label: 'Campaign long too long c1',
                            iconSvgName: 'eui-file-text',
                            iconTypeClass: 'success-100',
                            metadata: {
                                idChild_1_1: 'idChild_1_1_Value',
                                idChild_1_2: 'idChild_1_2_Value',
                            },
                        },
                        selectConfig: {
                            recursive: true
                        },
                    },
                    children: [
                        {
                            node: {
                                selectable: true,
                                treeContentBlock: {
                                    id: 'idChild_2',
                                    label: 'Campaign long too long c1',
                                    iconSvgName: 'eui-file-text',
                                    iconTypeClass: 'success-100',
                                    metadata: {
                                        idChild_2_1: 'idChild_2_1_Value',
                                        idChild_2_2: 'idChild_2_2_Value',
                                    },
                                },
                                selectConfig: {
                                    recursive: true
                                },
                            },
                        },
                    ],
                },
            ],
        }];
    }

});

