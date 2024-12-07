let notas = []

let crearNotas = () => {
    const input = document.querySelector("#notaInput")
    let notaInput = input.value
    notas.push(notaInput)
    renderizar()
}
let renderizar = () => {
    const ul = document.querySelector("#listaNotas")
    ul.innerText = ""
    notas.forEach( nota=> {
        const li = document.createElement("li")
        li.innerText = nota
        ul.appendChild(li) 
    })
}

