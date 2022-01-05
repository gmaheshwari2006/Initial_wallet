import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';


import {MatTabsModule} from '@angular/material/tabs';
import { WatchlistModule } from '../watchlist/watchlist.module'; 

@NgModule({
  imports: [
    CommonModule,       
    WatchlistModule,
    MatTabsModule

  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }
