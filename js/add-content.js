var customerSaid = document.prompt("Hi! Welcome to Codees. To get started would you perfer coffee or something to nibble on?");
if(customerSaid===yes){
    return userInput();
}
var choiceOfCoffee;
var userInput = prompt(" Are you in the mood for something hot or something cold? ");
if (userInput === null || userInput === "") {
    choiceOfCoffee = "No coffee for you!";
} else if (userInput === 'cold') {
    prompt('You can choose an ice coffee or ice latte? ');
        choiceOfCoffee = prompt.apply();
        return choiceOfCoffee;
} else {
prompt('we hae hot!');
}
document.write('<h2>' + choiceOfCoffee + '</h2>');




if (userInput === icecoffee) {
    confirm('Enjoy your ice coffee!');
} else if (userInput = iceLattee) {
    confirm("Enjoy your Lattee and have the best day!");
} else if (userInput = hotcoffee) {
    confirm('Here is your hot coffee! Stay warm.');
} else {
    document.write('Please pick an option from the menu. ');
}
document.write(userInput);



// document.getElementById("ice").addEventListener("Click", function () {
//     getCoffee(icecoffee);
// })
// document.getElementById("lattee").addEventListener("Click", function () {
//     getCoffee(iceLattee);
// })
// document.getElementById("hot").addEventListener("Click", function () {
//     getCoffee(hotcoffee);
// })