import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultPageComponent } from './default-page/default-page.component';
import { DefaultPostComponent } from './default-post/default-post.component';


const routes: Routes = [
  {
    path: ':year/:month/:slug',
    component: DefaultPostComponent
  },
  {
    path: ':page',
    component: DefaultPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
