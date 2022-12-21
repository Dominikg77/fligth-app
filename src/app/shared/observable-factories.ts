import { Observable } from "rxjs";


// export function simpleObservable(): Observable<number> {

// return new Observable<number> (observer =>{

// observer.next(4715),
// observer.next(815),
// observer.complete();

// return () => {
//   console.debug('Thread down')
// }

// })
// }

export function simpleInterval(): Observable<number> {

  return new Observable<number>(observer => {
    let counter = 0

    const handle = setInterval(() => {
      observer.next(counter)
      counter++;
      if (counter >= 3) {
        observer.complete()
      }
    }, 1000)
    return () => {
      clearInterval(handle);
      console.log('Threadwon!')
    }
  })

}
