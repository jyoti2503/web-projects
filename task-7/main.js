//My current age
const myAge = 20;
//early years value
let earlyYears = 2;
earlyYears = 10.5*earlyYears;
//later years calculation is my current age minus two
let laterYears = myAge-2;
//multiplication of later year by 4
laterYears = 4*laterYears;
console.log(earlyYears);
console.log(laterYears);
let myAgeInDogYears = earlyYears+laterYears;
let myName = "Jyoti".toLowerCase();
console.log('My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.');