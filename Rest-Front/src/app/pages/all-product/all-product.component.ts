import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss']
})
export class AllProductComponent implements OnInit {
  products: any;
  test: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products: any) => {
      this.test = products;
      this.products = this.test.products;
      console.log(products)
    });
  }

  deleteProduct(productId: string) {
    this.productService.deleteProduct(productId).subscribe((response: any) => {
      console.log(response);
      this.refresh();
    });
  }

  refresh(): void {
    window.location.reload();
  }
}
