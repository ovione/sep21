export type LayoutItemTreeData = Array<LayoutItemTree>;

export class LayoutItemTree {
    id: string;
    label: string;
    iconSvgName?: string;
    iconTypeClass?: string;
    tagLabel?: string;
    tagTypeClass?: string;
    metadata?: any;
    type: 'OBLIGATION' | 'OBLIGATION_DEADLINE' | 'OBLIGATION_TYPE';
    campaign?: boolean;
    children?: LayoutItemTreeData = [];

    constructor(init?: Partial<LayoutItemTree>) {
        Object.assign(this, init);
    }
}
