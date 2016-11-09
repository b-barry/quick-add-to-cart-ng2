import { NgModule } from '@angular/core';
import { CartListComponent } from './cart-list.component';
import { CartItemModule } from './cart-item';
import { CartItemInfoComponent } from './cart-item-info';
@NgModule({
  imports: [CartItemModule],
  exports:[CartListComponent],
  declarations: [CartListComponent, CartItemInfoComponent],
  providers:[]
})
export class CartListModule{

}
