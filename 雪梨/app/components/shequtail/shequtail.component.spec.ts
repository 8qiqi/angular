import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShequtailComponent } from './shequtail.component';

describe('ShequtailComponent', () => {
  let component: ShequtailComponent;
  let fixture: ComponentFixture<ShequtailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShequtailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShequtailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
