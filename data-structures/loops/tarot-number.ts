/*

En el Tarot, se usa la numerología para entender mejor a una persona. Para encontrar su número
de Tarot, observamos su fecha de nacimiento. Al sumar los dígitos de su fecha de nacimiento,
podemos encontrar un número especial que los representa.

Para empezar, pensemos en alguien nacido el 28 de noviembre de 1989.
Para descubrir el número, debemos seguir varios pasos:

Sumamos los números de su fecha de nacimiento: el día, el mes y el año.
Entonces, sumamos 28, 11 y 1989, obteniendo 2028.

Ahora, descomponemos este número grande en partes mas pequeñas.

Asi que, para 2028, sumamos 2 + 0 + 2 + 8, lo cual da 12.

Finalmente, simplificamos este número aún más. Para 12, sumamos 1 + 2, lo cual da 3.

Yyyyy ese es el número especial que estamos buscando!!

Recuerda utilizar bucles para reducir al máximo los cálculos numéricos realizados y
validar que la fecha ingresada sea correcta, no puedes recibir una fecha cómo 50/50/2020.

Aunque si podrías recibir una fecha como 12/12/10000 -> 7, ya que podría ser que alguien del futuro
esté usando tu código! ;)
*/

const MIN_MONTH = 1
const MAX_MONTH = 12
const MIN_DAY = 1
const MIN_YEAR = 1
const MAX_THRESHOLD = 10

const isValidDate = (day: number, month: number, year: number): boolean => {
  if (year < MIN_YEAR || month < MIN_MONTH || month > MAX_MONTH || day < MIN_DAY) {
    return false
  }

  const daysInMonth: number = new Date(year, month, 0).getDate()

  return day <= daysInMonth
}

const sumDigits = (number: number): number => {
  let sum = 0

  // const digits = number.toString().split('')

  /* for (let i = 0; i < digits.lenght; i++){
      sum+= parseInt(digits[i])
    }
  */
  
  while (number > 0) {
    sum += number % MAX_THRESHOLD
    number = Math. floor(number / MAX_THRESHOLD)
  }
  
  return sum

}

const calculateTarotNumber = (day: number, month: number, year: number): number | null => {
  if (!isValidDate(day, month, year)) {
    console.error("Invalid date provided.")
    return null
  }

  let total: number = day + month + year

  while (total >= 10) {
    total = sumDigits(total)
  }

  return total
}

console.log(calculateTarotNumber(20, 9, 1989))