// 37 Animal Farm

/*
const phone = {
  model: "iPhone 11 Pro Max",
  brand: "Apple",
  version: 11.6,
  owner: "John Appleseed",
  ringtone: function () {
    console.log("Ring, ring! Ring, ring! 📲")
  }
}

phone.ringtone();
// Output: Ring, ring! Ring, ring! 📲
*/

const pig = {
  name: "Koda",
  type: "pig",
  age: 10,
  makeSound() {
    console.log(pig.name + " is a " + pig.age + " year old " + pig.type + " that goes oink!");
  },
};

const sheep = {
  name: "Shaun",
  type: "sheep",
  age: 10,
  makeSound() {
    console.log(sheep.name + " is a " + sheep.age + " year old " + sheep.type + " that goes baaaah!");
  },
};

const dog = {
  name: "Benny",
  type: "dog",
  age: 10,
  makeSound() {
    console.log(dog.name + " is a " + dog.age + " year old " + dog.type + " that goes woof!");
  },
};

pig.makeSound(); // Output: Koda is a 10 year old pig that goes oink!
sheep.makeSound(); // Output: Shaun is a 10 year old sheep that goes baaaah!
dog.makeSound(); // Output: Benny is a 10 year old dog that goes woof!