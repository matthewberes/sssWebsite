import { Routes } from '@angular/router';
import { MainContentHomeComponent } from './main-content-home/main-content-home.component';
import { MainContentFormComponent } from './main-content-form/main-content-form.component';
import { MainContentAboutComponent } from './main-content-about/main-content-about.component';

export const routes: Routes = [
    {path: '', component: MainContentHomeComponent},
    {path: 'maintenance-request', component: MainContentFormComponent},
    {path: 'about-us', component: MainContentAboutComponent}
];
