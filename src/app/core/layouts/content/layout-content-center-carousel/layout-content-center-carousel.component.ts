import {Component, DestroyRef, input, InputSignal, OnInit, TemplateRef} from '@angular/core';
import {CommonModule} from "@angular/common";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {take} from "rxjs";
import {GenericHttpService} from "../../../services/generic-http/generic-http.service";
import {LayoutComunicatorService} from "../../services/layout-comunicator.service";
import {FilterCriteria} from "../../model/filter-criteria.model";

@Component({
    selector: 'eplatform-layout-content-center-carousel',
    templateUrl: './layout-content-center-carousel.component.html',
    styleUrls: ['./layout-content-center-carousel.component.scss'],
    imports: [
        CommonModule
    ],
})
export class LayoutContentCenterCarouselComponent implements OnInit {
    configLayout: InputSignal<any> = input.required<any>();
    template: InputSignal<TemplateRef<any>> = input<TemplateRef<any>>();
    configCarousel: any;
    showSpinner : boolean = true;
    carouselData: Array<any>;

    constructor(private destroyRef: DestroyRef,
                private genericHttp: GenericHttpService,
                private layoutComunicatorService: LayoutComunicatorService,) {}

    ngOnInit() {
        this.layoutComunicatorService.subscribeWhenNotified().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
            next: this.notificationLayoutArrived.bind(this)
        });
    }

    notificationLayoutArrived(filterCriteria: FilterCriteria) {
        this.showSpinner = true;
        this.genericHttp.get<Array<any>>(this.configLayout().url, filterCriteria.getCriteria()).pipe(take(1)).subscribe({
            next: this.getCarouselDataSuccess.bind(this)
        })
    }

    private getCarouselDataSuccess(data: Array<any> = []) {
        this.carouselData = data;
        setTimeout(() => this.showSpinner = false);
    }
}
