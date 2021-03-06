import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  private BASE_URL: 'https://thelutrinae.com/wp-json/wp/v2';

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(protected httpClient: HttpClient) { }

  get baseURL(): string {
    return this.BASE_URL;
  }
}
