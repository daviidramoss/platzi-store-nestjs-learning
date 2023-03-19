const myName = 'David';
const myAge = 32;

const suma = (a : number, b: number) => {
  return a + b;
}

suma(12, 13);

class Persona {

  constructor(private age: number,private name: string) {}

  getSummary(){
    return `my name is ${this.name}, my age is ${this.age}`;
  }
}

const david = new Persona(32, 'David');

david.getSummary();
