import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from "@angular/core";
import { EasyCurrencyPipe } from "./easy-currency.pipe";


@Directive({
  selector: 'input[easyCurrencyMask]',
  providers: [EasyCurrencyPipe]
})
export class EasyCurrencyMask {

  @Input()
  set value(value: number) {
    this.el.nativeElement.value = this.pipe.transform(value)
  }
  get value() {
    let f = this.el.nativeElement.value.replace(/[^0-9]*/g, "").replace(/^0/, "")
    if(f == "") f = "0"
    return parseInt(f)
  }

  @Output() valueChange: EventEmitter<number> = new EventEmitter()

  constructor(
    private el: ElementRef,
    private pipe: EasyCurrencyPipe
  ) {}

  @HostListener('keyup')
  onKeyDown() {
    this.value = this.value
    this.valueChange.emit(this.value)
  }

}