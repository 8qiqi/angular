import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WokanguodeComponent } from './wokanguode.component';

describe('WokanguodeComponent', () => {
  let component: WokanguodeComponent;
  let fixture: ComponentFixture<WokanguodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WokanguodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WokanguodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
