import {Component, DestroyRef, inject, OnInit} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit{
  currentStatus:'online'|'offline'|'unknow' = 'offline'
private destroyRef = inject(DestroyRef)
  constructor() {
  }
  protected readonly onoffline = onoffline;
ngOnInit() {
  const interval = setInterval(() => {
    const rnd = Math.random();
    if(rnd<0.5){
      this.currentStatus = 'online';
      console.log(this.currentStatus);
    }else if (rnd < 0.9){
      this.currentStatus = 'offline';
      console.log(this.currentStatus)

    }else {
      this.currentStatus = 'unknow';
      console.log(this.currentStatus)

    }
  },5000);
  this.destroyRef.onDestroy(() => clearInterval(interval))
}
ngAfterViewInit(){
  console.log('AFTER VIEW INIT')
}


}

