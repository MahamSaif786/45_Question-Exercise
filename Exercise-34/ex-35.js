/*  Pizzas:
Think of at least three kinds of your favorite pizza. Store these pizza names in an array, and
then use a for loop to print the name of each pizza.
• Modify your loop to print a sentence using the name of the pizza instead of printing just the name of
the pizza. For each pizza you should have one line of output containing a simple statement like I like
pepperoni pizza*/
// Array containing favorite pizza names
var pizzas = ["Pepperoni", "Margherita", "BBQ Chicken"];
// Print the name of each pizza using a for loop
console.log("Favorite pizzas:");
for (var i = 0; i < pizzas.length; i++) {
    // Print the name of the pizza
    console.log(pizzas[i]);
}
// Print a sentence using the name of each pizza
console.log("\nStatements about favorite pizzas:");
for (var i = 0; i < pizzas.length; i++) {
    // Print a sentence expressing preference for each pizza
    console.log("I like ".concat(pizzas[i], " pizza."));
}
// Additional sentence expressing love for pizza
console.log("\nI really love pizza! It's my favorite food.");
