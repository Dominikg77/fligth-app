import { Component, OnInit } from '@angular/core';
import { simpleInterval } from '../shared/observable-factories';
import { BehaviorSubject, ReplaySubject, debounceTime, delay, distinctUntilChanged, filter, firstValueFrom, from, interval, lastValueFrom, map, merge, of, take, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {}
  constructor() {

    // const simple$ = simpleObservable();
    // simple$.subscribe({
    //   next: value => console.log('next', value),
    //   error: err => console.log('error', err),
    //   complete: () => console.log('complet',)
    // })


// const interval$ = simpleInterval();
// const sub = interval$.subscribe({
//   next: value => console.log('next', value),
//   error: err => console.log('error', err),
//   complete: () => console.log('complet',)
// })
// setTimeout(() => sub.unsubscribe(), 2500)

// const subject = new BehaviorSubject<string>('Init');
// subject.next('A');
// subject.subscribe(value => console.log('Subject value= ', value))
// subject.next('B');
// subject.next('C');

// const subject = new ReplaySubject<string>(10);
// subject.next('A');
// subject.next('B');
// subject.subscribe(value => console.log('Subject value= ', value))
// subject.next('C');

// const sender = new BehaviorSubject<string>('init')
// const reciever$ = sender.asObservable();
// reciever$.subscribe(value => console.debug('Subject says', value));
// sender.next('A')
// sender.next('B')
// sender.next('C')


// const promise = lastValueFrom(interval(200).pipe(take(4)))
// promise.then(v => console.debug('letzer Promise', v))
// const otherPromise = firstValueFrom(interval(200).pipe(take(4)))
// otherPromise.then(v=> console.debug('erster promisess', v))

// function timerAsPromise(time: number): Promise<number> {
//   return new Promise<number> ((resolve, reject) => {

//     if (time < 0 ){
//       reject()
//     }
//     setTimeout(() => resolve(time), time)
//   });
// }

//   from (timerAsPromise(500)).pipe(
//     map(msec => msec / 1000)
//   ).subscribe(v => console.debug('sec', v))
//   }

// of(4771).subscribe(v => console.log(v))

// throwError('Need Codde!!').subscribe({
// next: (next) => console.error('next', next),
// error: (err) => console.error('error', err),
// complete: () => console.log('complet')
// })

// interval(1000).pipe(take(5)).subscribe(v => console.log(v))
// from([1,2,3]).subscribe(v => console.log('next', v))

// interval(200).pipe(
//   take(5),
//   filter(v => v % 2 ===0)
// ).subscribe(v => console.log(v))

// from([1, 1, 1, 2, 1, 1, 2, 2, 3]).pipe(
//   distinctUntilChanged()
// ).subscribe(v => console.log(v))

// interval(200).pipe(
//   take(5), debounceTime(300)
// ).subscribe(v => console.log(v))

// merge(
//   from([1, 2, 3]),
//   from([4, 5, 6])
// ).subscribe(v => console.log(v))

// from([1, 2, 3, 4, 5, 6]).pipe(
//   delay(2000),
//   tap(v => console.debug('before filter', v)),
//   filter(v => v % 2 === 0)
// ).subscribe(v => console.log(v))

}
}
