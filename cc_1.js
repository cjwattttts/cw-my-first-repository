let employeeName = "Cam Watts";
const employeeID = 10101
var isActive = true;

console.log("Cam Watts", employeeName, "| Type;", typeof employeeName);
console.log("10101", employeeID, "| Type;", typeof employeeID);
console.log("true", isActive, "| Type;", typeof isActive);

let productName = "Phone Case";
const productPrice = 79.99; 
var isAvailable = true;

console.log ("Product Name:", productName, "| Type:", typeof productName);
console.log ("Product Price:", productPrice, "| Type:", typeof productPrice);
console.log ("Is Available:", isAvailable, "| Type:", typeof isAvailable);

let accountBalance = 800;
accountBalance += 500;
console.log("After deposit: $" + accountBalance)
accountBalance -= 200;
console.log("After withdrawal: $" + accountBalance)
accountBalance *= 1.05;
console.log("After interest: $" + accountBalance)
accountBalance /= 2;
console.log("After half: $" + accountBalance)

let customerName = "Mark Smith";
let welcomeMessage = "Welcome, " +customerName;
console.log(welcomeMessage);

let isLoggedIn = true;
let userRole = "Admin";
if (isLoggedIn) {
    console.log("Welcome, " + userRole);
} else {
    console.log("Please log in");
} 
if (isLoggedIn && userRole === "Admin") {
    console.log("Welcome, Admnin") 
} else {
    console.log("Please log in");
}
if (!isLoggedIn) {
    console.log("Please log in");
} else (userRole === "Admin")
    console.log ("Welcome, Admin");
