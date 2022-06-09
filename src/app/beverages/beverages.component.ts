import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.scss']
})
export class BeveragesComponent implements OnInit {

  constructor() { }
  
  @Input() beverage = "Tea";
  @Output() newBeverageEvent = new EventEmitter<string>();

  ngOnInit(): void {
  }

  addNewBeverage(value: string){
    this.newBeverageEvent.emit(value);
  }

}
