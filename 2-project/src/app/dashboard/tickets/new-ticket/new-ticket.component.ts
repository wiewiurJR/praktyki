import {AfterViewInit, Component, ElementRef, EventEmitter, output, Output, viewChild, ViewChild} from '@angular/core';
import {ButtonComponent} from "../../../shared/button/button.component";
import {ControlComponent} from "../../../shared/control/control.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [
    ButtonComponent,
    ControlComponent,
    FormsModule
  ],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit{
@ViewChild('form') form?: ElementRef<HTMLFormElement>;
//private  form = viewChild<ElementRef<HTMLFormElement>>('form');
//@Output() add = new EventEmitter();
  enteredTitle = '' ;
  enteredText = '' ;

add = output<{title: string;text:string}>();


  ngOnInit() {
    console.log('On init')
    console.log(this.form?.nativeElement)
  }

  ngAfterViewInit() {
   console.log('After view init')
  console.log(this.form?.nativeElement)
 }

  onSubmit() {
   console.log(`Entered title ${this.enteredTitle}`);
   console.log(`Entered ticket text ${this.enteredText}`);
  // this.form?.nativeElement.reset();
   this.add.emit({title: this.enteredTitle, text:this.enteredText})
    this.enteredTitle = '' ;
    this.enteredText = '' ;
  }
}
