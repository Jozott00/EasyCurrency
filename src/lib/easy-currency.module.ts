import { NgModule } from '@angular/core';
import { EasyCurrencyMask } from './easy-currency.directive';
import { EasyCurrencyPipe } from './easy-currency.pipe';



@NgModule({
  declarations: [
    EasyCurrencyPipe,
    EasyCurrencyMask
  ],
  exports: [
    EasyCurrencyMask
  ]
})
export class EasyCurrencyModule { }
