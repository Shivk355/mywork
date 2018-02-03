import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router/src/config';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { CourseSearchComponent } from 'app/course-search/course-search.component';
// import { CourseFliterComponent } from 'app/course-fliter/course-fliter.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'courses',
    component: CourseSearchComponent
  },
  {
    path: 'courses/level',
    component: CourseSearchComponent
  },
  {
    path: 'courses/languages',
    component: CourseSearchComponent
  },
  {
    path: 'courses/sortprice',
    component: CourseSearchComponent
  },
  // {
  //   path: 'courses/search/difficulty_level/:difficulty_level',
  //   component: CourseSearchComponent
  // },
  // {
  //   path: 'courses/search/languages/:languages',
  //   component: CourseSearchComponent
  // },
  // {
  //   path: 'courses/search/features/:features',
  //   component: CourseSearchComponent
  // },
  // {
  //   path: 'courses/search/price/:price',
  //   component: CourseSearchComponent
  // },
  // {
  //   path: 'courses/search/sort/:sortedBy',
  //   component: CourseSearchComponent
  // },
  
  // {
  //   path: 'courses/search',
  //   component: CourseFliterComponent
  // },
  {
    path: '**',
    component: ErrorComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

