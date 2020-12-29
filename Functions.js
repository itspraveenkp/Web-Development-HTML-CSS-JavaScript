function greet(name,greettext)
{
    console.log(name + " How are you ..?");
    console.log(greettext,name);
}

function sum(a,b,c)
{
    let d = a + b + c;
    return d;
}

name0 = "Praveen";
name1 = "Ravi";
name2 = "Rajesh";
name3 = "Mukesh";
name4 = "Akshay";
greetText =  "Good Morning";

greet(name0,greetText);
greet(name1,greetText);
greet(name2,greetText);
greet(name3,greetText);
greet(name4,greetText);

let returnvalue = sum(2,1,5);
console.log(returnvalue);