import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ROUTES } from '../routing/routes';
import { RouterModule } from "@angular/router";

import { AppComponent } from '../components/app.component';
import { HomeComponent } from '../components/home.component';
import { PostsComponent } from '../components/posts.component';

import { PostService } from '../services/posts.service';

import { PrettyPrintPipe } from '../pipes/prettyPrint';
import { ReversePipe } from '../pipes/reverseSort';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    PrettyPrintPipe,
    ReversePipe
  ],
  imports: [
    RouterModule.forRoot(ROUTES),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
