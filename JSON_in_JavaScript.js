let Jsonobj = {
    name: "Praveen",
    Channel:"itspraveenkp",
    Friend:"Rita",
    Food:"Bhopla"
}

console.log(Jsonobj);

let MyJsonobj = JSON.stringify(Jsonobj);

MyJsonobj = MyJsonobj.replace("Praveen","Chandan");
console.log(MyJsonobj);

NewMyJsonobj = JSON.parse(MyJsonobj);
console.log(NewMyJsonobj);
