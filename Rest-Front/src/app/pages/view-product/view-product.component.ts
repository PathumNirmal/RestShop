import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {

  public productName!: String;
  public productPrice!: number;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.productService.getProduct(params['productId']).subscribe((product: any) => {
          this.productName = product.product["name"];
          this.productPrice = product.product["price"];
        })
      }
    )
  }

}
