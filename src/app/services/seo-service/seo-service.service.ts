import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HttpClient } from '@angular/common/http';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SEOService extends BaseService {

  constructor(
    protected httpClient: HttpClient,
    protected title: Title,
    protected meta: Meta
  ) {
    super(httpClient);
  }

  setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }

  setDescription(description: string) {
    this.meta.updateTag({ name: 'description', content: this.stripHTML(description) });
  }

  private stripHTML(html: string): string {
    return html.replace(/<[^>]*>/g, '');
  }
}
