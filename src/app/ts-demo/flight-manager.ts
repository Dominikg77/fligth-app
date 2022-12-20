import { Flight } from "../flight";

// bsp 1 und 2
export class FlightManager {

    private cache: Flight[];

    constructor(cache: Flight[] | null | undefined){

      if (!cache){
        cache = []
      }
        this.cache = cache;
    }

    search (from: string, to: string): Flight[] {
        const result = new Array<Flight>();
        for (let f of this.cache) {
            if (f.from === from && f.to === to ){
                result.push(f)
            }
        }
return result
    }


}

// //exapmple s.52
// export class FlightManager {

//     private cache: Flight[];

//     constructor(cache: Flight[]){
//         this.cache = cache;
//     }

//     search2 (from: string, to: string): Flight[] {
//     return this.cache.filter(f => {
//         return f.from === from && f.to === to
//     })

//     }

// }
