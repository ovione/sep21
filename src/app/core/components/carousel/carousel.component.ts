import {
    Component,
    InputSignal,
    input,
    effect,
    ViewChild,
    TemplateRef
} from '@angular/core';
import { animate, AnimationTriggerMetadata, style, transition, trigger, AnimationEvent } from '@angular/animations';
import {
    ConfigCarouselInput
} from "./model/config-carousel-input.model";
import {EUI_PAGINATOR, EuiPaginatorComponent} from "@eui/components/eui-paginator";
import {EUI_ICON} from "@eui/components/eui-icon";
import {CommonModule} from "@angular/common";

const  carouselSlideAnimation = (): AnimationTriggerMetadata =>
    trigger('slide', [
        transition('middle => right', [animate('200ms ease-out'), style({ transform: 'translateX(-100%)' })]),
        transition('middle => left', [animate('200ms ease-out'), style({ transform: 'translateX(100%)' })]),
    ]);

@Component({
    selector: 'eplatform-carousel',
    templateUrl: './carousel.component.html',
    animations: [carouselSlideAnimation()],
    styleUrl: './carousel.component.scss',
    imports: [
        CommonModule,
        ...EUI_ICON,
        ...EUI_PAGINATOR,
    ]
})
export class CarouselComponent {
    configCarousel: InputSignal<ConfigCarouselInput> = input<ConfigCarouselInput>(new ConfigCarouselInput());
    template: InputSignal<TemplateRef<any>> = input<TemplateRef<any>>();
    paginationMode: boolean = false;
    carouselChildren: any[] = [];
    currentActiveIndex: number = 0;

    animationState = 'middle';

    pageSize = 6;
    public pageSizeOptions: number[];
    pageIndex: number = 0;
    public carouselLength: number = 0;
    @ViewChild('paginator') paginator: EuiPaginatorComponent;

    constructor() {
        effect(() => {
            const configCarouselInput: ConfigCarouselInput = this.configCarousel();
            this.carouselChildren = configCarouselInput.carouselCardsForAllShowing;
            this.paginationMode = configCarouselInput.paginationMode;
            if(this.paginationMode) {
                this.pageSize = configCarouselInput.numberOfCardsPerRow * configCarouselInput.numberOfRowsPerShowing;
                this.pageSizeOptions = [this.pageSize];
                this.pageIndex = 0;
                this.carouselLength = configCarouselInput.carouselLength;
            }
        });
    }

    goPrevious(): void {
        if (!this.isFirstItemActive) {
            this.setActivePrior();
        }
    }

    goNext(): void {
        if (!this.isLastItemActive) {
            this.setActiveNext();
        }
    }

    private setActivePrior() {
        this.setActive(this.currentActiveIndex - 1);
    }

    private setActiveNext() {
        this.setActive(this.currentActiveIndex + 1);
    }

    setActive(activeIndex: number, initiatedByPaginator = false): void {
        if(!initiatedByPaginator) {
            this.setPaginatorPage(activeIndex);
        }

        if(activeIndex < this.currentActiveIndex) {
            this.changeState('left');
        } else {
            this.changeState('right');
        }

        this.currentActiveIndex = activeIndex;
    }

    private setPaginatorPage(activeIndex: number) {
        this.paginator?.getPage(activeIndex);
    }

    get isFirstItemActive(): boolean {
        return this.currentActiveIndex === 0;
    }

    get isLastItemActive(): boolean {
        return this.currentActiveIndex === this.carouselChildren.length - 1;
    }

    changeState(newState: string): void {
        this.animationState = newState;
    }

    animationDone($event: AnimationEvent): void {
        this.changeState('middle');
    }

    rgbaPaginator(): string {
        return this.configCarousel().carouselDesign.backgroundRGBAPaginator.rgba();
    }
}
