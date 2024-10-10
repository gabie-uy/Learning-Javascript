// 19 - Lucky Number

const luckyNumber = 4;
let guess = Math.floor(Math.random() * 10) + 1;

while (guess !== luckyNumber){
  console.log("Nope, it isn't ", guess)
  guess = Math.floor(Math.random() * 10) + 1;   // Call again to continue guessing
} 
  console.log("My lucky number is ", luckyNumber)