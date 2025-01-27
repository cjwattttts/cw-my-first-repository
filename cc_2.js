let products = ["Phone Case", "Charger", "Computer", "Headphones", "Screen Protector"];
products.push("Adaptor");
console.log("Updated Product List", products);

let scores = [80, 78, 89, 69, 95]; 
scores[1]=95 
let total = 0;
for (let 1 = 0; i<scores.length; i++) {
    total += scores[i];
}
let average = total / scores.length;
console.log("Updated Scores:", scores);
console.log("Average Scores:", average.toFixed(2));

let employee = {
    name: "Cam Watts", age: 35, department: "Electronics", isActive: true
};
employee.department = "Electronics";
employee.position = "Assistant Manager";
console.log("Updated Employee Position:", employee);

let customers = [
    {name: "Sarah Jane" email: "sarahjane@gmail.com", purchaseAmount: 200},
    {name: "Ethan Marks" email: "marks10@gmail.com", purchaseAmount: 367},
    {name: "Emily Jacobs" email: "emmyj2@gmail.com", purchaseAmount: 850},
];
let newCustomers = {name: "Jimmy Bonds," email: "Jbond34@yahoo.com", purchaseAmount 260};
console.log("Customer database:", customers);

let order = {
    orderId: 99090, 
    customerName: "Sarah Jane",
    amount: 200,
    calculateTax: function() {
        return this.amount * 0.10;
    }
};
console.log("Order Details:", order);
console.log("Tax Amount:", order.calculateTax().toFixed(2));