import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  public _data: any;

  @Input()
  set data(data: any) {
    this._data = data;
  }

  get data(): any {
    return this._data;
  }

  constructor() {}

  ngOnInit() {}

}
