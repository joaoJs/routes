import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PartnerService } from './services/partner.service';
import { CharacterApiService } from './services/character-api.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PartnerListComponent } from './pages/partner-list/partner-list.component';
import { PartnerDetailsComponent } from './pages/partner-details/partner-details.component';
import { ChuckNorrisComponent } from './pages/chuck-norris/chuck-norris.component';
import { CharacterComponent } from './pages/character/character.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PartnerListComponent,
    PartnerDetailsComponent,
    ChuckNorrisComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PartnerService, CharacterApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
