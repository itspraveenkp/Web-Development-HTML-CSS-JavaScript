
//Arrow function

// let greet = () => {

//     console.log("Hello World..!");
// }

let greet = () => console.log("Hello...!");

greet();


// let greet = () => console.log("Hello Duniya..!");

// let Sum2 = (a,b) =>{
//     return a + b;
// };

// let sum2 = (a,b) => a+b;
let half = a => a/2;

setTimeout(() => {
    console.log("We are inside settimeout");  
}, 3000);

let obj1 = {
    greeting : 'Good Morning',
    names: ["Praveen","Kiran","Archna","Bhai"],
    speak(){
        this.names.forEach((student) =>{
            console.log(this.greeting + " Kukdoo Koo " + student);
        });
    }
}

obj1.speak();