// let command = process.argv[2]


// if (command === "add") {
//     console.log("nota agregada")
// } else if (command === "remove") {
//     console.log("nota removida")
// } else {
//     console.log("los comandos activos son: remove y add")
// }

const yargs = require("yargs")
const notesControllers = require("./controllers/notescontrollers")

yargs.command({
    command: "add",
    describe: "add a new note",
    builder: {
        title: {
            describe: "note title",
            demandOPtion: true,
            type: "string"
        },
        body:{        
            describe: "note boy",
            demandOption: true,
            type: "string"
    }
},
    handler: function(argv) {
        notesControllers.createNote(argv.tittle, argv.body)
    }
})

yargs.command({
    command: "remove",
    describe: "remove a note",
    builder: {
        title: {
            describe: "note title",
            demandOPtion: true,
            type: "string"
        }
    },
    handler: function() {
        console.log("nota removida")
    }
})

yargs.command({
    command: "read",
    describe: "read a note",
    builder: {
        title: {
            describe: "note title",
            demandOPtion: true,
            type: "string"
        }
    },
    handler: function() {
        console.log("nota leida")
    }
})

yargs.command({
    command: "list",
    describe: "show the list",
    handler: function() {
        console.log("Listet notes")
    }
})
yargs.parse()




