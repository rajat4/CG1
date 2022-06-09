import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'RBT2';
  currentBeverage = "Coffee";
  beverages = ['milk' , 'tea' , 'coffee' , 'juice'];


  animate1(){
    console.log("Play Animation 1");
  }

  animate2(){
    console.log("Play Animation 2");
  }

  animate3(){
    console.log("Play Animation 3");
  }

  addBeverage(newBeverage: string){
    this.beverages.push(newBeverage);
    this.clearInput();
  }

  clearInput(){
    let input = <HTMLInputElement>document.getElementById('beverage-input');
    input.value = '';
  }
}
