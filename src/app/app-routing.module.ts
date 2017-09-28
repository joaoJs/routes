import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PartnerListComponent } from './pages/partner-list/partner-list.component';
import { PartnerDetailsComponent } from './pages/partner-details/partner-details.component';
import { ChuckNorrisComponent } from './pages/chuck-norris/chuck-norris.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'partners', component: PartnerListComponent },
  { path: 'partners/:thePartnerId', component: PartnerDetailsComponent },
  { path: 'chuck', component: ChuckNorrisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
