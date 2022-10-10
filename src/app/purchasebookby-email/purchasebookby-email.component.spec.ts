import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasebookbyEmailComponent } from './purchasebookby-email.component';

describe('PurchasebookbyEmailComponent', () => {
  let component: PurchasebookbyEmailComponent;
  let fixture: ComponentFixture<PurchasebookbyEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasebookbyEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasebookbyEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
