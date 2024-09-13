const readlineSync = require('readline-sync');

let pin = 1234;
let pinTries = 3;
let balance = 1000

function deposit(balance, depositAmount){
    return balance + depositAmount;
}

function cashMachine() {
    console.log(`
        ********************************
        *      WELCOME TO NATEAST      *
        ********************************
    `);

    function checkPin() {
        while (pinTries > 0) {
            let pinRequired = readlineSync.questionInt('Please Enter Your Pin: ');

            if (pinRequired === pin) {
                console.log('Welcome to NatEast');
                let action = readlineSync.question('What would you like to do: 1.Check Account Balance, 2. Deposit, 3. Withdraw: ');
                console.log(`You selected option ${action}`);
                    if (action == 1) {
                        console.log(balance)
                    }
                    else if (action == 2){
                        let depositOption = parseFloat(readlineSync.question('How much would you like to deposit?: '));
                        let newBalance = balance + depositOption;
                        balance = newBalance;
                        console.log("New Balance: " + newBalance);
                        let carryOn = readlineSync.question('Would you like to select another function? Y/N: ');
                    }
                    else if (action == 3){
                        let withdrawAmount = parseFloat(readlineSync.question('How much would you like to withdraw?: '))
                        let withdrawnBalance = balance - withdrawAmount;
                        if (withdrawAmount > balance){
                            console.log('Insufficient Funds');
                        }
                        else{
                        balance = withdrawnBalance;
                        console.log("New Balance: " + withdrawnBalance);
                        }
                    }

            } else {
                pinTries -= 1;
                if (pinTries === 0) {
                    console.log('You have been locked out, please contact your bank');
                } else {
                    console.log(`Pin incorrect, please try again, you have ${pinTries} tries remaining`);
                }
            }
        }
    }
    checkPin();
}

cashMachine();
