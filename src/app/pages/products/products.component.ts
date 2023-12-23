import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { RouterLink } from '@angular/router';
import { Product } from '../../interfaces/producto';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products!: Product[];
  private _api = inject(ApiService);
  constructor() {
    this._api.getProducts().subscribe((data:any) => {
      this.products = data;
      console.log(data)
    });
  }
}
