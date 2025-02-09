/*

Estas diseñando un sistema básico para gestionar cuentas bancarias de clientes.

Cada cuenta bancaria tendrá un identificador único, un nombre del titular, y un saldo.
Tu tarea es crear una función createAccount que genere un objeto de cuenta bancaria.

El objeto debe ser creado por medio de un function declaration, con todas las propiedades y
métodos deben estar definidos dentro de la funcién usando this.

Propiedades de la cuenta bancaria (dentro de la función usando this):

id: identificador unico de la cuenta.

holderName: nombre del titular de la cuenta.

balance: saldo de la cuenta.

Métodos de la cuenta bancaria (dentro de la función usando this):

deposit(amount): incrementa el saldo de la cuenta.

withdraw(amount): disminuye el saldo de la cuenta si hay suficientes fondos.
transfer(toAccount, amount): transfiere fondos de la cuenta actual a otra cuenta
si hay suficientes fondos disponibles.

*/

/*
function createAccount (id, holderName, balance = 0){
    const account = function newAccount(){
        this.id = id;
        this.holderName = holderName
        this.balance = balance

        this.deposit = function deposit(){
          balance + this.deposit
          return balance 
        }
    }
    return account
}
*/

function Account(id, holderName, balance = 0) {
  this.id = id
  this.holderName = holderName

  this.balance = balance

  this.deposit = function(amount) {
    const isPositiveAmount = amount <= 0
    if(!isPositiveAmount) return null
    else
      this.balance += amount
    return this.balance
  }

  this.deposit = function(amount) {
    if (this.balance >= amount){
      this.balance -= amount
      return amount
    }
    return null   
  }
  this.withdraw = (amount) => {
    if (this.balance  >= amount){
      this.balance -= amount
      return amount
    }
    return null
  }
  this.transfer = (toAccount, amount) => {
    const cash = this.withdraw(amount)
    if (cash) {
      toAccount. deposit (cash)
      return toAccount
    }
    return null
    
    return this
  }
  return this;
}

const acc1 = new Account(1, 'Sergio', 10000)

const acc2 = new Account(2, 'Gera Medellin')

console.log(acc1);
console.log(acc1.transfer(acc2, 5000))
console.log(acc1)



