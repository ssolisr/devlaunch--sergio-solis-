/* Imagina desarrollar un programa para calcular el promedio de calificaciones de estudiantes en una escuela.
Como parte de este desafio, primero configuras el entorno para recibir entradas del usuario, permitiendo 
que ingresen tres notas.  Luego, procesas estos datos para calcular el promedio de manera precisa.  
Finalmente, presentas el resultado formateado con maximo dos decimales, para asegurar una lectura clara.  
Si el usuario ingresa las calificacifnes 80, 70 y 90, la salida sera: 80 “/

*/

const prompt = require('prompt-sync')();

const TOTAL_GRADES = 3 

const gradel = parseFloat(prompt ("Enter the first grade: "))
const grade2 = parseFloat(prompt ("Enter the second grade: "))
const grade3 = parseFloat (prompt ("Enter the third grade: "))

const averageGrade = (gradel + grade2 + grade3) / TOTAL_GRADES

console.log(`Final average grade: ${averageGrade.toFixed(2)}`)

