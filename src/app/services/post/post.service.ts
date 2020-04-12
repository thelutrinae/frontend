import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService extends BaseService {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
}
