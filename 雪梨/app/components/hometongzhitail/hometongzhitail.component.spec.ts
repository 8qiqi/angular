import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HometongzhitailComponent } from './hometongzhitail.component';

describe('HometongzhitailComponent', () => {
  let component: HometongzhitailComponent;
  let fixture: ComponentFixture<HometongzhitailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HometongzhitailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HometongzhitailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
