import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeaderModule } from './header';
import { AppComponent } from './app.component';
import { CartSidebarModule } from './cart-sidebar';
import { CartListModule } from './cart-list';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HeaderModule,
    CartSidebarModule,
    CartListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
