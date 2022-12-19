// //bsp 1
// // ''/ null / undefinde und NaN = falsy falsy ist gleich Boolean false alle anderen sind truthy also true
// const firstname = null;
// if(!firstname){
//     console.debug('firstname is falsy')
// }


// //bsp 2
// //array
// const namen:string[] = ['max', 'susi'];
// // // alternative
// // const name2: Array<string>  = ['max', 'susi'];
// namen.push('Rainer');

// for(const entry of namen){
//     console.debug(entry)
// }


// // bsp 3
// // any sollte vermieden werden
// // unknown sollte ihn ersetzen
// // zuerst type raus finden
// let value: unknown = 'Hallo Welt';
// value = 100;
// if(typeof value === 'number'){
// const result = value + 10
// console.debug(result)
// }

// // bps 4 interface
// import { Flight } from "../flight";

// //Variante 1
// const flight: Flight = {
//     id: 1,
//     from: 'Graz',
//     to: 'Hamburg',
//     date: '2018-12-24T17:00:00.0001:00'
// }

// flight.from = 'GRZ'
// flight.to = 'HAM'

// console.debug('from', flight.from)
// console.debug('flight', flight)

// // Schreiweise 2
// const id = 1;
// const from = 'Graz';
// const to = 'Hamburg';
// const date = '2018-12-24T17:00:00.0001:00'
// const flight: Flight = {id, from, to, date}
// console.debug(flight)


// bsp 1 interface und klassen
// import { Flight } from "../flight";
// import { FlightManager } from "./flight-manager";

// let flights: Array<Flight> = [

// {
//     id: 17,
//     from: 'Graz',
//     to: 'Hamburg',
//     date: '2020-12-24T17:00:00.0001:00'
// },
// {
//     id: 18,
//     from: 'Graz',
//     to: 'Malorca',
//     date: '2021-12-24T17:00:00.0001:00'
// },
// {
//     id: 19,
//     from: 'Graz',
//     to: 'Hamburg',
//     date: '2022-12-24T17:00:00.0001:00'
// },
// ];

// let fm = new FlightManager(flights)
// let result1 = fm.search('Graz', 'Hamburg');

// for (let f of result1){
//     console.debug('flight', f)
// }

// //bsp 2 interface und klassen
// function showFlight(f: Flight):void{
//     console.debug('---Flight---')
//     console.log('id', f.id)
//     console.log('id', f.from)
//     console.log('id', f.to)
//     console.log('id', f.date)
// }

// const anotherFlight: Flight = {
//     id: 1,
//     from: 'Graz',
//     to: 'Hamburg',
//     date: '2022-12-24T17:00:00.0001:00'
// }

// showFlight(anotherFlight)

// bsp interface und vererbung 1

// import { Flight } from "../flight";
// import { ScheduledFlight } from "./scheduled-flight";
// import { CharterFlight } from "./charter-flight";

// let oneMoreFlight: Flight = new ScheduledFlight();
// oneMoreFlight.distance = 1000

// if(oneMoreFlight.calcPrice){
//     console.debug('Preis Schedule (/3)', oneMoreFlight.calcPrice())
// }

// oneMoreFlight = new CharterFlight()
// oneMoreFlight.distance = 1000

// if(oneMoreFlight.calcPrice){
//     console.debug('Neuer Preis Charter (/2)', oneMoreFlight.calcPrice())
// }

// // bsp interface und vererbung 2

// const scheduledFlight: Flight = new ScheduledFlight

// scheduledFlight.distance = 1000;
// const charterFlight: Flight = new CharterFlight();
// charterFlight.distance = 1000;

// const myFlights: Flight[] = [scheduledFlight, charterFlight];
// for (const f of myFlights){
//     if(f.calcPrice){
//         console.debug('Preis bsp. 2', f.calcPrice)
//     }
// }

// bsp klassen vererbung
// import { Passenger, Pilot, Person } from "./person";

// const person1: Person = new Passenger();
// person1.firstName = 'Max';
// person1.lastName = 'Muster';

// const person2: Person = new Pilot();
// person2.firstName = 'Max';
// person2.lastName = 'Muster';

// const isPerson = person1 instanceof Person;
// const isPassenger = person1 instanceof Passenger;
// const isPilot = person1 instanceof Pilot;

// console.debug('isPerson', isPerson)
// console.debug('isPassenger', isPassenger)
// console.debug('isPilot', isPilot)

// bsp abstrakte basisklassen
// import { CompanyAddress } from "./company-adresse";

// const a1 = new CompanyAddress(1);
// a1.id = 1;
// a1.city = 'Graz';
// a1.street = 'hier';
// a1.zipCode = '8010';
// a1.companyName = 'Gmbh'

// console.debug('a1 as csv', a1.toCSV())
// console.debug('a1 as full address', a1.fullAdress())

// bsp set und get
// import { ScheduledFlight } from "./scheduled-flight";

// const nextFlight = new ScheduledFlight();
// nextFlight.date = '2018-12-24';
// console.debug('unix date', nextFlight.unixDate)
// nextFlight.unixDate = 1000;
// console.debug('unix date 2', nextFlight.date)

// bsp Generics klass
// import { CharterFlight } from "./charter-flight";
// import { FlightInvoice } from "./flight-invoice";

// const charterFlightToCharge = new CharterFlight()
// charterFlightToCharge.from = 'Graz'
// charterFlightToCharge.to = 'Hamburg'
// charterFlightToCharge.distance = 1000

// const price = charterFlightToCharge.calcPrice()
// const charterInvoice = new FlightInvoice<CharterFlight>(charterFlightToCharge,price)

// console.debug('charter', charterInvoice.toString())



// bsp promises
//  function timeout(time: number): Promise<number> {
//   return new Promise((resolve, reject) => {
//     if (time < 0) {
//       reject('Dont')
//       return
//     }

//     setTimeout(() => {
//       resolve(time)
//     }, time)
//   })
// }

// timeout(1000)
// .then(result => console.debug('Timeout', result))
// .catch(error => console.debug('error', error));

// bsp async und await
//  async function timeout(time: number): Promise<number> {
//   return new Promise((resolve, reject) => {

//     if (time < 0) {
//       reject('Dont')
//       return
//     }

//     setTimeout(() => {
//       resolve(time)
//     }, time)

//   })
// }

// async function caller(){
//   let result

//   try {
//     result = await timeout(1000)
//     console.log('Phase 1', result)

//     result = await timeout(600)
//     console.log('Phase 2', result)

//     result = await timeout(300)
//     console.log('Phase 3', result)

//     result = await timeout(2000)
//     console.log('Phase 4', result)
//   }

//   catch (error){
//     console.error('error', error)
//   }
// }
// caller()



