import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AitewodeComponent } from './aitewode.component';

describe('AitewodeComponent', () => {
  let component: AitewodeComponent;
  let fixture: ComponentFixture<AitewodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AitewodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AitewodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
