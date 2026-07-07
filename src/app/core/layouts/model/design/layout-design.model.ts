import {LayoutDesignRGBA} from "../layout-design-rgba.model";

export class LayoutDesign {
    layoutDesignRGBA: LayoutDesignRGBA = new LayoutDesignRGBA({
        red: 255,
        green: 255,
        blue: 255,
        opacity: 1
    });

    constructor(init?: Partial<LayoutDesign>) {
        Object.assign(this, init);
    }
}
