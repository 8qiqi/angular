import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenwutailComponent } from './renwutail.component';

describe('RenwutailComponent', () => {
  let component: RenwutailComponent;
  let fixture: ComponentFixture<RenwutailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenwutailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenwutailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
