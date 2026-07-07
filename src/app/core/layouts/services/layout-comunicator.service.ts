import { Injectable } from '@angular/core';
import {Observable, ReplaySubject, Subject} from "rxjs";
import {FilterCriteria} from "../model/filter-criteria.model";

@Injectable({
  providedIn: 'root'
})
export class LayoutComunicatorService {
    private notifyNeeded: Subject<FilterCriteria> = new ReplaySubject<any>();
    private notifyNeeded$: Observable<FilterCriteria> = this.notifyNeeded.asObservable();

    notify(filterCriteria: FilterCriteria) {
        this.notifyNeeded.next(filterCriteria);
    }

    subscribeWhenNotified(): Observable<FilterCriteria> {
        return this.notifyNeeded$;
    }
}
