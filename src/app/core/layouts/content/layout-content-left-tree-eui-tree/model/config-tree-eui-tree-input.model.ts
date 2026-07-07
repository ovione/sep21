export class ConfigTreeEuiTreeInput {
    public searchPlaceHolder: string;         //  shows the placeholder on the search field

    constructor(init?: Partial<ConfigTreeEuiTreeInput>) {
        Object.assign(this, init);
    }
}
