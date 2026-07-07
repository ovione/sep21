import {LeftTreeConverterBase} from "../../../converters/left-tree-converters/left-tree-converter.base";

export class ConfigTreeInput {
    public url: string;
    public converter: LeftTreeConverterBase;
    public configTreeImplementation: any;

    constructor(init?: Partial<ConfigTreeInput>) {
        Object.assign(this, init);
    }
}
