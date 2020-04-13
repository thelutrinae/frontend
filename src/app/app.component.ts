import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'lutrinae';

  constructor(private postService: PostService) {}

  async ngOnInit() {
    const res = await this.postService.getRecentPosts();
    console.log(res);
  }
}
