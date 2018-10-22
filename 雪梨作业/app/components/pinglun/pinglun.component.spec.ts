import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinglunComponent } from './pinglun.component';

describe('PinglunComponent', () => {
  let component: PinglunComponent;
  let fixture: ComponentFixture<PinglunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinglunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinglunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
