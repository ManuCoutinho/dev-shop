import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { environment } from 'src/environments/environment.stage';

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
      `${environment.baseUrl}/products${onCategorize}?sort=${sort}&limit=${limit}`);
  }

  listCategories():Observable<string[]>{
    return this.httpClient.get<string[]>(`${environment.baseUrl}/products/categories`);
  }
}
