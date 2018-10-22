import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhengzaixuexiComponent } from './zhengzaixuexi.component';

describe('ZhengzaixuexiComponent', () => {
  let component: ZhengzaixuexiComponent;
  let fixture: ComponentFixture<ZhengzaixuexiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZhengzaixuexiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhengzaixuexiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
