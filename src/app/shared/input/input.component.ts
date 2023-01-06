import { Component, OnInit, AfterContentInit, ContentChild, Input } from '@angular/core';
import { FormControlName } from '@angular/forms';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {

  constructor() { }

  input: any
  @Input() label : string
  @Input() errorMessage: string
  @Input() showTip: boolean = true
  @ContentChild(FormControlName) control: FormControlName

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.input = this.control
    if(this.input === undefined) {
      throw new Error('Esse componente precisa ser usado com uma FormControlName')
    }
  }

  hasSuccess() : boolean {
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError() : boolean {
    return !this.input.valid && (this.input.dirty || this.input.touched)
  }

}


