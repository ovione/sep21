import {ServiceSpecUtil} from "../../../services/util/service.spec.util";
import {MetaDataColectorEuiSidebarMenuService} from "./meta-data-colector-eui-sidebar-menu.service";
import {FilterCriteria} from "../../model/filter-criteria.model";
import { EuiMenuItem } from '@eui/components/eui-menu';

describe('MetaDataColectorEuiSidebarMenuService', () => {
    let serviceTest: ServiceSpecUtil<MetaDataColectorEuiSidebarMenuService>;

    beforeEach(() => {
        serviceTest = new ServiceSpecUtil(MetaDataColectorEuiSidebarMenuService);
    });

    it('should create', () => {
        serviceTest.verifyServiceWasCreated();
    });

    it('collectFilterCriteria', () => {
        const euiMenuItemChild: EuiMenuItem = createTree();
        const euiMenuItemParent: EuiMenuItem = euiMenuItemChild.parent;

        let filterCriteria = new FilterCriteria();
        serviceTest.getService().collectFilterCriteria(euiMenuItemParent, filterCriteria);
        expectFilterCriteria(filterCriteria,
                            'idParent_1_1_Value',
                            'idParent_1_2_Value',
                            void 0,
                            void 0);

        filterCriteria = new FilterCriteria();
        serviceTest.getService().collectFilterCriteria(euiMenuItemChild, filterCriteria);
        expectFilterCriteria(filterCriteria,
                            'idParent_1_1_Value',
                            'idParent_1_2_Value',
                            'idChild_2_1_Value',
                            'idChild_2_2_Value');
    });

    function expectFilterCriteria(filterCriteria: FilterCriteria,
                                  idParent_1_1_Value: string,
                                  idParent_1_2_Value: string,
                                  idChild_2_1_Value: string,
                                  idChild_2_2_Value: string) {
        expect(filterCriteria.get('idParent_1_1')).toBe(idParent_1_1_Value);
        expect(filterCriteria.get('idParent_1_2')).toBe(idParent_1_2_Value);

        expect(filterCriteria.get('idChild_2_1')).toBe(idChild_2_1_Value);
        expect(filterCriteria.get('idChild_2_2')).toBe(idChild_2_2_Value);
    }

    function createTree(): EuiMenuItem {

        const euiMenuItemParent: EuiMenuItem = new EuiMenuItem({
            id: "idParent_1",
            metadata: {
                idParent_1_1: 'idParent_1_1_Value',
                idParent_1_2: 'idParent_1_2_Value',
            }
        });

        const euiMenuItemChild: EuiMenuItem = new EuiMenuItem({
            id: "idChild_1",
            metadata: {
                idChild_2_1: 'idChild_2_1_Value',
                idChild_2_2: 'idChild_2_2_Value',
            },
            parent: euiMenuItemParent
        });

        return euiMenuItemChild;
    }

});

