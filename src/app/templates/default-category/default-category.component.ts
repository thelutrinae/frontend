import { Component, OnInit } from '@angular/core';
import { CategoryService } from '@services/category/category.service';
import { PostService } from '@services/post/post.service';

@Component({
  selector: 'app-default-category',
  templateUrl: './default-category.component.html',
  styleUrls: ['./default-category.component.scss']
})
export class DefaultCategoryComponent implements OnInit {
  private mCategory: any;
  private mPosts: any;

  constructor(
    categoryService: CategoryService,
    postService: PostService
  ) { }

  ngOnInit(): void {
  }

  get category() {
    return this.mCategory;
  }

  get posts() {
    return this.mPosts;
  }

}
