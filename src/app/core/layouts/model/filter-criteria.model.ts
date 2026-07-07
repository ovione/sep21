export class FilterCriteria {
    private criteria: { [key: string]: string } = {};

    setCriteria(key: string, value) {
        this.criteria[key] = value;
    }

    getCriteria(): { [key: string]: string } {
        return this.criteria
    }

    get(key: string): string {
        return this.criteria[key];
    }

    has(key: string): boolean {
        return !!this.criteria[key];
    }
}
