import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WoguanzhudeComponent } from './woguanzhude.component';

describe('WoguanzhudeComponent', () => {
  let component: WoguanzhudeComponent;
  let fixture: ComponentFixture<WoguanzhudeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WoguanzhudeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WoguanzhudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
