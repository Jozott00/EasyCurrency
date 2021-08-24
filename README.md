# EasyCurrency Angular Input Mask

![Version](https://img.shields.io/npm/v/easy-currency) ![Downloads](https://img.shields.io/npm/dt/easy-currency.svg) ![BundleSize](https://img.shields.io/bundlephobia/min/easy-currency)


EasyCurrency is an independend Angular input mask for filtering the input in any input field. The directive does not use the ControlValueAccessor class, so it can be used on custom input field (e.g. the `matInput` from angular-material). 

## Getting started

Install the npm package
```
$ npm install easy-currency
```
Add the  `EasyCurrencyModule` to the app module
```ts
...
import { EasyCurrencyModule } from 'easy-currency';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...,
    EasyCurrencyModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
Use the `easyCurrencyMask`-Directive on any `ControlValueAccessor` you want 
```html
<input easyCurrencyMask [(value)]="value">

<mat-form-field appearance="fill">
  <mat-label>Money</mat-label>
  <input matInput easyCurrencyMask [(value)]="value">
</mat-form-field>
```
The value properties takes a number that represents the amount of cent of the actual value. So `€ 12,31` has the value `1231`.

<img src="https://user-images.githubusercontent.com/12057307/130602105-68cf756d-a2dd-4d6a-a13a-9ef2b66818f0.gif" alt="demo" width="400"/>

---

**Note1:** The disadvantage of this approach is that the input format is updated only after the key is released.

**Note2:** At the moment the only currency format is the general European Euro format (`€ 11.232,00`). Format configurations will follow shortly.
