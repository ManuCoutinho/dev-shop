import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

const STORE_BASE_URL = 'https://fakestoreapi.com';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpClient: HttpClient) {}

  listProducts(limit='12', sort='desc', category?: string): Observable<Product[]> {
    const onCategorize =
      category == undefined ? '/'
      : category === 'all' ? '/'
      : `/category/${category}/`

    return this.httpClient.get<Product[]>(
      `${STORE_BASE_URL}/products${onCategorize}?sort=${sort}&limit=${limit}`);
  }

  listCategories():Observable<string[]>{
    return this.httpClient.get<string[]>(`${STORE_BASE_URL}/products/categories`);
  }
}