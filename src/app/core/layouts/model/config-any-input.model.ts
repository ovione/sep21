import {LayoutDesign} from "./design/layout-design.model";

export class ConfigAnyInput {
    public url: string;
    public delegateBackendCalls: boolean = false;
    public layoutDesign: LayoutDesign = new LayoutDesign();

    constructor(init?: Partial<ConfigAnyInput>) {
        Object.assign(this, init);
    }
}
