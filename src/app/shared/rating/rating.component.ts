import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  rates : number[]= [1, 2, 3, 4, 5]
  componentRate : number = 0
  previousRate : number
  @Output() rated = new EventEmitter<number>()


  setRate(rate : number) {
    this.componentRate = rate
    this.previousRate = undefined
    this.rated.emit(rate)
  }

  setTempRate(rate: number) {
    if(this.previousRate === undefined) {
      this.previousRate = this.componentRate
    }
    this.componentRate = rate
  }

  clearTempRate(rate: number) {
    if(this.previousRate !== undefined) {
      this.componentRate = this.previousRate
      this.previousRate = undefined
    }
  }
}
