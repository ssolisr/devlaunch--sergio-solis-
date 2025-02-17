/*

Eres responsable de diseñar un sistema sencillo de gestién de vehículos para una empresa de transporte.

El sistema debe representar diferentes tipos de vehículos y sus comportamientos utilizando una estructure

Todos los vehiculos tienen un emoji, marca, modelo y año de fabricacion.

Los vehiculos deben poder arrancar y mostrar su informacion.

Los coches tienen un numero específico de puertas y deben poder encender el aire acondicionado.

Las motocicletas pueden tener un sidecar y deben poder hacer una acrobacia en una rueda (wheelie).

*/

class Vehicle {
  private isOn: boolean

  constructor(
    protected emoji: string,
    protected brand: string,
    protected model: string,
    protected year: number
  ) {
    this.emoji = emoji
    this.brand = brand
    this.model = model
    this.year = year
    this.isOn = false
  }

  run() {
    this.isOn = true
  }

  toString() {
    return `Emoji: ${this.emoji}\nBrand: ${this.brand}\nModel: ${this.model}\nYear: ${this. year}`
  }
}

class Car extends Vehicle {
  private isAirOn: boolean
  
  constructor(
    brand: string,
    model: string,
    year: number,
    private numOfDoors: number = 4,
  ) { 
    super('🚙', brand, model, year)
    this.isAirOn = false
  }
}

class Motorcycle extends Vehicle {
  constructor(
    brand: string,
    model: string,
    year: number,
  ) {
    super('🛵', brand, model, year)
  }
  
  wheelie (){
    return  '☸️'
  }
}
  
const car1 = new Car('Hyundai', 'Tucson', 2020)
const mtc1 = new Motorcycle ('Yahama' , 'YS125-G', 2016)

console.log(car1.toString())
console.log(mtc1.toString())