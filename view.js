const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.red(
        figlet.textSync(
            'Tip Calculator App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(model){
    const {Price} = model
    const {Tipp} = model
    const {Tip} = model
    const {Total} = model
    return [
        {"Bill Amount": Price},{"Tip (%)": Tipp},{"Tip": Tip},{"Total": Total},
        
    ]
}

function inputForm(model){
    const {Price} = model
    const {Tipp} = model
    const mes1 = 'Bill ammount?'
    const mes2 = 'Tip %?'
    return inquirer.prompt([
        {
            name: 'Price',
            type: 'input',
            message: mes1,
            default: Price,
            validate: function(value){
            if (value >=0){return true}
            else{return "Please insert a valid number"}
            }
        },{
            name: 'Tipp',
            type: 'input',
            message: mes2,
            default: Tipp,
            validate: function(value){
            if (0<= value && value<=100) {return true}
            else{return "Please insert a valid %"}
            }
        }
    ])
}



// Get actual console view
function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view, 
    inputForm
}