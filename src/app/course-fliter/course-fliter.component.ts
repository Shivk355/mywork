import { Component, OnInit } from '@angular/core';
import { CourseFilterService } from 'app/course-fliter/course-filter.service';
import { ActivatedRoute } from '@angular/router';
import { ElasticService } from 'app/shared/elastic-search/elastic.service';

@Component({
  selector: 'app-course-fliter',
  templateUrl: './course-fliter.component.html',
  styleUrls: ['./course-fliter.component.scss']
})
export class CourseFliterComponent implements OnInit {
  sort: any;
  order: any;
  price: any;

  searchStringMessage: string;
  searchString: string;
  errorMessage: string;
  searchedCourseData: any;
  searchedCourseDataList: any;
  languages: string;
  difficulty_level: string;

  constructor(private route: ActivatedRoute, private searchService: ElasticService, private courseFilter: CourseFilterService) { }

  ngOnInit() {
    this.searchString = this.route.snapshot.queryParams.search;

    this.searchService.searchCourseData(this.searchString)
      .subscribe(searchResponse => {
        this.searchedCourseData = JSON.parse(searchResponse._body);
        this.searchedCourseDataList = this.searchedCourseData.phit;

        // Needs woork bcz message not comming on frontend
        // if (this.searchedCourseDataList.length === 0) {
        //   this.searchStringMessage = `Your search "${this.searchString}" did not match any courses`;
        // } else {
        //   this.searchStringMessage = `Search results for "${this.searchString}"`;
        // }
      },
      error => this.errorMessage = <any>error
      );


    this.difficulty_level = this.route.snapshot.queryParams.difficulty_level;
    this.languages = this.route.snapshot.queryParams.languages;
    this.sort = this.route.snapshot.queryParams.sort;
    this.order = this.route.snapshot.queryParams.order;
    if (this.difficulty_level || this.languages || (this.sort && this.order)) {
      this.courseFilter.getCourseFilterData(this.difficulty_level, this.languages, this.sort, this.order)
        .subscribe(searchResponse => {
          this.searchedCourseData = JSON.parse(searchResponse["_body"]);
          this.searchedCourseDataList = this.searchedCourseData.phit;
        },
        error => this.errorMessage = <any>error
        );
    }
  }

}
