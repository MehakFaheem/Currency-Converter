#! /usr/bin/env node
import inquirer from "inquirer"

//making object 
const currency : any =  {
    USD : 1,   //Base currency 
    EURO : 0.91,
    GPB : 0.76,
    INR : 74.57,
    PKR : 280
};

let user_answer = await inquirer.prompt
(
    [
        {
            name: "from",
            message: "Enter from Currency",
            type: "list",
            choices: ["USD", "EURO", "GBP", "INR", "PKR"]
        },
        {
            name: "to",
            message: "Enter to Currency",
            type: "list",
            choices: ["USD", "EURO", "GBP", "INR", "PKR"]
        },
        {   name: "Amount",
            message: "Enter Your amount",
            type: "number",
        }
    ]
)

let fromAmount = currency[user_answer.from]
let toAmount = currency[user_answer.to]
let amount = user_answer.Amount;
let baseAmount = amount/fromAmount;
let convertedAmount = baseAmount*toAmount
console.log(convertedAmount);


