import {Component, computed, DestroyRef, effect, inject, OnInit, signal} from '@angular/core';
import {interval, map, Observable} from "rxjs";
import {toObservable, toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  clickCount = signal(0);
  clickCount$ = toObservable(this.clickCount);

  intervals$ = interval(1000);
  intervalSignal = toSignal(this.intervals$, { initialValue: 0 })
  customInterval$ = new Observable((subscriber)=>{
    let timesExecuted=0;
    setInterval(() => {

      console.log('New value....');
      subscriber.next({timesExecuted});
      timesExecuted++;

    },1000)
  });


  private destroyRef = inject(DestroyRef)
  constructor() {
    //effect(()=>{
    //console.log(`clicked button ${this.clickCount()}`)
  //});
  }

  ngOnInit(): void {
 //   setInterval(() => {
   //  console.log(`interval ${this.interval()}`)
  //const subscription = interval(1000)
//    .pipe(map((val) => val*2))
  //  .subscribe({next: (val) => console.log(val),

    //});
  //this.destroyRef.onDestroy(() => subscription.unsubscribe());
//},1000)

    this.customInterval$.subscribe({
      next: (val) => console.log(val)
    });
    const subscription = this.clickCount$.subscribe((val) => console.log(`Clicked Button ${this.clickCount()} times.`))

    this.destroyRef.onDestroy(() => subscription.unsubscribe());

  }


onClick() {
  this.clickCount.update((count) => count + 1);
}
}
