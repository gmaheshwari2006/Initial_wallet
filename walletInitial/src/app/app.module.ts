import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import { TabViewModule } from 'primeng/tabview';

//import { ButtonModule } from 'primeng/button';
//import {MatTabsModule} from '@angular/material/tabs';

import { DashboardModule } from './wallet-modules/dashboard/dashboard.module';
//import { DashboardComponent } from './wallet-modules/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,       
    DashboardModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
