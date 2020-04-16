import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultPageComponent } from '@templates/default-page/default-page.component';
import { DefaultPostComponent } from '@templates/default-post/default-post.component';
import { DefaultCategoryComponent } from '@templates/default-category/default-category.component';


const routes: Routes = [
  {
    path: ':year/:month/:slug',
    component: DefaultPostComponent
  },
  {
    path: ':page',
    component: DefaultPageComponent
  },
  {
    path: 'category/:slug',
    component: DefaultCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
