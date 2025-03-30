import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shell/header/header.component';
import { FooterComponent } from './shell/footer/footer.component';

import { HomeComponent } from './pages/home/home.component';
import { CaseCardComponent } from './pages/home/case-card/case-card.component';
import { NewCaseCardComponent } from './pages/home/new-case-card/new-case-card.component';

import { UncoverMoreComponent } from './pages/case-studies/uncover-more/uncover-more.component';
import { Pup101Component } from './pages/case-studies/pup-101/pup-101.component';
import { SpotifyComponent } from './pages/case-studies/spotify/spotify.component';
import { ClearSkyComponent } from './pages/case-studies/clearsky/clearsky.component';
import { PocketComponent } from './pages/case-studies/pocket/pocket.component';
import { DesktopPOSComponent } from './pages/case-studies/desktop-pos/desktop-pos.component';
import { MobilePOSComponent } from './pages/case-studies/mobile-pos/mobile-pos.component';
import { DesignSystemComponent } from './pages/case-studies/design-system/design-system.component';
import { TemplateComponent } from './pages/case-studies/template/template.component';

import { ParamsService } from './service/params.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CaseCardComponent,
    UncoverMoreComponent,
    Pup101Component,
    SpotifyComponent,
    ClearSkyComponent,
    PocketComponent,
    TemplateComponent,
    NewCaseCardComponent,
    DesktopPOSComponent,
    MobilePOSComponent,
    DesignSystemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule
  ],
  providers: [ParamsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
