import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './cart-item.component';
@NgModule({
  imports: [CommonModule],
  exports:[CartItemComponent],
  declarations: [CartItemComponent],
  providers:[]
})
export class CartItemModule{

}
