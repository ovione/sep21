import {LayoutDesign} from "../../../model/design/layout-design.model";

export class ConfigTreeEuiSidebarMenuInput {
    public hasIcons = true;         //  shows the left side icons
    public isCollapsed = false;     //  collapse horizontally
    public hasFilter = false;       //  displays global filter
    public hasTooltip = true;       //  ??
    public expandAllItems = false;   //  Expand all items vertically
    public layoutDesign: LayoutDesign = new LayoutDesign();

    constructor(init?: Partial<ConfigTreeEuiSidebarMenuInput>) {
        Object.assign(this, init);
    }
}
