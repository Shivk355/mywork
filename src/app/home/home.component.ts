import { Component, OnInit } from '@angular/core';
import { HomeDataService } from 'app/home/home-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  newName = '';
  errorMessage: string;
  names: any[] = [];
  homeData: any[] = [];
  constructor(private homeDataService: HomeDataService) { }
  ngOnInit() {
    this.getNames();
  }

  getNames() {
    this.homeDataService.get()
      .subscribe(homeData => {
        this.homeData = homeData;
      },
      error => this.errorMessage = <any>error
      );
  }
}
