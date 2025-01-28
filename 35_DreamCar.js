// 35 Dream Car

const car = {
  model: "Mazda MX-5",
  year: 2019,
  color: "Dark Gray",
  used: false,
};

// console.log("I'm looking for a " + car.year + " " + car.model + " " + "that is used.");

if (car.used) {
  console.log("I'm not looking for a used car.");
} else {
  console.log(
    "I'm looking for a " + car.year + " " + car.model + " that is new."
  );
}
