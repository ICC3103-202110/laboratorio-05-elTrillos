const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.green(
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
    const {counter} = model
    return [
        {Counter: counter},
    ]
}

function inputForm(model){
    const {input} = model
    const message = 'Bill ammount?'
    return inquirer.prompt([
        {
            name: 'input',
            type: 'input',
            message: message,
            default: input,
            validate: function(value){
                if(value === '+' || value === '-'){
                    return true
                } else {
                    return 'Enter + or -'
                }
            }
        }
    ])
}

function listForm(model){
    const {input} = model
    const message = 'Bill ammount?'
    const choices = ['+', '-']
    return inquirer.prompt({
        name: 'input',
        type: 'list',
        message: message,
        default: input,
        choices: choices
    })
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
    inputForm,
    listForm
}