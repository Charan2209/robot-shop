import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDetailsComponent } from './product-details.component';
import { IProduct } from '../catalog/product.model';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailsComponent]
    });
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Add tests to check the image URL
  it('should return a valid image URL', () => {
    const mockProduct: IProduct = { name: 'Test Product', description: 'Test Description', category: 'Test Category', price: 100, discount: 0, imageName: 'test-image.jpg' };
    component.product = mockProduct;
    fixture.detectChanges();
    expect(component.getImageUrl(mockProduct)).toBe('/assets/images/robot-parts/test-image.jpg');
  });
});
