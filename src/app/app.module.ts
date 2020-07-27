import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppMaterialModule } from './app-material.module';
import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { AppRoutingModule } from './app.routing.module';
import { SimpleInterceptorService } from './todo/interceptors/simple.interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
