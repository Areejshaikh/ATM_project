import inquirer from "inquirer";
// creat varialbe
let myBalance = 10000;
let myPin = 1234; // my pin code
// Calculate pinNumber 
let pinOutput = await inquirer.prompt([
    {
        name: "pinNumber",
        message: "Enter your 4 digits Pin!!",
        type: "number",
    }
]);
// pin match
if (pinOutput.pinNumber === myPin) {
    console.log("Correct Pin Code!!!");
}
// Calculate user input
let operatorsAns = await inquirer.prompt({
    name: "operators",
    message: "select any one option",
    type: "list",
    choices: ["withdraw", "checkcash", "fastcash"],
});
if (operatorsAns.operators === "withdraw") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            message: "Enter your amount",
            type: "number",
        }
    ]);
    // insufficient balance
    if (myBalance >= amountAns.amount) {
        myBalance -= amountAns.amount;
        console.log(`Your remaining balance is: ${myBalance}`);
    }
    else {
        console.log("Insufficient Balance");
    }
}
// checkcash
else if (operatorsAns.operators === "checkcash") {
    console.log(`Your remaining balance is: ${myBalance}`);
}
// calculate fast cash
else if (operatorsAns.operators === "fastcash") {
    let fastCashAmount = await inquirer.prompt([
        {
            name: "famonut",
            message: "Select your amount",
            type: "list",
            choices: [2000, 5000, 3000, 8000],
        },
    ]);
    if (fastCashAmount.famonut === 2000) {
        console.log("There You Go");
    }
    else if (fastCashAmount.famonut === 5000) {
        console.log("There You Go");
    }
    else if (fastCashAmount.famonut === 3000) {
        console.log("There You Go");
    }
    else if (fastCashAmount.famonut === 9000) {
        console.log("There You Go");
    }
}
else {
    console.log("Incorrect pin number");
}
