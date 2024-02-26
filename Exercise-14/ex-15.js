/*More Guests:
You just found a bigger dinner table, so now more space is available. Think of three more guests
to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing
people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list*/
var myFriends = ["Babar Azam", "Saim Ayub", "Naseem Shah", "Shaheen Shah Afridi", "Shadab Khan"];
console.log("due to some personal reasons Mr. ".concat(myFriends[1], " will not coming on my dinnner."));
myFriends[1] = "Haris Rauf";
console.log("New list of my friends who are coming to my dinner");
for (var i = 0; i < myFriends.length; i++) {
    console.log("".concat(i + 1, ".").concat(myFriends[i]));
}
