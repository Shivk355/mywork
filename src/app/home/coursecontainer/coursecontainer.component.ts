import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-coursecontainer',
  templateUrl: './coursecontainer.component.html',
  styleUrls: ['./coursecontainer.component.scss']
})
export class CoursecontainerComponent implements OnInit {
  public _course: any;

  @Input() 
  set courses(courses: any){
    this._course = courses;
  }

  get courses(): any {
    return this._course;
  }
  constructor() { }

  ngOnInit() {
  }

}
