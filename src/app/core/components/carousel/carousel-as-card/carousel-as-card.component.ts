import {Component, effect, input, InputSignal, TemplateRef} from '@angular/core';
import {CommonModule, NgStyle} from "@angular/common";
import {CarouselService} from "../carousel.service";
import {ConfigCarouselInput} from "../model/config-carousel-input.model";
import {EUI_CARD} from "@eui/components/eui-card";
import {CarouselComponent} from "../carousel.component";

@Component({
    selector: 'eplatform-carousel-as-card',
    imports: [
        CommonModule,
        ...EUI_CARD,
        CarouselComponent,
        NgStyle,
    ],
    templateUrl: './carousel-as-card.component.html',
    styleUrl: './carousel-as-card.component.scss'
})
export class CarouselAsCardComponent {
    data: InputSignal<any> = input.required<any>();
    configCarousel: InputSignal<ConfigCarouselInput> = input.required<ConfigCarouselInput>();
    confCarousel: ConfigCarouselInput;
    template: InputSignal<TemplateRef<any>> = input.required<TemplateRef<any>>();

    constructor(private carouselService: CarouselService) {
        effect(() => {
            this.getConfigCarousel(this.data(), this.configCarousel());
        });
    }

    private getConfigCarousel(data: Array<any> = [], configCarousel: ConfigCarouselInput) {
        if(data) {
            this.confCarousel = this.carouselService.getConfigCarousel(configCarousel, data);
        }
    }

    rgba(): string {
        return this.confCarousel?.carouselDesign.backgroundRGBA.rgba();
    }
}
