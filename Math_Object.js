//printing Math object 
 let m = Math;
 console.log(m);

//  Printing the constants from math object
 console.log("The value of Math.E is ", Math.E);
 console.log("The value of Math.PI is ", Math.PI);
 console.log("The value of Math.LN2 is ", Math.LN2);
 console.log("The value of Math.SQRT1_2 is ", Math.SQRT1_2);
 console.log("The value of Math.LOG2E is ", Math.LOG2E);
 
//  Printing the Function from math object
let a = 34.45353;
let b = 89;
console.log("The values of a and b is ",a,b);
console.log("The values of a and b rounded is ",Math.round(a),Math.round(b));

console.log("3 raised to the power 2 is ",Math.pow(3,2));
console.log("2 raised to the power 12 is ",Math.pow(2,12));
console.log("1 raised to the power 2 is ",Math.pow(1,2));

console.log("square root of 36 is ",Math.sqrt(36));
console.log("square root of 54 is ",Math.sqrt(54));
console.log("square root of 60 is ",Math.sqrt(60));


//ceil and floor
console.log("5.8 rounded up to nearest is ",Math.ceil(5.8));
console.log("5.8 rounded up to nearest is ",Math.floor(5.8));

//Abs Function 
console.log("Absolute value of 5.66 is", Math.abs(5.66));
console.log("Absolute value of -5.66 is", Math.abs(-5.66));

//trigonometry function
console.log("The values of sin(pi) is", Math.sin(Math.PI));
console.log("The values of sin(pi) is", Math.sin(Math.PI/2));
console.log("The values of tan(pi) is", Math.tan(Math.PI));
console.log("The values of tan(pi) is", Math.tan(Math.PI/2));
console.log("The values of cos(pi) is", Math.cos(Math.PI));
console.log("The values of cos(pi) is", Math.cos(Math.PI/2));


// min and max function
console.log("Minimum value of 4,5,6 is ",Math.min(4,5,6));
console.log("Maximum value of 4,5,6 is ",Math.max(4,5,6));

// Random Number
let r = Math.random();

let x = 1;
let y = 100;
let y_100 = x + (y - x) * Math.random();

console.log("The Random Number is ",r);
console.log("The Random Number is ",y_100);

