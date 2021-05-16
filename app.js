const {inputForm, listForm} = require('./view')
const {printTable} = require('console-table-printer')
var prompt = require('prompt-sync')();
// Impure
async function app(state, update, view){
    while (true){
        const {model, currentView} = state
        const {title, table} = currentView
        console.clear()
        console.log(title)
        printTable(table)
        const input = await inputForm(model)
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