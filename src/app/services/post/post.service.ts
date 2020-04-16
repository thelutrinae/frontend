import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService extends BaseService {
  private POSTS_URL = this.baseURL + '/posts';
  private limit = 10;

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  /**
   * Get all recent posts
   * @param page: the next set of posts (e.g. Page 1: 1-10, Page 2: 11-20)
   * @param limit: the number of posts to get per page
   */
  public async getRecentPosts(page: number = 1, limit: number = this.limit) {
    let params = new HttpParams();

    if (limit !== 10 || page !== 0) {
      params = new HttpParams()
        .set('per_page', limit.toString())
        .set('page', page.toString())
        .set('_embed', '');
    }

    const posts = await this.httpClient.get(this.POSTS_URL, { params }).toPromise();
    return this.createRouterLinks(posts);
  }

  /**
   * Get a post by it's page slug
   * @param slug: the page's url slug (e.g. 'example-article', 'how-to-code')
   */
  public async getPostBySlug(slug: string) {
    const params = new HttpParams()
      .set('slug', slug)
      .set('_embed', 'true');

    const posts = await this.httpClient.get(this.POSTS_URL, { params }).toPromise();
    return this.createRouterLinks(posts);
  }

  /**
   * Get all posts by category ID
   * @param category: The category ID from which to fetch posts
   */
  public async getPostsByCategoryId(
    category: number,
    limit: number = this.limit,
    page: number = 1) {
    let params = new HttpParams();

    if (limit !== 10 || page > 1) {
      params = new HttpParams()
        .set('per_page', limit.toString())
        .set('page', page.toString())
        .set('_embed', '');
    }

    const posts = await this.httpClient.get(this.POSTS_URL, { params }).toPromise();
    return this.createRouterLinks(posts);
  }

  /**
   * Private Helper Methods
   * These methods are called within their corresponding methods
   * for cleaner code.
   */
}
