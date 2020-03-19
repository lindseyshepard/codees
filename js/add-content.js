var customerSaid = prompt("Hi! Welcome to Codees. To get started would you perfer coffee or something to nibble on?");
if (customerSaid === yes) {
    // return userInput();
}

function customerChoice() {
    var userInput = prompt(" Are you in the mood for something hot or something cold? ");
    if (userInput === null || userInput === "") {
        choiceOfCoffee = "No coffee for you!";
    } else if (userInput === 'cold') {
        prompt('You can choose an ice coffee or ice latte? ');
        choiceOfCoffee = prompt.apply();
        return choiceOfCoffee;
    } else {
        prompt('we have hot!');
    }
    document.write(customerSaid());
    document.write('<h2>' + choiceOfCoffee + '</h2>');

}



var customerTotal = 0;
var iceLattee = 3;
var icecoffee = 2.5;
var hotcoffee = 2;
var choiceOfCoffee = [iceLattee, icecoffee, hotcoffee];
while (customerTotal === '' || isNaN(customerTotal)) {



    for (var i = 0; i <= 3; i++) {
        if (i == i[0]) {
            customerTotal += 3;
        }
        else if (i === icecoffee) {
            customerTotal += 2.5;
        }
        else if (i === hotcoffee) {
            customerTotal += 2;
        } else {
            return customerTotal;
        }

        document.write('Your total is: $' + customerTotal);
    }
}
customerChoice();

// if (userInput === icecoffee) {
//     confirm('Enjoy your ice coffee!');
// } else if (userInput = iceLattee) {
//     confirm("Enjoy your Lattee and have the best day!");
// } else if (userInput = hotcoffee) {
//     confirm('Here is your hot coffee! Stay warm.');
// } else {
//     document.write('Please pick an option from the menu. ');
// }
// document.write(userInput);



// // document.getElementById("ice").addEventListener("Click", function () {
// //     getCoffee(icecoffee);
// // })
// // document.getElementById("lattee").addEventListener("Click", function () {
// //     getCoffee(iceLattee);
// })
// document.getElementById("hot").addEventListener("Click", function () {
//     getCoffee(hotcoffee);
// })