import { Component, DestroyRef, input, InputSignal, OnInit, TemplateRef, inject } from '@angular/core';
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import { NgStyle, NgTemplateOutlet } from "@angular/common";
import {take} from "rxjs";
import {GenericHttpService} from "../../../services/generic-http/generic-http.service";
import {LayoutComunicatorService} from "../../services/layout-comunicator.service";
import {FilterCriteria} from "../../model/filter-criteria.model";
import {ConfigAnyInput} from "../../model/config-any-input.model";

@Component({
    selector: 'eplatform-layout-content-center-any',
    templateUrl: './layout-content-center-any.component.html',
    styleUrls: ['./layout-content-center-any.component.scss'],
    imports: [
    NgTemplateOutlet
],
})
export class LayoutContentCenterAnyComponent implements OnInit {
    private destroyRef = inject(DestroyRef);
    private genericHttp = inject(GenericHttpService);
    private layoutComunicatorService = inject(LayoutComunicatorService);

    configLayout: InputSignal<ConfigAnyInput> = input<ConfigAnyInput>();
    template: InputSignal<TemplateRef<any>> = input<TemplateRef<any>>();
    showSpinner : boolean = true;
    data: any;
    filterCriteria: any;

    ngOnInit() {
        this.layoutComunicatorService.subscribeWhenNotified().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
            next: this.notificationLayoutArrived.bind(this)
        });
    }

    notificationLayoutArrived(filterCriteria: FilterCriteria) {
        if(this.configLayout().delegateBackendCalls) {
            this.filterCriteria = filterCriteria;
            this.data = {};
        } else {
            this.showSpinner = true;
            this.genericHttp.get<Array<any>>(this.configLayout().url, filterCriteria.getCriteria()).pipe(take(1)).subscribe({
                next: this.getDataSuccess.bind(this)
            })
        }
    }

    private getDataSuccess(data: Array<any> = []) {
        this.data = data;
        this.filterCriteria = this.filterCriteria;
        setTimeout(() => this.showSpinner = false);
    }
}
