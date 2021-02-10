import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {

  addProducts:any;
  public contactForm: FormGroup;
  constructor(private productService: ProductService,private _FormBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addProducts= this.productService.addProducts;
    this.contactForm = this._FormBuilder.group({
      productName :"",
    productPrice: "",
    productLocation:"",
    categoryName:"",
    productid : "",
    Img:""
    }),
    this.all
  }


  onSubmit() {
 
    this.productService.addProducts(this.contactForm.value);
    
 }
 all()
 {
  this.productService.getAllBags();
  console.log(this.productService.getAllBags())
 }

}
