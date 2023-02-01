function addNum(num) {
  return num + 1;
}

// recursive function
function counter(money){
  if(isNaN(money))
  {
    return;
  }
  // base case
  if(money < .05 ){
    console.log(`Pennies: ${Math.floor(money/.01)}`);
    return;
  }
  if(money >= .25){
    console.log(`Quarters: ${Math.floor(money/.25)}`);
    return counter(money % .25);
  }
  if(money >= .10){
    console.log(`Dimes: ${Math.floor(money/.10)}`);
    return counter(money % .10);
  }
  if(money >= .05){
    console.log(`Nickles: ${Math.floor(money/.05)}`);
    return counter(money % .05);
  }
}

function counterChatGPT(money){
  if(isNaN(money))
  {
    return;
  }
  // base case
  if(money < .05 ){
    return {pennies: Math.floor(money/.01)};
  }
  if(money >= .25){
    return {quarters: Math.floor(money/.25), 
            remainder: counter(money % .25)};
  }
  if(money >= .10){
    return {dimes: Math.floor(money/.10), 
            remainder: counter(money % .10)};
  }
  if(money >= .05){
    return {nickles: Math.floor(money/.05), 
            remainder: counter(money % .05)};
  }
}







// closure function
function closureCounter(money)
{
  console.log(`Quarters: ${getQuarters(money)}`);
  console.log(`Dimes: ${getDimes(money - (getQuarters(money) * .25))}`);
  console.log(`Nickles: ${getNickels(money - ((getDimes(money - (getQuarters(money) * .25)) * .10) + (getQuarters(money) * .25)))}`);
  console.log(`Pennies: ${getPennies(money - 
    ((getQuarters(money) * .25) 
    + ((getDimes(money - (getQuarters(money) * .25)) * .1) 
    + ((getNickels(money - ((getDimes(money - (getQuarters(money) * .25)) * .10) + (getQuarters(money) * .25)))) * .05))))}`);
}

const coinCounter = (coin) => {
  return (value) => {
    return Math.floor(value/coin);
  }
}

const getQuarters = coinCounter(.25);
const getDimes = coinCounter(.10);
const getNickels = coinCounter(.05);
const getPennies = coinCounter(.01);


// Symbol  Value
// I       1
// V       5
// X       10
// L       50
// C       100
// D       500
// M       1,000

function changeToRoman(num) {
  if(isNaN(num) || num === 0 || num > 3999)
  {
    return;
  } else if (num >= 1000){ //2920
    console.log(`M`); // M
    return changeToRoman(num - 1000); //1920
  } else if (num >= 900){ //920
    console.log(`CM`); // CM
    return changeToRoman(num - 900); //20
  }  else if (num >= 500){ //820
    console.log(`D`); // D
    return changeToRoman(num - 500); //320
  } else if (num >= 400){ //420
    console.log(`CD`); // CD
    return changeToRoman(num - 400); //20
  } else if (num >= 100){ //320
    console.log(`C`); // C
    return changeToRoman(num - 100); //220
  } else if (num >= 90){ //98
    console.log(`XC`); // XC
    return changeToRoman(num - 90); //8
  } else if (num >= 50){ //80
    console.log(`L`); // L
    return changeToRoman(num - 50); //30
  } else if (num >= 40){ //44
    console.log(`XL`); // XL
    return changeToRoman(num - 40); //4
  } else if (num >= 10){ //34
    console.log(`X`); // X
    return changeToRoman(num - 10); //24
  } else if (num >= 5){ //7
    console.log(`V`); // V
    return changeToRoman(num - 5); //2
  } else if (num >= 4){ //4
    console.log(`IV`); // IV
    return changeToRoman(num - 4); //0
  } else if (num >= 1){ //3
    console.log(`I`); // I
    return changeToRoman(num - 1); //2
  }
}

function convertNum(num) {
  // num.toString().substring(1) // "2930"
  if (num.toString().length === 4) {
    console.log("M".repeat(parseInt(num.toString()[0])));
    return convertNum(parseInt(num.toString().substring(1)));
  } else if (num.toString().length === 3) {
    console.log("C".repeat(parseInt(num.toString()[0])));
    return convertNum(parseInt(num.toString().substring(1)));
  } else if (num.toString().length === 2) {
    console.log("X".repeat(parseInt(num.toString()[0])));
    return convertNum(parseInt(num.toString().substring(1)));
  } else if (num.toString().length === 1) {
    console.log("I".repeat(parseInt(num.toString()[0])));
    return;
  } 
}

//MMCMXXX

const addPrefix = (prefix) => {
  return (name) => {
    return prefix + " " +name;
  }
}

const prefixSir = addPrefix("Sir");


//#2

const soundMaker = (sound) => {
  return (action) => {
    return `You hear a ${sound} from behind and you ${action}`
  }
}

const lionSound = soundMaker("roar");
const mouseSound = soundMaker("squeak");

lionSound("run");

// #3

const addPreSuffix = ((prefix) => {
  return (suffix) => {
    return (name) => {
      return `${prefix} ${name} ${suffix}`;  
    }
  }
});

// #4

const addaMult = (add) => {
  return (multiply) => {
    return (num) => {
      return (num + add) * multiply;
    }
  }
}

const addTwoMultiplyByThree = addaMult(2)(3);
const addFiveMultiplyByNine = addaMult(5)(9);

addTwoMultiplyByThree(5); //(5+2)*3 = 21

// recursive #1
//input "I am a cat" 
//output "cat a am I"

function recurseSentence(sentence) {
  if (typeof(sentence) != String) {
    return;
  } else if (sentence == "") {
    return "";
  } else {
    return recurseSentence(sentence.slice(0, sentence.split(" ").length - 1)) + sentence.split(" ").pop(); //["I", "am", "a", "cat"]
  }
  
  return recurseSentence;
}


const reverseWords = str => { //"hello world blah blah"
  let end = str.indexOf(" "); //" " str[5]
  if (end === -1) return str; // 
  return reverseWords(str.slice(end + 1)) + " " + str.slice(0, end); //str.slice(end + 1)) = "world blah blah"; str.slice(0, end) = "hello"
};

//Write a recursive function that concatenates "red green refactor" to a string X number of times, where X is the argument passed into the function. rgr(3) should return the following:

//"red green refactor red green refactor red green refactor"

const rgr = (num) => { //rgr(3)
  if(num === 0) return "";
  return rgr(num - 1) + " ".concat(`${num} red green refactor`);
}

rgr(3);

// using recursion to reverse a string
const reverseString = word => {
  if (!isNaN(word))
  {
    return;
  }
  if (word === "")
  {
    return "";
  }
  return reverseString(word.substring(1)) + word[0]; 
};

// if word === "Hello"
// reverseString("Hello") // returns + "H" 
//   reverseString("ello") // returns + "e"
//     reverseString("llo") // returns + "l"
//       reverseString("lo") // returns + "l"
//        reverseString("o") // returns + "o"