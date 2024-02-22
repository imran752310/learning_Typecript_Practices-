//in quirer is used for to take value from user
import inquirer from "inquirer";
function Welcome() {
    console.log("Welcome To Calculation");
}
async function UserInput() {
    Welcome();
    let userValue = await inquirer.prompt([
        {
            type: "list",
            name: "optr",
            message: "Slect oprator from : + , - , * / ",
            choices: ['add', 'sub', 'multiplication', 'division']
        },
        {
            type: "number",
            name: "number1",
            message: "Enter Ist Number :"
        },
        {
            type: "number",
            name: "number2",
            message: 'Enter Second Number :',
        }
    ]);
    if (userValue.optr === 'add') {
        console.log(`${userValue.number1} + ${userValue.number2} = ${userValue.number1 + userValue.number2}`);
    }
    else if (userValue.optr === 'sub') {
        console.log(`${userValue.number1} - ${userValue.number2} = ${userValue.number1 - userValue.number2}`);
    }
    else if (userValue.optr === 'multiplication') {
        console.log(`${userValue.number1} X ${userValue.number2} = ${userValue.number1 * userValue.number2}`);
    }
    else if (userValue.optr === 'division') {
        console.log(`${userValue.number1} / ${userValue.number2} = ${userValue.number1 / userValue.number2}`);
    }
}
async function Again() {
    do {
        await UserInput();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do You Want To Continiue? Press Y or N :"
        });
    } while (again.restart == 'Y' || again.restart == 'y');
}
Again();
