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

  productModel = new Product('', '');
  selectedFile!: File;
  image!: File;
  isImageselected: boolean = false;
  imageData: string = "";

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.productModel);
    let fd = new FormData();
    fd.append("productImage", this.image);
    fd.append("name", this.productModel.name);
    fd.append("price", this.productModel.price);
    //this.submitted = true;
    this.productService.createProduct(fd)
      .subscribe((data: any) => {
        console.log('Success!', data);
        this.router.navigate([ '/products', data.createProduct._id ]);  
      });
  }

  onFileSelected(event: any) {
    // this.selectedFile = <File>event.target.files[0];
    // console.log(this.selectedFile.name);
    const target= event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    this.image=file;
    this.isImageselected=true;
    console.log("sds")
    console.log(this.image)
    const allowedFileTypes=["image/png", "image/jpeg", "image/jpg"];
    if(this.image && allowedFileTypes.includes(this.image.type)){
      const reader=new FileReader();
      reader.onload = () => {
        this.imageData=reader.result as string;
      }
      reader.readAsDataURL(this.image);
    }
  }
}
