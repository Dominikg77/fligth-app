export class Invoice <T> {

constructor(readonly subject: T, readonly price: number) {}

toString(): string {
  let id = '';
  //id = this.subject.id; fehler

  return `${id}: ${this.price}`

}

}
