const {inputForm, listForm} = require('./view')
const {printTable} = require('console-table-printer')
var prompt = require('prompt-sync')();
// Impure
async function app(state, update, view){
    while (true){
        const {model, currentView} = state
        const {title, table} = currentView
        // I/O
        console.clear()
        console.log(title)
        printTable(table)
        // FORM (Ask user input)
        const input = await inputForm(model)
        //console.log(input["Price"])
        //console.log(input["Tipp"])
        const updatedModel = update(input["Price"],input["Tipp"], model)
        state = {
            ...state,
            model: updatedModel,
            currentView: view(updatedModel)
        }
    }
}

module.exports = {
    app
}