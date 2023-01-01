import { Component, forwardRef, OnInit, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { RadioOption } from './radio-otion.model';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers:
  [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioComponent),
    multi: true
  }],
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() options : RadioOption[]
  value : any
  onChange: any;

  constructor() { }

  ngOnInit() {
  }

  setValue(option : RadioOption) {
    this.value = option.value
    this.onChange(this.value)
  }

  writeValue(obj: any): void{
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {}

}
