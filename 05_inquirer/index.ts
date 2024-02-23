//in quirer is used for to take value from user
// i crete a Simple Calculator through inquirer
import inquirer from "inquirer";

function Welcome(){
    console.log("Welcome To Calculation");
}

async function UserInput(){
Welcome();
let userValue = await inquirer.prompt([
    {
        type:"list",
        name:"optr",
        message:"Select Operator For Opration:",
        choices: ['Addition','Subtraction','Multiplication','Division']
    },
    {
        type:"number",
        name:"number1",
        message:"Enter Ist Number :"
    },
    {
        type:"number",
        name:"number2",
        message:'Enter Second Number :',
    }
]);
if(userValue.optr==='Addition'){
    console.log(`${userValue.number1} + ${userValue.number2} = ${userValue.number1 + userValue.number2}`);
}else if(userValue.optr === 'Subtraction'){
    console.log(`${userValue.number1} - ${userValue.number2} = ${userValue.number1 - userValue.number2}`);
}else if(userValue.optr === 'Multiplication'){
    console.log(`${userValue.number1} X ${userValue.number2} = ${userValue.number1 * userValue.number2}`);
}else if(userValue.optr === 'Division'){
    console.log(`${userValue.number1} / ${userValue.number2} = ${userValue.number1 / userValue.number2}`);
}
}


async function  Again(){
    do{
        await UserInput();
        var  again = await inquirer.prompt({
            type:"input",
            name:"restart",
            message: "Do You Want To Continiue? Press Y or N :"
        });

    }while( again.restart=='Y' || again.restart =='y');
}
Again();