import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  //submitted = false;

  productModel = new Product('', 0);

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.productModel);
    //this.submitted = true;
    this.productService.createProduct(this.productModel)
      .subscribe((data: any) => {
        console.log('Success!', data);
        this.router.navigate([ '/products', data.createProduct._id ]);  
      });
  }
}
