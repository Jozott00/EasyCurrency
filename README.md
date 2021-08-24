# EasyCurrency Angular Inputmask

EasyCurrency is an independend Angular input mask for filtering the input in any input field. The directive does not use the ControlValueAccessor class, so it can be used on custom input field (e.g. the matInput from angular-material). 

```html
<input easyCurrencyMask [(value)]="value">

<mat-form-field appearance="fill">
  <mat-label>Money</mat-label>
  <input matInput easyCurrencyMask [(value)]="value">
</mat-form-field>
```
The value properties takes a number that represents the amount of cent of the actual value. So `€ 12,31` has the value `1231`

At the moment the only currency format is the general European Euro format (`€ 11.232,00`). Format configurations will follow shortly.

Note: The disadvantage of this approach is that the input format is updated only after the key is released.