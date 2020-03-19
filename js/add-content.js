document.write("Hi! Welcome to Codees. To get started would you perfer coffee or something to nibble on?");
//var choiceOfCoffee;
var userInput = InputEvent(" What type of beverage would you like? The options are ice coffee, ice lattee or you may have a classic hot coffee to keep warm? ");
// if ( userInput=== null || userInput===""){
// choiceOfCoffee = "No coffee for you!";
// } else {
//     choiceOfCoffee = "We have that!";
// }
// document.write('<h2>' + choiceOfCoffee + '</h2>');
confirm(userInput);



    if (userInput === icecoffee) {
        confirm('Enjoy your ice coffee!');
    } else if (userInput = iceLattee) {
        confirm("Enjoy your Lattee and have the best day!");
    } else if (userInput = hotcoffee) {
        confirm('Here is your hot coffee! Stay warm.');
    } else {
        document.write('Please pick an option from the menu. ');
    }




// document.getElementById("ice").addEventListener("Click", function () {
//     getCoffee(icecoffee);
// })
// document.getElementById("lattee").addEventListener("Click", function () {
//     getCoffee(iceLattee);
// })
// document.getElementById("hot").addEventListener("Click", function () {
//     getCoffee(hotcoffee);
// })