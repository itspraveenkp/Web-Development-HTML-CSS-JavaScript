console.log("This is JavaScript tutorial");

// let i = 0;
// for(i = 0; i<5; i++){
//     console.log(i);
// }

let friends = ["Praveen","Sanket","Neha","Priti","Priyanka"]

// for (let index = 0; index < friends.length; index++) {

//     console.log(friends[index]);
// }

// friends.forEach(function f(element) {
//     console.log(element);
// });

// for(element of friends){
//     console.log(element);
// }

let employee = {
    name : "Praveen",
    salary : 50000,
    channel: "itspk"
}

for(key in employee){
    console.log(`the ${key} is ${employee[key]}`);
}

// let i = 0;
// while(i < 4){
//     console.log(i);
//     i++;
// }

let j = 34;
do{
    console.log(j);
    j++;
}while(j < 10);