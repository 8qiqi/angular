import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomekechengtailComponent } from './homekechengtail.component';

describe('HomekechengtailComponent', () => {
  let component: HomekechengtailComponent;
  let fixture: ComponentFixture<HomekechengtailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomekechengtailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomekechengtailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
