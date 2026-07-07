/*
Used in each carousel Card or tile
 */
export class CarouselDesignCards {
    titleTextColor: string = '#303030';
    titleFontWeight: number = 700;

    constructor(init?: Partial<CarouselDesignCards>) {
        Object.assign(this, init);
    }
}
