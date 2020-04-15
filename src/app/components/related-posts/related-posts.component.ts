import { Component, OnInit, Input } from '@angular/core';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-related-posts',
  templateUrl: './related-posts.component.html',
  styleUrls: ['./related-posts.component.scss']
})
export class RelatedPostsComponent implements OnInit {
  @Input() post: any;
  @Input() limit = 3;
  private mPosts;

  constructor(
    private postService: PostService
  ) { }

  async ngOnInit() {
    this.mPosts = await this.postService.getPostsByCategoryId(this.categoryID, this.limit);
  }

  get posts() {
    return this.mPosts;
  }

  get categoryID() {
    return this.post.categories[0];
  }

  get categoryName() {
    return this.post._embedded['wp:term'][0][0].name;
  }

}
