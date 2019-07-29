import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewBasketComponent } from './view-basket/view-basket.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ViewBasketComponent],
  imports: [
    CommonModule,FormsModule,
    ReactiveFormsModule,
  ],exports:[ViewBasketComponent]
})
export class BasketModule { }
