var string1 = "This is a String";
var string1 = "This is a String2";
console.log(string1)

let a = "u";
// let a = "u"; // Your can not create Duplicate variable with same name
{
    let a = "u2";
    console.log(a);
}
console.log(a);
 
const ab = "This can not be change";
console.log(ab);

let age = 2;

if(age > 18)
{
    console.log("You can drink water");
}
else if(age == 2)
{
    console.log("Your age",age);
}
else
{
    console.log("You can drink cold drink");
}

let cups = 42;
switch (cups) {
    case 4:
        console.logI("The value of cups is 4");
        break;
        
    case 41:
        console.log("The value of cups is 41");
        break;
    case 42:
        console.log("The value of cups is 42");
        break;
    
    default:
        console.log("The value of cups is none");
        break;
}