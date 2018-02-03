import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, URLSearchParams, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class CourseFilterService {

  private searchUrl = '/api/courses/search/filters';
  constructor(private http: Http) { }

  getCourseFilterData(difficulty_level: string, languages: string, sort:string, order:string): Observable<string[]> {
    let myHeaders = new Headers();
    let urlParams = new URLSearchParams();
    urlParams.append('difficulty_level', difficulty_level);
    urlParams.append('languages', languages);
    urlParams.append('sort', sort);
    urlParams.append('order', order);
    let options = new RequestOptions({ headers: myHeaders, params: urlParams });
    return this.http.get(this.searchUrl, options)
      .map(data => data)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
