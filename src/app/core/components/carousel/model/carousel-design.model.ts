import {CarouselDesignCards} from "./carousel-design-cards.model";
import {CarouselLayoutDesignRGBA} from "./carousel-layout-design-rgba.model";

// Used in the layout that contains the carousel.
export class CarouselDesign {
    // To give a color and opacity to the background.
    backgroundRGBA: CarouselLayoutDesignRGBA = new CarouselLayoutDesignRGBA();
    // Used in each carousel Card or tile
    cardsDesign: CarouselDesignCards = new CarouselDesignCards();
    // To give a color and opacity to the background of the carousel paginator.
    backgroundRGBAPaginator: CarouselLayoutDesignRGBA = new CarouselLayoutDesignRGBA();

    constructor(init?: Partial<CarouselDesign>) {
        Object.assign(this, init);
    }
}
