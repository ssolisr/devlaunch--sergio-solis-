/*

Crea un programa que simule la operación de una máquina expendedora, permitiendo a un usuario
seleccionar de una lista de productos e insertar monedas hasta que alcance o supere la cantidad
requerida para su producto elegido.

La máquina expendedora solo aceptará denominaciones de monedas específicas, y si el usuario inserta
más del monto requerido, deberá devolver el exceso como cambio.

La máquina expendedora tiene tres productos: A (🍔), B (🍕) y C (🍗)

Cada producto tiene un precio especifico: A cuesta $14. B cuesta $10. C cuesta $8.

Muestra la lista de productos con los precios correspondientes e íconos al usuario.

La máquina acepta monedas en denominaciones de $1, $2, $5 y $10. Muestra las monedas aceptadas al
usuario y pídeles que inserten una de estas cantidades.

Pide al usuario que seleccione un producto escribiendo su letra correspondiente (A, B, o C).
Si el usuario ingresa una opción inválida, el programa debe pedirle nuevamente hasta que ingrese
una selección válida.

Después de seleccionar un producto, solicita al usuario que inserte monedas hasta que el monto total
insertado coincida o exceda el precio del producto seleccionado.

Lleva el registro de la cantidad insertada y muestra el balance al usuario después de cada inserción
de moneda. Una vez que se alcanza el monto requerido:

Muestra el producto seleccionado y un mensaje confirmando la compra. Calcula y muestra cualquier
cambio si la cantidad insertada excede el precio del producto.

Limpia la consola después de cada inserción de moneda y solicitud de selección de producto para una
experiencia de usuario mas limpia.

Ejemplo:

El usuario selecciona el producto A (🍔) con un precio de $14.
El usuario comienza a insertar monedas: Inserta $5 - Balance: $5 Inserta $10 -> Balance: $15

La máquina confirma la compra de 🍔 y devuelve $1 como cambio. Requisitos Adicionales

Implementa validación de entrada para monedas inválidas o entradas no numéricas.

*/

import PromptSync from "prompt-sync";

const prompt = PromptSync()

type Product = 'A' | 'B' | 'C'

interface ProductInfo {
  price: number
  food: string
}

class VendingMachine {
  private validCoins: number []
  private totalInserted: number
  private productSelected: Product | null
  private products: Record<Product, ProductInfo>

  constructor() {
    this.totalInserted = 0
    this.productSelected = null
    this.validCoins = [1, 2, 5, 10]
    this.products = {
      A: { price: 14, food: '🍔' },
      B: { price: 10, food: '🍕' },
      C: { price: 8, food: '🍗' },
    }
  }

  public selectProduct = async () => {
    this.productSelected = this.requestProduct()

    const {price, food} = this.products[this.productSelected]

    while (this.totalInserted < price) {
      console.clear()
      const coin = this.requestCoin(price, food)
      this.totalInserted += coin
    }

    console.clear()
    console.log(`\nProduct ${food}`)
    console.log(`Change: $${this.totalInserted - price}`)
  }

  private requestProduct = (): Product => {
    let option: string = ''

    const options = Object.keys(this.products) as Product[]

    const productList = options.reduce((text, option) => {
      return text + `${option} (${this.products[option].food}) `
    }, '')

    while (!options.includes(option as Product)) {
      console.clear()
      option = prompt(`Select a product ${productList}: `)
    }

    return option as Product
  }

  private requestCoin = (price: number, food: string) => {
    const coins = this.validCoins.reduce((text, coin) => `${text}$${coin} `, ' ')

    console.log(`
      Product: ${food}
      Total: $${price}
      Balance: $${this.totalInserted}
    `)
    
    const coin = prompt(`Insert Coin (${coins}): `)

    return parseInt(coin)
  }
}

const vendingMachine = new VendingMachine()
vendingMachine.selectProduct()


