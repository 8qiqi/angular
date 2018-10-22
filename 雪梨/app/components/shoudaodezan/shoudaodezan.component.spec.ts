import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoudaodezanComponent } from './shoudaodezan.component';

describe('ShoudaodezanComponent', () => {
  let component: ShoudaodezanComponent;
  let fixture: ComponentFixture<ShoudaodezanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoudaodezanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoudaodezanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
