let main = document.getElementById('main');
console.log(main);

let nav = document.getElementById('nav');
console.log(nav);

let container = document.getElementsByClassName('container');
console.log(container);

let selectorclass = document.querySelector(".container");
console.log("Query Selector is ",selectorclass);

let selectorID = document.querySelector("#nav");
console.log("Query Selector is ",selectorID);

let SelectorAll = document.querySelectorAll("#nav>li");
console.log(SelectorAll)