function calcular(operacion, numUno, numDos) {
    if (operacion == 'suma') {
        return numUno + numDos
    }
    else if (operacion == 'resta') {
        return numUno - numDos
    } else if (operacion == 'multiplicacion') {
        return numUno * numDos
    } else if (operacion == 'division') {
        return numUno / numDos
    } else {
        return ('sintax.ERR')
    }
}

for (let i = 1; i < 6; i++) {
    console.log(i)
}