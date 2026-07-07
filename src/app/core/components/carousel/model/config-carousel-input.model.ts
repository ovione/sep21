import {CarouselDesign} from "./carousel-design.model";
import {CarouselCardsPerShowing} from "./carousel-cards-per-showing.model";

export class ConfigCarouselInput {
    public url: string;
    public title: string;                       //  title of the layout where the carousel is
    public numberOfRowsPerShowing: number = 2;  //	intial value denoting the number of rows shown in each row when that portion of the data is visible
    public numberOfCardsPerRow: number = 3;     //	intial value denoting the number of cards shown in each row when that portion of the data is visible
    public paginationMode: boolean = false;     //	intial value for pagination: true: with numbers, false: with bullets
    public carouselDesign: CarouselDesign = new CarouselDesign();           //  The carousel design
    public carouselLength: number = 0;                                      // 	calculated value filled in CarouselService.getConfigCarousel needed by the eui pagination with numbers
    public carouselCardsForAllShowing: Array<CarouselCardsPerShowing> = []; //  Filled in CarouselService.getConfigCarousel.
                                                                            //  Array of chunks of data to be shown in the carousel.
                                                                            //  Each of these chunks of data has to be shown in rows at once each time that the carusel moves its cursor.

    constructor(init?: Partial<ConfigCarouselInput>) {
        Object.assign(this, init);
    }
}
