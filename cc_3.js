//TASK 1
let prices = [9.99, 14.99, 19.99, 24.99, 29.99] // declares array called prices
prices.push(34.99); // adds new price to array
prices.shift(); // removes first price from array
console.log('Price List Updated') // updates price list in console

//TASK 2
let orders = [5, 10, 15, 20, 15] // declares an array called orders
orders [2] += 5; // adds 5 to order 3
let totalOrders = orders.reduce((sum,num) => sum + num, 0); // calculates the total number of all orders
console.log('Orders Updated', orders); // updates order list in console
console.log('Order Count Total', totalOrders); // updates order count total in console

//TASK 3
let employee = {
    name: 'Jack Shepard', // sets name
    role: 'Business Analyst', // sets position
    performaceScore: 95, // sets performance score
    isActive: true // employee is currently working in company 
};
employee.performaceScore = 90; // perfomance score fell
employee.promotionEligible = employee.performanceScore >= 90 // assesing employee eligibility
console.log('Employee Updated', employee); // logs updated employee in console

