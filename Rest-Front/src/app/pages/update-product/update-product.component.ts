import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  currentProductId!: string;
  productModel = new Product('', '0');
  update = [
    {propName: 'name', value: ''},
    {propName: 'price', value: 0}
  ];
  test: any;
  
  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.productService.getProduct(params['productId']).subscribe((product: any) => {
          this.currentProductId = params['productId'];
          this.productModel.name = product?.product.name;
          this.productModel.price = product?.product.price;
          console.log(this.productModel);
        })
      }
    )
  }

  updateProduct() {
    //this.submitted = true;
    this.update.forEach(element => {
      if(element.propName === 'name'){
        element.value = this.productModel.name;
      } 
      if(element.propName === 'price'){
        element.value = this.productModel.price;
      }
    });
    this.productService.updateProduct(this.currentProductId ,this.update)
      .subscribe((data: any) => {
        console.log('Updated!', data);
        this.router.navigate([ '/products' ]);
        alert("Updated Successfull!");
      });
  }
}
