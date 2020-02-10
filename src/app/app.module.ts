import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app-routing.module';
import {HomeModule} from './home/home.module';
import {EntityModule} from './entities/entity.module';
//
import {MainComponent} from './layouts/main/main.component';
import {NavbarComponent} from './layouts/navbar/navbar.component';
import {FooterComponent} from './layouts/footer/footer.component';
import {ErrorComponent} from './layouts/error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    HomeModule,
    //
    EntityModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    MDBBootstrapModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class AppModule {}
