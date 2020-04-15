import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DefaultPostComponent } from '@templates/default-post/default-post.component';
import { DefaultPageComponent } from '@templates/default-page/default-page.component';
import { LoaderComponent } from './components/loader/loader.component';
import { RelatedPostsComponent } from './components/related-posts/related-posts.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BylineComponent } from './components/byline/byline.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultPostComponent,
    DefaultPageComponent,
    LoaderComponent,
    RelatedPostsComponent,
    SidebarComponent,
    BylineComponent
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
