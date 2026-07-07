export class LayoutDesignRGBA {
    red: number = 255;
    green: number = 255;
    blue: number = 255;
    opacity: number = 1;

    constructor(init?: Partial<LayoutDesignRGBA>) {
        Object.assign(this, init);
    }

    // to be used like [ngStyle]="{background: rgba()}"
    rgba(): string {
        return `rgba(
            ${this.red},
            ${this.green},
            ${this.blue},
            ${this.opacity})`;
    }
}
