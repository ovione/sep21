import {LayoutDesign} from "../../../model/design/layout-design.model";

export class ConfigLeftColumn {
    public columnLabel: string;
    public layoutDesign: LayoutDesign = new LayoutDesign();
    public isCollapsible: boolean = true;

    constructor(init?: Partial<ConfigLeftColumn>) {
        Object.assign(this, init);
    }
}
