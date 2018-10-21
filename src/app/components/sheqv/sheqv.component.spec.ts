import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheqvComponent } from './sheqv.component';

describe('SheqvComponent', () => {
  let component: SheqvComponent;
  let fixture: ComponentFixture<SheqvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheqvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheqvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
