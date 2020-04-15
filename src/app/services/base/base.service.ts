import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  /**
   * The base URL for WordPress's REST API v2
   *
   * Since The Lutrinae uses a headless WordPress setup,
   * the frontend fetches data from the WordPress website
   * through the WordPress API
   */
  private readonly BASE_URL = 'https://thelutrinae.com/wp-json/wp/v2';
  private readonly SITE_URL = 'https://thelutrinae.com';

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(protected httpClient: HttpClient) {}

  get baseURL(): string {
    return this.BASE_URL;
  }

  get siteURL(): string {
    return this.SITE_URL;
  }

  public removeSiteURL(fullURL: string): string {
    return fullURL.substr(this.SITE_URL.length, fullURL.length);
  }
}
