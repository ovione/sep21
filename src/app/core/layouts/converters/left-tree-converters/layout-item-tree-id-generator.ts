export class LayoutItemTreeIdGenerator {
    static generateID(seedId: string = '', seed: number = 0): string {
        if(seedId !== '') {
            seedId = `${seedId}.`;
        }

        return seedId + seed;
    }
}
