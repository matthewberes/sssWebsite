import { Routes } from '@angular/router';
import { MainContentHomeComponent } from './main-content-home/main-content-home.component';
import { MainContentFormComponent } from './main-content-form/main-content-form.component';
import { MainContentAboutComponent } from './main-content-about/main-content-about.component';
import { MainContentContactComponent } from './main-content-contact/main-content-contact.component';
import { CommercialComponent } from './commercial/commercial.component';
import { ResidentialComponent } from './residential/residential.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { RepairsComponent } from './repairs/repairs.component';
import { RemodelsComponent } from './remodels/remodels.component';
import { ElectricalComponent } from './electrical/electrical.component';
import { RoofingComponent } from './roofing/roofing.component';
import { CommunityInvolvementComponent } from './community-involvement/community-involvement.component';
import { HvacComponent } from './hvac/hvac.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: MainContentHomeComponent, title: "Home | Sandstarservices" },
    { path: 'maintenance-request', component: MainContentFormComponent, title: "Maintenance Request | Sandstarservices" },
    { path: 'about-us', component: MainContentAboutComponent, title: "About Us | Sandstarservices" },
    { path: 'contact', component: MainContentContactComponent, title: "Contact | Sandstarservices" },
    { path: "commercial", component: CommercialComponent, title: "Commercial | Sandstarservices" },
    { path: "residential", component: ResidentialComponent, title: "Residential | Sandstarservices" },
    { path: "why-choose-us", component: WhyChooseUsComponent, title: "Why Choose Us | Sandstarservices" },
    { path: "community-involvement", component: CommunityInvolvementComponent, title: "Community Involvement | Sandstarservices" },
    { path: "hvac", component: HvacComponent, title: "HVAC | Sandstarservices" },
    { path: "roofing", component: RoofingComponent, title: "Roofing | Sandstarservices" },
    { path: "electrical", component: ElectricalComponent, title: "Electrical | Sandstarservices" },
    { path: "repairs", component: RepairsComponent, title: "Repairs | Sandstarservices" },
    { path: "remodels", component: RemodelsComponent, title: "Remodels | Sandstarservices" },
];
