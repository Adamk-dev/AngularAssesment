import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSubscriptionsComponent } from './product-subscriptions.component';

describe('ProductSubscriptionsComponent', () => {
  let component: ProductSubscriptionsComponent;
  let fixture: ComponentFixture<ProductSubscriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSubscriptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
