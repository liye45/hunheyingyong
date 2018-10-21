import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TongbukedetailComponent } from './tongbukedetail.component';

describe('TongbukedetailComponent', () => {
  let component: TongbukedetailComponent;
  let fixture: ComponentFixture<TongbukedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TongbukedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TongbukedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
