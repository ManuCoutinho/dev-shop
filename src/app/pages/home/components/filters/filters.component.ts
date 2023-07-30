import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html'
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Output() showCategory = new EventEmitter<string>();
  categories: string[] = ['all'];
  categoriesSubscription: Subscription | undefined;

  constructor(private _storeService: StoreService) {}
  ngOnInit(): void {
    this.categoriesSubscription = this._storeService
      .listCategories()
      .subscribe((response: string[]) => this.categories.push(...response));
  }

  onShowCategory(category: string): void {
    this.showCategory.next(category);
  }

  ngOnDestroy(): void {
    if(this.categoriesSubscription){
      this.categoriesSubscription.unsubscribe();
    }
  }
}
