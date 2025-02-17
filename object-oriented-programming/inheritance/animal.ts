/*

Un zoológico necesita un sistema para gestionar los animales y sus comportamientos.

Debes modelar un conjunto de clases que representen distintos tipos de animales y sus características.

Todos los animales tienen un nombre, especie y edad. Además, todos deben poder emitir un sonido
y mostrar su informacion basica.

Algunos animales, como los leones, pueden rugir y tienen una melena. Los elefantes pueden hacer
sonar su trompa y tienen un tamaño especifico (por ejemplo, 'pequeño', 'mediano' o ‘grande').

Crea una clase base Animal con las propiedades y métodos necesarios.

Extender la clase Animal para crear clases específicas como Leon y Elefante que tengan comportamientos
y propiedades particulares.

*/ 

class Animal {
  constructor(
    protected name: string,
    protected species: string,
    protected age: number
  ) {
    this.name = name
    this.species = species
    this.age = age
  }

  makeSound() {
    return ''
  }
  
  toString() {
    return `Name: ${this.name}\nSpiece: ${this.species}\nAge: ${this.age}`
  }
}

class Lion extends Animal {
  
    constructor(
    name: string,
    species: string,
    age: number
  ) {
    super(name, species, age)
  }

  makeSound(): string {
    return 'Roar...'
  }

  print(): string {
    const info = this.toString()
    return `🦁:\n${info}`
  }
}

type ElephantSize = 'small' |'medium' | 'large'

class Elephant extends Animal {
  constructor(
    name: string,
    spicy: string,
    age: number,
    private size: ElephantSize
  ) {
    super(name, spicy, age)
  }  
  
  makeSound(): string {
    return 'Phhrr...'
  }

  print(): string {
    const info = this.toString()
    return '🐘:\n${info}\nSize: ${this.size}'
  }
}

const l1 = new Lion('Simba', 'King', 8)
console.log(l1.makeSound())
console.log(l1.print())

const el1 = new Elephant('Dumbo', 'Flyer', 1, 'small')
console.log(el1.makeSound())
console.log(el1.print())