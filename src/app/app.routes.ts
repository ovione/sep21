import { Routes } from '@angular/router';
import {NonAutorizedComponent} from "./common/pages/non-autorized/non-autorized.component";

export const routes: Routes = [
    { path: '', redirectTo: 'screen/home', pathMatch: 'full' },
    { path: 'index.jsp', redirectTo: 'screen/home' },
    { path: 'screen/home', loadChildren: () => import('./features/home/home.routes').then(m => m.HOME_ROUTES) },
    { path: 'non-authorized', component: NonAutorizedComponent }
];
