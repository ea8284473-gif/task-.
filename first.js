var num =Number(prompt("Enter Number:"));
console.log(num);


/*********************/


var num2=Number(prompt("Enter Number:"));
if (num2 %3===0 && num2 %4===0) {
    console.log("yes");
}else{
    console.log("no");
}

/***************************/
var a =Number(prompt("Enter First Number:"));
var b =Number(prompt("Enter Second Number:"));
if (a>b) {
    console.log("max is",a);
}else{
    console.log("max is",b);
}

/****************************/

var num3=Number(prompt("Enter number:"));
if (num3<0) {
    console.log("negative");
}else{
    console.log("positive");
}

/*********************************/

var x=Number(prompt("Enter First Number:"));
var y=Number(prompt("Enter Seconed Number"));
var z=Number(prompt("Enter Third Number:"));
var maxEl = x;
if (y > maxEl) maxEl = y;
if (z > maxEl) maxEl = z;

var minEl = x;
if (y < minEl) minEl = y;
if (z < minEl) minEl = z;

console.log("max element =", maxEl);
console.log("min element =", minEl);

/*********************/

var num4=Number(prompt("Enter number:"));
if (num4%2===0) {
    console.log("even number");
}else{
    console.log("odd number");
}

/*************************/

var ch = prompt("Enter a character:").toLowerCase();
if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
  console.log("vowel");
} else {
  console.log("consonant");

}
/****************************/


var num5 = Number(prompt("Enter an integer:"));
var output = "";
for (var i = 1; i <= num5; i++) {
  output += i + (i < num5 ? ", " : "");
}
console.log(output);


/********************/

var num6 = Number(prompt("Enter a number for multiplication table:"));
var table = "";
for (var i = 1; i <= 12; i++) {
  table += (num6 * i) + " ";
}
console.log(table);

/*********************************/


var m = Number(prompt("10) Enter a number for multiplication table up to 12:"));
var multLine = "";
for (var i = 1; i <= 12; i++) {
  multLine += (m * i) + (i < 12 ? " " : "");
}
console.log("Q10:", multLine);

/****************************************/
var n = Number(prompt("11) Enter a number to list even numbers from 1 to it:"));
var evens = "";
for (var i = 2; i <= n; i += 2) {
  evens += i + (i + 2 <= n ? " " : "");
}
console.log("Q11:", evens);  

/************************************/


var base = Number(prompt("12a) Enter base:"));
var exp  = Number(prompt("12a) Enter exponent (non-negative integer):"));
var pow = 1;
for (var i = 1; i <= exp; i++) pow *= base;
console.log("Q12a:", base + "^" + exp + " =", pow);

/*****************************************/


var s1 = Number(prompt("12b) Enter mark 1 (out of 100):"));
var s2 = Number(prompt("12b) Enter mark 2 (out of 100):"));
var s3 = Number(prompt("12b) Enter mark 3 (out of 100):"));
var s4 = Number(prompt("12b) Enter mark 4 (out of 100):"));
var s5 = Number(prompt("12b) Enter mark 5 (out of 100):"));

var total = s1 + s2 + s3 + s4 + s5;     
var average = total / 5;                 
var percentage = (total / 500) * 100;    

console.log("Q12b: Total marks =", total);
console.log("Q12b: Average marks =", average);
console.log("Q12b: Percentage =", percentage);


/*****************************************/


var month = Number(prompt("13) Enter month number (1-12):"));
if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
  console.log("Days in Month: 31");
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
  console.log("Days in Month: 30");
} else if (month === 2) {
  console.log("Days in Month: 28 or 29");
} else {
  console.log("Invalid month number");
}

/*********************************/
var p = Number(prompt("14) Physics mark:"));
var c = Number(prompt("14) Chemistry mark:"));
var b = Number(prompt("14) Biology mark:"));
var m = Number(prompt("14) Math mark:"));
var comp = Number(prompt("14) Computer mark:"));

var total = p + c + b + m + comp;
var percentage = (total / 500) * 100;
var grade = "";

if (percentage >= 90){
    grade = "Grad A";
} 
else if (percentage >= 80){
  grade = "Grad B";  
} 
else if (percentage >= 70){
    grade = "Grad C";
} 
else if (percentage >= 60) {
    grade = "Grad D";
}
else if (percentage >= 40){
  grade = "Grad E";  
} 
else {
    grade = "Grad F";
}

console.log("Total =", total);
console.log("Percentage =", percentage);
console.log("Grade =", grade);

// *****************************************/
var mth = Number(prompt("15) Enter month number:"));
switch(mth) {
  case 1: case 3: case 5: case 7: case 8: case 10: case 12:
    console.log("Days = 31");
    break;
  case 4: case 6: case 9: case 11:
    console.log("Days = 30");
    break;
  case 2:
    console.log("Days = 28 or 29");
    break;
  default:
    console.log("Invalid month");
}

/*******************************/
var letter = prompt("16) Enter a letter:").toLowerCase();
switch(letter) {
  case "a": case "e": case "i": case "o": case "u":
    console.log("Vowel");
    break;
  default:
    console.log("Consonant");
}

/*****************************************/
var n1 = Number(prompt("17) Enter first number:"));
var n2 = Number(prompt("17) Enter second number:"));
switch(true) {
  case (n1 > n2):
    console.log("Max =", n1);
    break;
  case (n2 > n1):
    console.log("Max =", n2);
    break;
  default:
    console.log("Equal");
}

/*******************************/
var number = Number(prompt("18) Enter a number:"));
switch(number % 2) {
  case 0:
    console.log("Even");
    break;
  default:
    console.log("Odd");
}

/********************************/
var num7 = Number(prompt("19) Enter a number:"));
switch(true) {
  case (num7 > 0):
    console.log("Positive");
    break;
  case (num7 < 0):
    console.log("Negative");
    break;
  default:
    console.log("Zero");
}

/**********************************/

let aa = Number(prompt("20) Enter first number:"));
let op = prompt("20) Enter operator (+, -, *, /):");
let b2 = Number(prompt("20) Enter second number:"));

switch(op) {
  case "+":
    console.log("Result =", aa + b2);
    break;
  case "-":
    console.log("Result =", aa - b2);
    break;
  case "*":
    console.log("Result =", aa * b2);
    break;
  case "/":
    console.log("Result =", aa / b2);
    break;
  default:
    console.log("Invalid operator");
}