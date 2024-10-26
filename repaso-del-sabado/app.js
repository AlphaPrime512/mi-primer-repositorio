let multiplicacion = 10 * 4
let division = 8 / 2
let sum = 2 + 3
let resta = 9 - 3
let modulo = 4 % 3
let palabras = "hola " + "mundo"

//< > <= >= == !=

let menorQue = 2 < 3
let mayorQue = 3 > 2
let menorOIgualQue = 8 <= 9
let mayorOIgualQue = 2 >= 2
let igualQue = 5 == 5
let desigual = 3 != 10

let yUno = 2 == 2 && 3 < 4
let yDos = 5 != 7 && 5 <= 9
let yTres = 2 >10 && 12 >= 50

let oUno = 4 <= 30 || 0 == 0
let oDos = 25 > 90 || 7 != 9
let oTres = 12 >=90 || 10 < 1

//&& ||
// true && true = false
// false && true = false
// false && false = false
// true && true = true

// false || false = false
// false || true = true
// true || false = true
// true || true = True

/* let fruta = "durazno" 

if (fruta == "mango" || fruta == "durazno") {
    console.log("efectivamente, es un " + fruta)
} else {
    console.log (SyntaxErr)
} */

/* let Dia = "domingo"

if (Dia == "sabado") {
    console.log("toca estudiar:(")
} else if (Dia == "domingo") {
    console.log("voy a seguir durmiendo:)")
} else {
    console.log("ni idea de que dia es hoy")
} */

/* function saludo(nombre, apellido) {
    return "hola " + nombre + " " + apellido
}
console.log(saludo("felipe", "mendez"));


function suma (numUno, NumDos) {
    return numUno + NumDos
}
console.log (suma(2, 1))
 */
/* function comparacion (numUno, numDos) {
    if (numDos > numUno) {
        return ("El mayor es " + numDos)
    } else {
        return ("el mayor es " + numUno)
    }
}
console.log (comparacion(2,3)) */


/* function PuedesPasar (edad, padres) {
    if (edad >= 18) {
        return true
    } else if (edad >= 15 && padres == "true") {
        return true
} else {
    return false
}
}
console.log(PuedesPasar(16, "false"))
 */

/* function PuedesPasar(edad, acomp) {
    return edad >= 18 || (edad >= 15 && acomp == true)
}

for(let i = 1; i < 16; i++) {
     console.log(i)
}
 */
let array = ["hola", 5]
console.log(array)