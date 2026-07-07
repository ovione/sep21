import { Routes } from '@angular/router';


export const routes: Routes = [
    { path: '', redirectTo: 'screen/home', pathMatch: 'full' },
    { path: 'index.jsp', redirectTo: 'screen/home' },
    { path: 'screen/home', loadChildren: () => import('./features/home/home.routes').then(m => m.HOME_ROUTES) },
    { path: 'non-authorized', loadComponent: () => import('./common/pages/non-autorized/non-autorized.component').then(m => m.NonAutorizedComponent) },
    {
        path: 'settings',
        loadChildren: () =>
            import('./features/settings/settings.routes').then(m => m.SETTING_ROUTES)
    }
];
