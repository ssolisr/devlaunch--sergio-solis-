/*
En una empresa hay proceso donde cada trabajador debe registrar las horas de entrada
y salida diariamente. De esta forma, al final de cada día, su empleador sabrá cuánto
tiene que pagarles por sus horas trabajas.
Pero, si una persona trabajó mas de ocho horas, se le debe pagar un costo extra por
las horas adicionales, que es igual a 1.5 veces el monto de su tarifa por hora.
Haz un programa que, recibiendo la tarifa por hora, la hora de entrada y la hora de salida,
imprima el monto total de dinero que ese empleado recibió ese dia.

Tarifa por hora: $10
Hora de entrada: 9:00
Hora de salida: 18:00

✔ Respuesta: $95
*/

const prompt = require("prompt-sync")();

function calculaMonto(tarifaPorHora, horaEntrada, horaSalida){
    const minutosEntrada = parseInt(horaEntrada.slice(-2))
    const hrsEntrada = parseInt(horaEntrada.slice(-5, -2))

    const minutosSalida = parseInt(horaSalida.slice(-2))
    const hrsSalida = parseInt(horaSalida.slice(-5, -2))
    
    /*const dineroRecibido = ((hrsSalida - hrsEntrada) <= 8) && (minutosEntrada <= minutosSalida) ? 
    tarifaPorHora * (hrsSalida - hrsEntrada) : (tarifaPorHora * 8) + (1.5 * ((hrsSalida - hrsEntrada) - 8) * tarifaPorHora) */

    const dineroRecibido =
      hrsSalida - hrsEntrada <= 8 && minutosEntrada <= minutosSalida
        ? tarifaPorHora * (hrsSalida - hrsEntrada)
        : hrsSalida - hrsEntrada >= 9 && minutosEntrada <= minutosSalida
        ? tarifaPorHora * 8 + 1.5 * (hrsSalida - hrsEntrada - 8) * tarifaPorHora
        : tarifaPorHora * ((hrsSalida - hrsEntrada) -1) 
    
    return dineroRecibido
      
}


function main(){
    const tarifaPorHora = prompt("Tarifa por hora del trabajador:  $");
    const horaEntrada = prompt("Hora de entrada del trabajador:  ")
    const horaSalida = prompt("Hora de salida del trabajador:  ")

    const monto = calculaMonto(tarifaPorHora, horaEntrada, horaSalida)

    console.log(`El monto que se le pagará al trabajador sería: $${monto}`)
}

main ()