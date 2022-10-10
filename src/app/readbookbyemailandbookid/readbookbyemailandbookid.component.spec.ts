import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadbookbyemailandbookidComponent } from './readbookbyemailandbookid.component';

describe('ReadbookbyemailandbookidComponent', () => {
  let component: ReadbookbyemailandbookidComponent;
  let fixture: ComponentFixture<ReadbookbyemailandbookidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadbookbyemailandbookidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadbookbyemailandbookidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
