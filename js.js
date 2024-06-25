let studentName;
let studentAge;
let studentGrade;
let isPresent;

studentName = "Alice";
studentAge = 15;
studentGrade = 10;
isPresent = true;

console.log("Student Name:", studentName);
console.log("Student Age:", studentAge);
console.log("Student Grade:", studentGrade);
console.log("Is Present:", isPresent);

let num1 = 10;
let num2 = 5;

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);


num1 += 2; // Increment num1 by 2
num2 -= 1; // Decrement num2 by 1


console.log("Updated num1:", num1); // Should display 4
console.log("Updated num2:", num2); // Should display 12


console.log("Is num1 equal to num2?", num1 === num2); // Should display false
console.log("Is num1 greater than num2?", num1 > num2); // Should display true
console.log("Is num1 not equal to num2?", num1 !== num2); // Should display false, but i missed it displays true


let isPositive = (num1 > 0) && (num2 > 0);
let isEven = (num1 % 2 === 0) || (num2 % 2 === 0);


console.log("Are both numbers positive?", isPositive); // Should display true
console.log("Is at least one number even?", isEven); // Should display true
