import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.scss']
})
export class ProductReadComponent {

  products: Product[] = []
  displayedColumns = ['id', 'name', 'price', 'acoes']

  constructor(
    private productService: ProductService
  ){}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.read().subscribe((products) => {
      this.products = products;
    });
  }

  onDeleteIconClick(id: string): void {
    this.delete(id);
  }

  private delete(id: string): void {
    // Coloque aqui a lógica para deletar o item com o ID fornecido
    // Você pode chamar this.productService.delete(id) aqui
    this.productService.delete(id).subscribe(() => {
      this.loadProducts();
    })
  }
}
