import { Component, OnInit } from '@angular/core';


import {MatTabsModule} from '@angular/material/tabs';
import { WatchlistComponent } from '../watchlist/watchlist.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }

}


