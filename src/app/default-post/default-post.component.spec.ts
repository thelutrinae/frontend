import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultPostComponent } from './default-post.component';

describe('DefaultPostComponent', () => {
  let component: DefaultPostComponent;
  let fixture: ComponentFixture<DefaultPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
