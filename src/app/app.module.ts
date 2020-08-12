import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AppMaterialModule } from './app-material.module';
import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { SimpleInterceptorService } from './todo/interceptors/simple.interceptor.service';
import { LayoutModule } from './layout/layout.module';
import { TeamsComponent } from './teams/teams.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    TeamsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    LeafletModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
