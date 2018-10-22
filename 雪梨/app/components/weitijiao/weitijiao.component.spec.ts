import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeitijiaoComponent } from './weitijiao.component';

describe('WeitijiaoComponent', () => {
  let component: WeitijiaoComponent;
  let fixture: ComponentFixture<WeitijiaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeitijiaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeitijiaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
