import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post/post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-default-post',
  templateUrl: './default-post.component.html',
  styleUrls: ['./default-post.component.scss']
})
export class DefaultPostComponent implements OnInit {
  private mPost: any;
  private slug: string;

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.slug = this.activatedRoute.snapshot.params.slug;
  }

  async ngOnInit() {
    const resp = await this.postService.getPostBySlug(this.slug);
    this.mPost = resp[0];
    console.log(this.mPost);
  }

  get post() {
    return this.mPost;
  }

  get categories() {
    return this.mPost._embedded['wp:term'][0];
  }

}
