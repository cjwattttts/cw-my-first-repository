// TASK 1
let purchaseAmount = 200 // declares purhcase amount
if (purchaseAmount > 100) {
    finalAmount = purchaseAmount * 0.9; // applies a discount if amount is larger than 100
}
console.log('Final amount after discount: $${finalAmount}');

// TASK 2
let sales = [45, 300, 200, 350, 15]; // declares an array of sales figures
let totalSales = 0; // sets the initial total sales
for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i]; // adds each sale to the total sales
}
console.log ('Total sales: $${totalSales}');

// TASK 3
let stock = 10; // sets the initital stock value
while (stock > 0) {
    stock--; // decreases stock until it reaches 0
    console.log ('Remaining stock: ${stock}');
}

// TASK 4 
let responses = 0; // sets initital response value

do {
    responses++; 
console.log('Response amoint: ${responses}'); // records the response amount
} while (responses <3); //  keeps looping until 3 responses collected

// TASK 5
let employee = { name: "Alice", position: "Manager", salary: 7500 }; // declares Alice as the manager
for (let key in employee) { // iterates through object properties
    console.log('${key}: ${employee[key]}'); 
}