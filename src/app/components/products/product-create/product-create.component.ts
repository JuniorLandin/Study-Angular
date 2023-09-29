import { Component } from '@angular/core';
import {ProductService} from '../services/product.service'
import { Router } from '@angular/router';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent {

  product: Product = {
    name: '',
    price: undefined,
  }

  constructor(
    private productService: ProductService,
    private router: Router
    ){}

  createProduct(): void{
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage("Produto criado com sucesso.")
      this.router.navigate(['/products'])
    })

  }

  cancel(): void{
    this.router.navigate(['/products'])
  }

}
