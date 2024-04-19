//Qs. Create a traffic light system that shows what to do based on colour?
let colour = "red";
if(colour=="red"){
    console.log("STOP");
}
if(colour=="yellow"){
    console.log("SLOW DOWN");
}
if(colour=="green"){
    console.log("GO");
} 


// Qs.  Create a system to calculate popcorn prices based on the sixe customer asked for:
//         If size is 'XL' price is Rs. 250
//         If size is 'L' price is Rs. 200
//         If size is 'M' price is Rs. 100
//         If size is 'S' price is Rs. 50
         
let size = "XL";
if(size=="XL"){
    console.log("Price is 250 Rs.");
} else if(size=="L"){
    console.log("Price is 200 Rs.");
} else if(size=="M"){
    console.log("Price is 100 Rs.");
} else{
    console.log("Price is 50 Rs.");
}


//Qs. A "Good String" is a staring that sarts with the letter 'a' & has a length > 3 Write a program to find if a good string is good or not 
 let str = "aman dhattawal";
 if((str[0]=="a") && (str.length >3)){
    console.log("Good String");
 } else{
    console.log("String is bad");
 }

 //Qs. Pradict the output of following code?
 let num = 12;
if((num%3==0) && ((num+1==15) || (num-1 == 11))){
    console.log("Safe");  //output is "Safe"
}else{
    console.log("Unsafe");
}


//Qs. Create a number variable num with some value now print good of the numbetr is divisible by 10 and print if it is not.
let n = 200;
if(n%10==0){
    console.log("Good");
}else{
    console.log("Bad");
}


//Qs. Take the user name & age as input using prompt then return back the following statements to the user as an aler(by subtituting thier name & age) name is age year old.
// let name = prompt("Enter your name");
// let age = prompt("Enter your age");

// alert(`${name} is ${age} year old`);

//Qs. Write a switch statement to print the months in a quarter.
//Months in Quarter 1: Janury, February, March
//Months in Quarter 2: April, May, June
//Months in Quarter 3: July, August, September
//Months in Quarter 4: October, November, December

let quarter = 1;

switch(quarter){
    case 1: 
    console.log("Janury, February, March");
    break;
    case 2: 
    console.log("April, May, June");
    break;
    case 3: 
    console.log("July, August, September");
    break;
    case 4: 
    console.log("October, November, December");
    break;
    case "default": 
    console.log("Pleas choose between 1 to 4");
    break;   
}


//Qs. Write a program to find largest of three numbers
let num1 = 10;
let num2 = 20;
let num3 = 30;
if(num1>num2){
    console.log("num1 is greater");
} else if(num>num3){
    console.log("num2 is greater");
}else{
    console.log("num3 is greater");
}


//Qs. Write a program to check if 2 numbers have the same last digit 
//Eg. 32 and 47852 have the last digit i.e 2

let no1 = 32;
let no2 = 47852;

let upd1 = no1.toString();
let upd2 = no2.toString();

if(upd1[upd1.length-1] == upd2[upd2.length-1]){
    console.log("same");
}else{
    console.log("not same");
}