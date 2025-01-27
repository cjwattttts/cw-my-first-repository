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


