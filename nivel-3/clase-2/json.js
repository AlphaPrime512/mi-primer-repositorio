const fs = require ("fs")

let data = fs.readFileSync("json.json", {encoding:"utf-8"}) //traemoa la data como string

data = JSON.parse(data)//llevamos la data de sring a objeto

data.edad = 17 //cambiamos los valores de la data
data.comidaFavorita = "Pizza"

data = JSON.stringify(data)//devolvemos la data a string

fs.writeFileSync("json.json", data )//guardamos la data
console.log(data)