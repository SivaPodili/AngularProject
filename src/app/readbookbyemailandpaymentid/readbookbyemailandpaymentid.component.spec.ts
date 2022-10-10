import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadbookbyemailandpaymentidComponent } from './readbookbyemailandpaymentid.component';

describe('ReadbookbyemailandpaymentidComponent', () => {
  let component: ReadbookbyemailandpaymentidComponent;
  let fixture: ComponentFixture<ReadbookbyemailandpaymentidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadbookbyemailandpaymentidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadbookbyemailandpaymentidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
