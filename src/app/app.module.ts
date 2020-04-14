import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DefaultPostComponent } from './default-post/default-post.component';
import { DefaultPageComponent } from './default-page/default-page.component';
import { LoaderComponent } from './components/loader/loader.component';
import { RelatedPostsComponent } from './components/related-posts/related-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultPostComponent,
    DefaultPageComponent,
    LoaderComponent,
    RelatedPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
