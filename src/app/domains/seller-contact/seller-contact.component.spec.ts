import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerContactComponent } from './seller-contact.component';

describe('SellerContactComponent', () => {
  let component: SellerContactComponent;
  let fixture: ComponentFixture<SellerContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellerContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
