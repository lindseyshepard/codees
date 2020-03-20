
//if (customerSaid === yes) {
// return userInput();
//}

// function customerChoice() {
//     var userInput = prompt(" Are you in the mood for something hot or something cold? ");
//     if (userInput === null || userInput === "") {
//         choiceOfCoffee = "No coffee for you!";
//     } else if (userInput === 'cold') {
//         prompt('You can choose an ice coffee or ice latte? ');
//         choiceOfCoffee = prompt.apply();
//         return choiceOfCoffee;
//     } else {
//         prompt('we have hot!');
//     }
//     document.write(customerSaid());
//     document.write('<h2>' + choiceOfCoffee + '</h2>');

// }


// var userChoice = function () {
//     var customerTotal = 0;
//     var iceLattee = 3;
//     var icecoffee = 2.5;
//     var hotcoffee = 2;
//     var order = prompt('What kind of coffee would you like?');
//     while (customerTotal === '' || isNaN(customerTotal)) {


//         var choiceOfCoffee = [iceLattee, icecoffee, hotcoffee];
//         for (var i = 0; i <= 3; i++) {
//             if (i == iceLattee) {
//                 customerTotal += 3;
//             }
//             else if (i === icecoffee) {
//                 customerTotal += 2.5;
//             }
//             else if (i === hotcoffee) {
//                 customerTotal += 2;
//             } else {
//                 return customerTotal;
//             }
//             document.write('Your total is: $' + customerTotal);
//             amount = customerTotal;
//         }
//         return customerTotal;
//     }
// }
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
var buyCoffee = prompt("Hi! Welcome to Codees. Would you like to buy a coffee?");

while (buyCoffee !== "yes" || buyCoffee !== "no") {
    var buyCoffee = prompt('Would you like to buy a coffee?');


    if (buyCoffee === "yes") {
        ask();
    } else if (buyCoffee === "no") {
        var exitGreeting = document.write('Have a great day!');
    }
}

// coffee images
//var icecoffee = <img src="http://1.bp.blogspot.com/-UV9fcFYETGc/ThYLf-46zMI/AAAAAAAAEXI/3FgR0-Y4ypg/s1600/coffee4.JPG"></img>
//var iceLattee = <img src="http://www.bramptonfoods.ca/wp-content/uploads/2015/05/blended-ice-coffee.jpg"></img>
//var hotcoffee = <img src="https://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/58324-iStock-157528129.jpg?itok=kihwEBm5"></img>
function ask() {


    var perference = prompt('Would you like a hot coffee or an ice coffee/latte? ');
    while (perference !== 'hot' || perference !== 'ice') {
        var perference = ('please choose ice or hot');
    }
    if (perference === ice) {
        var totalLattee = 0;
        var totalIceCoffee=0;
        var totalHotCoffee = 0;
        var total = totalIceCoffee + totalHotCoffee + totalLattee;

        var iceChoices = prompt('Ice coffee or ice lattee?')
        if (iceChoices === icecoffee) {
            document.getElementById("icecoffee").innerHTML;
            totalIceCoffee++;
        } else if (perference === iceLattee) {
            document.getElementById("icelattee").innerHTML;
            totalLattee++;
        } else {
            var iceChoices = prompt('please enter icecoffee or icelattee');
        }
        return iceChoices;
    } else {
        
        var hotChoice = prompt('How many hot coffees would you like? ');
        document.getElementById("hotcoffee").innerHTML;
        totalHotCoffee++;


    }
    document.write(total);
    return total;
}

ask();