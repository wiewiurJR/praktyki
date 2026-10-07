import {Component, output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  calculate = output<  {
    initialInvestment: number,
    duration: number,
    expectedReturn: number,
    annualInvestment: number
  }>();


  enteredInitialInvestment ='0';
  enteredAnnualinvestment ='0';
  enteredExpectedinvestment ='5';
  enteredDuration ='10';

  onSubmit(){
 this.calculate.emit({
   initialInvestment: +this.enteredInitialInvestment,
   duration: +this.enteredDuration,
   expectedReturn: +this.enteredExpectedinvestment,
   annualInvestment: +this.enteredAnnualinvestment
 })
  }
}
