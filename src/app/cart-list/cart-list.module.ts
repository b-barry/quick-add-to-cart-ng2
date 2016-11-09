import { NgModule } from '@angular/core';
import { CartListComponent } from './cart-list.component';
import { CartItemModule } from './cart-item';
@NgModule({
  imports: [CartItemModule],
  exports:[CartListComponent],
  declarations: [CartListComponent],
  providers:[]
})
export class CartListModule{

}
