import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HometongbutailComponent } from './hometongbutail.component';

describe('HometongbutailComponent', () => {
  let component: HometongbutailComponent;
  let fixture: ComponentFixture<HometongbutailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HometongbutailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HometongbutailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
