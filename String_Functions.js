var str = "This is string";
console.log(str);
var position = str.indexOf("is");
console.log(position);

position = str.lastIndexOf("is");
console.log(position);

position = str.slice(1,9);
console.log(position);

position = str.substring(1,9); //this can not accept negative value although slice accepte 
console.log(position);

position = str.substr(1,5);
console.log(position);

var replace = str.replace('string','Praveen');
console.log(replace);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

var newstring = str.concat(' New String');
console.log(newstring);

var strWithWhiteSpaces = "   this  is    a class       ";
console.log(strWithWhiteSpaces);
console.log(strWithWhiteSpaces.trim());

var char3 = str.charAt(2);
console.log(char3);

var char2 = str.charCodeAt(2);
console.log(char2);

console.log(str[5]);