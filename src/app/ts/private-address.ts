import { AbstractAddress } from "./address";

export class PrivateAddress extends AbstractAddress {

  firstName: string = '';
  lastName: string = '';

  constructor(){
    super(0)
  }

  fullAddress(): string {
    return this.firstName + ' ' + this.lastName + ' ' + super.fullAdress();
  }

  toCSV(): string {
  return `${this.id}; ${this.firstName}; ${this.lastName};${this.street}; ${this.city}:  ${this.zipCode}`

  }


}
