import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchlistComponent } from './watchlist.component';
import { WatchlistRoutes } from './watchlist.routing';

@NgModule({
  imports: [
    CommonModule,
    WatchlistRoutes,
    
  ],
  declarations: [WatchlistComponent],
  exports: [WatchlistComponent]
})
export class WatchlistModule { }
