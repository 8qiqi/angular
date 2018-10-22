import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeqieshuotailComponent } from './homeqieshuotail.component';

describe('HomeqieshuotailComponent', () => {
  let component: HomeqieshuotailComponent;
  let fixture: ComponentFixture<HomeqieshuotailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeqieshuotailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeqieshuotailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
