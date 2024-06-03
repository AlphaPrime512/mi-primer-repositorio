function calcular(operacion, numUno, numDos) {
    if (operacion == 'suma') {
        return numUno + numDos
    }
    else if (operacion == 'resta') {
        return numUno - numDos
    } else if (operacion == 'multiplicacion') {
        return numUno * numDos
    } else if (operacion == 'division') {
        return numUno / numUno
    } else {
        return ('sintax.ERR')
    }
}
console.log(calcular('multiplicacion', 8, 6)) 