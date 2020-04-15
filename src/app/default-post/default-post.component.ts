import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post/post.service';
import { ActivatedRoute, Router, NavigationEnd, NavigationStart } from '@angular/router';
import { SEOService } from '../services/seo-service/seo-service.service';

@Component({
  selector: 'app-default-post',
  templateUrl: './default-post.component.html',
  styleUrls: ['./default-post.component.scss']
})
export class DefaultPostComponent implements OnInit {
  private mPost: any;
  private slug: string;
  private loading: boolean;

  constructor(
    private postService: PostService,
    private seoService: SEOService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    /**
     * Update the view whenever a user clicks on a new route
     * If the new route is still a post, update the view,
     * Otherwise, navigate to new route as usual.
     */
    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      } else if (event instanceof NavigationEnd) {
        this.loading = false;
        this.getPost();
      }
    });
  }

  async ngOnInit() {}

  public async getPost() {
    this.slug = this.activatedRoute.snapshot.params.slug;
    const resp = await this.postService.getPostBySlug(this.slug);
    this.mPost = resp[0];

    /**
     * SEO Meta
     * This sets the title of the window to the article title
     * and sets the description to the article's excerpt.
     */
    this.seoService.setTitle(`${this.post.title.rendered} | ${this.postService.siteTitle}`);
    this.seoService.setDescription(this.post.excerpt.rendered);
  }

  get post() {
    return this.mPost;
  }

  get isLoading() {
    return this.loading;
  }

  public hasFeaturedImage() {
    return this.mPost.jetpack_featured_media_url;
  }

  get categories() {
    return this.mPost._embedded['wp:term'][0];
  }

}
