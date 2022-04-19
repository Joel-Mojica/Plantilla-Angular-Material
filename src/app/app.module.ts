import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServInsertService } from './servicios/serv-insert.service';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './componentes/angular-material/angular-material.module';
import { LoginComponent } from './componentes/login/login.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
     BrowserAnimationsModule,
    ReactiveFormsModule, //form reactivo de angular
    AngularMaterialModule
  ],
  providers: [ServInsertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
