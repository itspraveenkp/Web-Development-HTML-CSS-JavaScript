console.log("Hello World..!");

function greet(name, bye) {
    console.log("Hello Good Morning"+ name + bye);
}

// setTimeout(greet, 5000, " Praveen ","take care");

// timeout = setTimeout(greet, 5000, " Praveen ","take care");
// console.log(timeout);
// clearTimeout(timeout);

// setInterval(greet,1000," Praveen ","Take care");

// intervalID = setInterval(greet,1000," Praveen ","Take care");
// clearInterval(intervalID);

function DisplayTime(){
    time = new Date();
    console.log(time);
    document.getElementById('time').innerHTML = time;
}
setInterval(DisplayTime, 1000);
