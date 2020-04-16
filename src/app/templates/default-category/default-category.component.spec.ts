import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultCategoryComponent } from './default-category.component';

describe('DefaultCategoryComponent', () => {
  let component: DefaultCategoryComponent;
  let fixture: ComponentFixture<DefaultCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
