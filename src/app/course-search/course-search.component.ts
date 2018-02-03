import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss']
})
export class CourseSearchComponent implements OnInit {

  difficulty_level: string = '';
  languages: string = '';
  price: string = '';
  features: string = '';
  sortedBy: string = '';
  searchedData: any[] = [];
  queryParams: any ={};
  constructor(private router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
  }

  checkBoxFunc(element) {

    // For Level
    if (element.value == 'High' || element.value == 'beginner' || element.value == 'Intermidate' || element.value == 'expert') {
      this.difficulty_level = element.checked ? element.value : '';
      this.router.navigate(['/courses/level'],{
        relativeTo: this._route,
        queryParams:  {
          difficulty_level : this.difficulty_level,
        }
      });
    }

    // For Languages
    if (element.value == 'english' || element.value == 'hindi') {
      this.languages = element.checked ? element.value : '';
      this.router.navigate(['/courses/languages'],{
        relativeTo: this._route,
        queryParams:  {
          languages : this.languages,
        }
      });
    }

    // For Features
    if (element.value == 'captions' || element.value == 'quizzes' || element.value == 'coding_exercises') {
      this.features = element.checked ? element.value : '';
    }

    // For Price
    if (element.value == 'free' || element.value == 'paid') {
      this.price = element.checked ? element.value : '';
    }
   

    if (element.value === undefined && (element.target.name === 'asc')) {
      this.sortedBy = element.target.name;
      this.languages = element.checked ? element.value : '';
      this.router.navigate(['/courses/sortprice'],{
        relativeTo: this._route,
        queryParams:  {
          sort: 'price',
          order : this.sortedBy,
        }
      });
      // this.router.navigate(['courses/search/sort', this.sortedBy]);
    } else if (element.value === undefined && (element.target.name === 'desc')){
      this.sortedBy = element.target.name;
      this.languages = element.checked ? element.value : '';
      this.router.navigate(['/courses/sortprice'],{
        relativeTo: this._route,
        queryParams:  {
          sort: 'price',
          order : this.sortedBy,
        }
      });
    }
  }
}
