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
import { ServicesComponent } from './services/services.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: MainContentHomeComponent, title: "Sand Star Services | People Taking Care of People" },
    { path: 'assessment-request', component: MainContentFormComponent, title: "Schedule an Onsite Assessment | Sand Star Services" },
    { path: 'services', component: ServicesComponent, title: "Services | Sand Star Services" },
    { path: 'about-us', component: MainContentAboutComponent, title: "About Us | Sand Star Services" },
    { path: 'contact', component: MainContentContactComponent, title: "Contact | Sand Star Services" },
    { path: "commercial", component: CommercialComponent, title: "Commercial | Sand Star Services" },
    { path: "residential", component: ResidentialComponent, title: "Residential | Sand Star Services" },
    { path: "why-choose-us", component: WhyChooseUsComponent, title: "Why Choose Us | Sand Star Services" },
    { path: "community-involvement", component: CommunityInvolvementComponent, title: "Community Involvement | Sand Star Services" },
    { path: "hvac", component: HvacComponent, title: "HVAC | Sand Star Services" },
    { path: "roofing", component: RoofingComponent, title: "Roofing | Sand Star Services" },
    { path: "electrical", component: ElectricalComponent, title: "Electrical | Sand Star Services" },
    { path: "repairs", component: RepairsComponent, title: "Repairs | Sand Star Services" },
    { path: "remodels", component: RemodelsComponent, title: "Remodels | Sand Star Services" },
];
