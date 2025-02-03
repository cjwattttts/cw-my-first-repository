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

//TASK 6 
let products = ["Camera", "Charger", "Adaptor"]; // establishes the products
for (let product of products) { // displays each product
    console.log('Product: ${product}');
}

// TASK 7
let orders = [100, 105, 110]; // declares an array of order IDs
 orders.forEach(order => { // logs each order ID
    console.log('Order IDs: ${order}') // records each order ID to the log
 })

 // TASK 8
 function calculateTax(amount, taxRate) { // takes the tax rate and amount
    return amount * taxRate; // returns the calculate tax amount
 }
 let tax = calculateTax(60, 0.04);

 // TASK 9
 let applyDiscount = function(price, discount) {
    return price - (price * discount / 60); // calculates the discounted price
 }
 let discountedPrice = applyDiscount(150, 10); // applies a discount of 10 percent to a price of 150
 console.log('Price Discount: $${discountedPrice}'); // logs the discounted price to the console

 