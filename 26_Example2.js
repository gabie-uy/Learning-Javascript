// 26 Music Playlist

// Example 2

const greeks = [
  "Zeus",
  "Hera",
  "Poseidon",
  "Apollo",
  "Hermes",
  "Dionysus",
  "Hades",
];

const shiftedElement = greeks.shift();
const poppedElement = greeks.pop();

console.log(shiftedElement);
console.log(poppedElement);
console.log(greeks);

/* Output:
Zeus;
Hades
[("Hera", "Poseidon", "Apollo", "Hermes", "Dionysus")];
*/