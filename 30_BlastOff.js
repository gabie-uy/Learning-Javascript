// 30 Blast Off

function countdown() {
  const countdown = [10, 9 , 8 , 7, 6 ,5, 4, 3, 2, 1, 0];
  for (let i = 0; i <  countdown.length; i++) {
    console.log(countdown[i]);
  }
    console.log("Blast Off!");
}

countdown();

// OR in simpler ways (and probably the correct way)

function countdown() {
  for (let i = 10; i > 0; i--) {
    console.log(i);
  }

  return "Blast Off! 🚀";
}

console.log(countdown());