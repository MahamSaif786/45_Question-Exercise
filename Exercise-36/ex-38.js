/*Large Shirts:
Modify the make_shirt() function so that shirts are large by default, with a message that reads
I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any
size with a different message*/
function make_shirt(message, size) {
    if (message === void 0) { message = "I love TypeScript"; }
    if (size === void 0) { size = "Large"; }
    console.log("Creating a ".concat(size, " shirt with the message: \"").concat(message, "\"."));
}
make_shirt();
make_shirt("I love TypeScript", "Medium");
make_shirt("TypeScript is awesome!", "Small");
