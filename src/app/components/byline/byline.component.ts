import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-byline',
  templateUrl: './byline.component.html',
  styleUrls: ['./byline.component.scss']
})
export class BylineComponent implements OnInit {
  @Input() post: any;

  constructor() { }

  ngOnInit(): void { }

  get acfAuthors() {
    return this.post.acf.authors;
  }

  get wpAuthor() {
    return this.post._embedded.author[0];
  }

}
