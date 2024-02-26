/* . Animals:
Think of at least three different animals that have a common characteristic. Store the names
of these animals in a list, and then use a for loop to print out the name of each animal.
• Modify your program to print a statement about each animal, such as A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in common. You could print
a sentence such as Any of these animals would make a great pet!*/
// Array containing names of animals
var animals = ["Dog", "Cat", "Rabbit"];
// Print the name of each animal using a for loop
console.log("List of animals:");
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
// Print a statement about each animal
console.log("\nStatements about each animal:");
for (var i = 0; i < animals.length; i++) {
    console.log("A ".concat(animals[i], " would make a great pet."));
}
// Print a statement about what these animals have in common
console.log("\nAny of these animals would make a great pet!");
