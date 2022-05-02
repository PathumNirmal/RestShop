import { Injectable } from '@angular/core';
import { Product } from './product';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private webReqService: WebRequestService) { }

  getProducts() {
    return this.webReqService.get('products');
  }

  getProduct(productId: string) {
    return this.webReqService.get(`products/${productId}`);
  }

  createProduct(product: Product) {
    return this.webReqService.post('products', product);
  }

  deleteProduct(productId: string) {
    return this.webReqService.delete(`products/${productId}`);
  }

  updateProduct(productId: string, product: any) {
    return this.webReqService.patch(`products/${productId}`, product);
  }
}
