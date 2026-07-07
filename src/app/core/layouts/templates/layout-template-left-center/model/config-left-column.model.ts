import {LayoutDesign} from "../../../model/design/layout-design.model";

export class ConfigLeftColumn {
    public columnLabel: string;
    public layoutDesign: LayoutDesign = new LayoutDesign();
    public isCollapsible: boolean = true;
    public size: string = '4xl'; // m, l, xl, 2xl, 3xl, 4xl

    constructor(init?: Partial<ConfigLeftColumn>) {
        Object.assign(this, init);
    }
}
