import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post/post.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  private mPosts: any;

  constructor(
    private postService: PostService
  ) { }

  async ngOnInit() {
    this.mPosts = await this.postService.getRecentPosts(1, 3);
  }

  get posts() {
    return this.mPosts;
  }

}
