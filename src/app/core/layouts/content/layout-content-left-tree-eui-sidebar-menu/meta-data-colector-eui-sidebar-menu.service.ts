import { Injectable } from '@angular/core';
import {FilterCriteria} from "../../model/filter-criteria.model";
import { EuiMenuItem } from '@eui/components/eui-menu';

@Injectable({
  providedIn: 'root'
})
export class MetaDataColectorEuiSidebarMenuService {

    public collectFilterCriteria(treeItem: EuiMenuItem, filterCriteria: FilterCriteria) {
        this.setMetaDataInFilterCriteria(filterCriteria, treeItem.metadata);
        if(treeItem.parent) {
            this.collectFilterCriteria(treeItem.parent, filterCriteria);
        }
    }

    private setMetaDataInFilterCriteria(filterCriteria: FilterCriteria, metadata: any = {}): any {
        for (const [key, value] of Object.entries(metadata)) {
            filterCriteria.setCriteria(key, value);
        }
    }
}
