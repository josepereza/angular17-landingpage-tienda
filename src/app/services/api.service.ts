import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
private urlBase:string='https://fakestoreapi.com/products'
private _http=inject(HttpClient)
  constructor() { }
  getProducts(){
    return this._http.get<Product[]>(this.urlBase)
  }

  getProduct(id:number){
    return this._http.get<Product>(`${this.urlBase}/${id}`)
  }
}
