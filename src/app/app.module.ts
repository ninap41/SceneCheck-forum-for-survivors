import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AngularDraggableModule } from "angular2-draggable";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularEditorModule } from "@kolkov/angular-editor";
import { ThreadsService } from "./threads/threads.service";
import { HomeComponent } from "./home/home.component";
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";

import {
  HttpClient,
  HttpHandler,
  HttpClientModule,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { ThreadsComponent } from "./threads/threads.component";
import { AddThreadComponent } from "./add-thread/add-thread.component";
import { BoardsComponent } from "./boards/boards.component";
import { PostsComponent } from './posts/posts.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ThreadsComponent,
    AddThreadComponent,
    BoardsComponent,
    PostsComponent,
    AboutComponent,
  ],

  imports: [
    BrowserModule,
    FontAwesomeModule,
    AngularEditorModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularDraggableModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    ThreadsService,
    FormBuilder,
    HttpClient,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
