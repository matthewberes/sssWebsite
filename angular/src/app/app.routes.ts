import { Routes } from '@angular/router';
import { MainContentHomeComponent } from './main-content-home/main-content-home.component';
import { MainContentFormComponent } from './main-content-form/main-content-form.component';
import { MainContentAboutComponent } from './main-content-about/main-content-about.component';
import { MainContentContactComponent } from './main-content-contact/main-content-contact.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: MainContentHomeComponent, title: "Home | Sandstarservices" },
    { path: 'maintenance-request', component: MainContentFormComponent, title: "Maintenance Request | Sandstarservices" },
    { path: 'about-us', component: MainContentAboutComponent, title: "About Us | Sandstarservices" },
    { path: 'contact', component: MainContentContactComponent, title: "Contact | Sandstarservices" }
];
