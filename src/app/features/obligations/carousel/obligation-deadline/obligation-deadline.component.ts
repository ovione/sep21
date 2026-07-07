import {Component, effect, input, InputSignal} from '@angular/core';
import {CommonModule, NgStyle} from "@angular/common";
import { NavigationService } from '../../../../common/navigation/navigation.service';
import {ColorMapConstants} from "../../../../core/misc/color-map/color-map-constants.enum";
import {CarouselCardsPerShowing} from "../../../../core/components/carousel/model/carousel-cards-per-showing.model";
import {ConfigCarouselInput} from "../../../../core/components/carousel/model/config-carousel-input.model";
import { UrlService } from '../../../../core/services/url.service';
import { ObligationData } from './model/obligation-data.model';
import {EUI_CARD} from "@eui/components/eui-card";
import {EUI_ICON} from "@eui/components/eui-icon";
import {EUI_BADGE} from "@eui/components/eui-badge";
import {EUI_BUTTON} from "@eui/components/eui-button";
import {EuiTooltipDirective} from "@eui/components/directives";

@Component({
    selector: 'app-obligation-deadline',
    templateUrl: './obligation-deadline.component.html',
    styleUrl: './obligation-deadline.component.scss',
    imports: [
        CommonModule,
        NgStyle,
        ...EUI_CARD,
        ...EUI_ICON,
        ...EUI_BUTTON,
        ...EUI_BADGE,
        EuiTooltipDirective,
    ],
})
export class ObligationDeadlineComponent {
    configCarousel: InputSignal<ConfigCarouselInput> = input<ConfigCarouselInput>(new ConfigCarouselInput());
    obligationData: InputSignal<CarouselCardsPerShowing> = input.required<CarouselCardsPerShowing>();
    cardsRows: Array<Array<ObligationData>> = [];
    ColorMapConstants = ColorMapConstants;

    constructor(
        private navigationService: NavigationService,
        private urlService: UrlService) {
        effect(() => {
            const cardData: Array<any> = this.obligationData().cards;
            const numberOfCardsPerRow: number = this.obligationData().numberOfCardsPerRow;
            const cardsRows: Array<any> = [...Array( Math.ceil(cardData.length / numberOfCardsPerRow) )];

            this.cardsRows = cardsRows.map( (row: number, idx) => cardData.slice(idx * numberOfCardsPerRow, idx * numberOfCardsPerRow + numberOfCardsPerRow) );
        });
    }

    openObligationDetail(obligationData: ObligationData) {
        const requestParams = new URLSearchParams({ deadline: obligationData.deadlineId });
        if (obligationData.campaign) {
            this.navigationService.navigateWithUrlNewTab(`${this.urlService.getUrlsCached().eplatform}/public/campaign/${obligationData.obligationId}/${obligationData.deadlineId}`);
        } else {
            this.navigationService.navigateWithUrlNewTab(`${this.urlService.getUrlsCached().eplatform}/public/obligations/${obligationData.obligationId}/${obligationData.deadlineId}`);
        }
    }

}
