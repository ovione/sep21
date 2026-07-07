import { Injectable } from '@angular/core';
import {ConfigCarouselInput} from "./model/config-carousel-input.model";
import {CarouselCardsPerShowing} from "./model/carousel-cards-per-showing.model";

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

    getConfigCarousel(configCarouselInput: ConfigCarouselInput, data: Array<any>): ConfigCarouselInput {
        const numberOfCardsPerShowing: number = configCarouselInput.numberOfCardsPerRow * configCarouselInput.numberOfRowsPerShowing;
        const cardShowings: number[] = [...Array(Math.ceil(data.length / numberOfCardsPerShowing))];
        const configCarousel = {...configCarouselInput};
        configCarousel.carouselLength = data.length;
        configCarousel.carouselCardsForAllShowing = cardShowings.map((row: number, idx: number) =>
            this.getCarouselCardsPerShowing(data.slice(idx * numberOfCardsPerShowing, idx * numberOfCardsPerShowing + numberOfCardsPerShowing),
                configCarouselInput.numberOfCardsPerRow));

        return configCarousel;
    }

    private getCarouselCardsPerShowing(data: Array<any>, numberOfCardsPerRow): CarouselCardsPerShowing {
        return new CarouselCardsPerShowing(data, numberOfCardsPerRow);
    }
}
