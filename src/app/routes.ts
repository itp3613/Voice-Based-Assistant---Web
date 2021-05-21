import { Routes } from '@angular/router';

import { SigninComponent } from './signin/signin.component';


export const appRoutes: Routes = [
    {
        path: 'login', component: SigninComponent
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
    
];