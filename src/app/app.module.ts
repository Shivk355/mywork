import { ToastModule } from './typescripts/pro/alerts/toast/toast.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from './typescripts/free';
import { MDBBootstrapModulePro } from './typescripts/pro/index';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBSpinningPreloader } from './typescripts/pro/index';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ErrorComponent } from './error/error.component';
import { AppRoutingModule } from './app.routing';

import { AdminModule } from './admin/admin.module';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeModule } from 'app/home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from 'app/services/authentication.service';
import { ElasticSearchComponent } from './shared/elastic-search/elastic-search.component';
import { CourseSearchComponent } from './course-search/course-search.component';
import { ElasticService } from 'app/shared/elastic-search/elastic.service';
import { CourseFliterComponent } from './course-fliter/course-fliter.component';
import { CourseFilterService } from 'app/course-fliter/course-filter.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ErrorComponent,
    FooterComponent,
    LoginComponent,
    ElasticSearchComponent,
    CourseSearchComponent,
    CourseFliterComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    HomeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ToastModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    MDBBootstrapModulePro.forRoot(),
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'Your_api_key'
    })
  ],
  providers: [
    MDBSpinningPreloader,
    AuthenticationService,
    ElasticService,
    CourseFilterService
  ],
  bootstrap: [AppComponent],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
