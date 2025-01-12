import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'certifications', component:CertificationsComponent }
];
