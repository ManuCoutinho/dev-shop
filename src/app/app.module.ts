import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { FiltersComponent } from './pages/home/components/filters/filters.component';
import { ProductsHeaderComponent } from './pages/home/components/products-header/products-header.component';
import { ProductsBoxComponent } from './pages/home/components/products-box/products-box.component';

import { CartService } from './services/cart.service';
import { StoreService } from './services/store.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CartComponent,
    FiltersComponent,
    ProductsHeaderComponent,
    ProductsBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [CartService, StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
