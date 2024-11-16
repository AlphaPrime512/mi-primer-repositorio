const fs = require("fs")


module.exports = {
    loadNotes: function(){
    try {
         let data = fs.readFileSync("../data/notes.json", {encoding: "UTF-8"})
            let parsedData = JSON.parse(Data)
            return parsedData
    } catch (e) {
        return []
    }
    },
    saveNotes: function(notes) {
        let stringData = JSON.stringify(notes)
        fs.writeFileSync("notes.json", stringData)
    },
    createNote: function(tittle, body) {
         let notes = this.loadNotes()
         notes.push({
          tittle: tittle,
          body: body
         })
         this.saveNotes(notes)
    }
}
