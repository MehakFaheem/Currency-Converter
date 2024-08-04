"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
//making object 
var currency = {
    USD: 1, //Base currency 
    EURO: 0.91,
    GPB: 0.76,
    INR: 74.57,
    PKR: 280
};
var user_answer = await inquirer_1.default.prompt([
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
    { name: "Amount",
        message: "Enter Your amount",
        type: "number",
    }
]);
var fromAmount = currency[user_answer.from];
var toAmount = currency[user_answer.to];
var amount = user_answer.Amount;
var baseAmount = amount / fromAmount;
var convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
