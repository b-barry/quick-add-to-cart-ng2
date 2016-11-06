import { NgModule } from '@angular/core';
import { CartSidebarComponent } from './cart-sidebar.component';

@NgModule({
  id: module.id,
  providers:[],
  exports: [CartSidebarComponent],
  declarations: [CartSidebarComponent]
})
export class CartSidebarModule {
  constructor() {}
}
