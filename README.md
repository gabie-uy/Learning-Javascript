# Learning Javascript
 
## Console Log

[01_SettingUp.js]()
[02_TheConsole.js]()

- ``console.log()`` method tells the web console to output a message
- The message we want to display should be inside parentheses ``( )`` and surrounded by quotes, ``" "`` or ``' '``
- To run a file, type ``node .\filename.js`` in Terminal

Example:

```ruby
    console.log("👋 Howdy!");
    console.log('👋 Howdy!');
```

**Note**: It's optional to include a ``;`` semicolon at the end of a line in JavaScript.

## Line by Line

[03_LineByLine.js]()

-  Output multiple messages by using multiple ``console.log()`` methods

```ruby
    console.log("🚌 Greyhound to New York");
    console.log("🕥 Departs at 9:30 am");
```

## Comments

[04_SecretRecipe.js]()

### Single Line Comments

- Uses ``//``

```ruby
    // console.log("Nada");
    console.log("Hi"); // I'm a comment, too!
```

### Multi-Line Comments

- Create a multi-line comment using ``/*`` to start the comment and ``*/`` to end it

```ruby
    /* This is commented out.
    console.log("Nada.")
    Yep! This is, too.
    console.log("Not displayed, either.")
    */
```

### Short Summary

[05_Receipt.js]()

- The ``console.log()`` method outputs messages to the Console window.
- JavaScript code runs one line at a time, from top to bottom.
- Single line comments are created using the ``//`` forward slashes.
- Multi-line comments are started by ``/*`` and closed with ``*/``.

## Variables

[06_LetAndConst.js]()
[06_Example1.js]()

- Variables are used for storing data values that can be used later in the program
- Each variable has a name and they hold a value
- ``let`` is used for variables where the value will change
- ``const`` is used for variables where the value will stay constant

```ruby
    keyword name = value;

    const userId = "1618033988";
    let userName = "Leeroy Jenkins";
```

- Variables with more than one word are written in camelCase (ex. userName)
- ``=`` equal sign means assignment

Example: ``let`` allows a change in value, or to print it out

```ruby
    let userName = "Leeroy Jenkins";
    userName = "Leeroy05";

    console.log(userName);  // Output: Leeroy05
```

Example: ``const`` we cannot change it's value, but we can still print it out

```ruby
    const userId = "16180339887";

    console.log(userId);    // Output: 16180339887
```

Example: An error for using ``const`` and changing the value

```ruby
    // SyntaxError: Missing initializer in const declaration
```
## Data Types

[07_DataTypes.js]()

### Numbers

```ruby
    let year = 2023;
    let age = 28;
    let mealCost = 12.99;
    const pi = 3.14;
    const daysOfWeek = 7;
```

### String

- Uses ``" "``  or ``' '``

```ruby
    let message = "good nite";
    let user = '@zuck';
    const company = "Codédex";
```

### Boolean

- Uses ``bool``, stores a value that can be only either ``true`` or ``false``

```ruby
    let hungry = true;
    let lateToMeeting = false;
    const earthIsFlat = false;
```

### Undefined

- Any variable that is declared but hasn't yet received a value is ``undefined``

```ruby
    let startDate = "01/23/2022";
    let endDate;

    console.log(startDate);  // 01/23/2022
    console.log(endDate);    // undefined
```

## Operators

[08_Temperature.js]()

- ``+`` Addition
- ``-`` Subtraction
- ``*`` Multiplication
- ``/`` Division
- ``%`` Modulo (returns the remainder)
- ``**`` Exponent (covered in the next exercise)

Example 1

```ruby
    let score = 0;        // Declare score and initialize it

    score = 4 + 3;        // score is now 7
    score = 4 - 3;        // score is now 1
    score = 4 * 3;        // score is now 12
    score = 4 / 3;        // score is now 1.3333
    score = 4 % 3;        // score is now 1

    console.log(score);   // Output: 1
```

Example 2

```ruby
    const pizza = 2.99;
    const coke = 0.99;

    let total = pizza + coke;

    let tip = total * 0.2;

    console.log(tip);     // Output: 0.796

    OR

    let tip = (pizza + coke) * 0.2;
```

## Exponents

[09_BMI.js]()

- Use the ``**`` notation for exponententiation

```ruby
    let score = 0;

    score = 2 ** 2;      // score is 4
    score = 2 ** 3;      // score is now 8
    score = 2 ** 4;      // score is now 16
    score = 2 ** 5;      // score is now 32

    console.log(score);  // Output: 32
```

**Note**: In the order of operations, exponents are calculated before multiplication/division and addition/subtraction.

### Short Summary

[10_Currency.js]()

- ``let`` and ``const`` keywords
- Data types: Numbers, Strings, Boolean, Null, and Undefined
- Arithmetic operators: ``+``, ``-``, ``*``, ``/``
- ``%`` modulo operator finds the remainder of division between two numbers
- ``**`` exponent operator raises one number to the power of another number

## Control Flow

[11_CoinFlip.js]()

### if Statement

[12_GoodMorning.js]()

- ``if`` keyword, which tests a condition for truth and executes the code if it is ``true``

```ruby
    if (condition) {
    // Do something
    }
```

*If the condition is true, then the statements within are executed. If the condition is false, then nothing happens and the program continues on after the if statement*

Example

```ruby
    if (grade > 60) {
    console.log("You passed!");
    }
```

### else Clause

[13_GoodAfternoon.js]()

- An ``else`` clause can be optionally added to the end of an ``if`` statement

```ruby
    if (condition) {
    // Do something
    } else {
    // Do something else 
    }
```

- If the condition is ``true``, execute the code inside the ``if``
- Else the condition is ``false``, execute the code inside the ``else``


Example

```ruby
    if (grade > 60) {
    console.log("You passed.");
    } else {
    console.log("You failed.");
    }
```

### Comparison Operators

- ``===`` strict equal
- ``!==`` strict not equal
- ``>`` greater than
- ``>=`` greater than or equal
- ``<`` less than
- ``=`` less than or equal

## else if

[14_pHLevels.js]()

- You can add an ``else if`` section between the if and else in your control flow
- This gives your program more conditions to evaluate, besides just two

```ruby
    if (conditionA) {
    // Do this
    } else if (conditionB) {
    // Do this, instead
    } else {
    // Do this if none of the above are true
    }
```

Example

```ruby
    let grade = 93;

    if (grade > 90) {
    console.log("A");
    } else if (grade > 80) {
    console.log("B");
    } else if (grade > 70) {
    console.log("C");
    } else if (grade > 60) {
    console.log("D");
    } else {
    console.log("F");
    }
```

### Math.random()

[15_Magic8Ball.js]()

- In JavaScript, the ``Math.random() `` method returns a random decimal number between 0 and 1

Usage:

```ruby
    console.log(Math.random());
    console.log(Math.random());
    console.log(Math.random());
```

Output is something like:

```ruby
    0.0236966238022709
    0.7397680104909345
    0.4103022944399179
```

Example

```ruby
    Math.floor(Math.random() * 10);
```

## Logical Operators

[16_AirQuality.js]()

- Logical operators, also known as Boolean operators, combine and evaluate two conditions. They are ``&&``, ``||``, and ``!`` operators
- The ``AND`` logical operator ``&&`` returns true if both conditions are true, and returns false otherwise.
- The ``OR`` logical operator ``||`` returns true if at least one of the conditions is true, and false otherwise.
- The ``NOT`` logical operator ``!`` returns true if the condition is false, and vice versa.

Example

```ruby
    if (hunger > 4 && anger > 1) {
    console.log("Hangry");
    }

    if (coffee > 0 || bubble_tea > 0) {
    console.log("😊");
    }

    if (!tired) {
    console.log("Let's code!");
    }
```

**Table Summary**

| A | B | A && B | A ll B |
|---|---|---|---|
| false | false | false | false |
| false | true | false | true |
| true | false | false | true |
| false | true | true | true |


### Short Summary

[17_Example.js]()
[17_RockPaperScissor.js]()

- Conditionals control the order in which the program's code executes
- ``if`` statement checks a condition for truth and executes the code if it is
- ``else`` executes the code if none of the above is True
- One or more ``else if``s can be added between if and else
- Comparison operators compare two values: ``===,`` ``!==,`` ``>``, ``>=``, ``<``, ``<=``
- Logical operators combine two or more conditions: ``&&``, ``||``, ``!``

## Loops

[18_DuckDuckGoose.js]()

- Loops are used to repeat a block of code based on a certain condition

*How loops work is similar to how cars may circle a roundabout and leave when a certain condition is met (like taking the desired exit)*

```ruby
    let randomNumber = Math.floor(Math.random() * 10);

    while (randomNumber != 7) {
        console.log("Duck 🦆");
        randomNumber = Math.floor(Math.random() * 10);
    }

console.log("Goose! 🦢");
```

### while Loops

[19_LuckyNumber.js]()

- The ``while`` loop uses a condition that is either true or false

```ruby
    while (condition) {
        // Code here
    }
```

- As long as the condition is ``true``, the code in the while loop will run. Otherwise, the loop ends when the condition becomes ``false``.

### Iterators in Loops

[20_NotTellLies.js]()

- To "iterate" means to run the code in a loop once
- When the ``i`` iterator variable has reached a value that sets the loop's condition to ``false``, we can successfully exit the loop

```ruby
    let i = initialValue;

    while (condition) {
        // Update the i iterator variable
    }
```

### for Loops

```ruby
    for (let i = initialValue; condition; updateIterator) {
        // Code here
    }
```

- We define an ``i`` iterator variable with an ``initialValue``
- Before the first or next iteration, we test the ``i`` variable in the condition statement. If we get true, we run the code. Otherwise, we exit the loop
- After each iteration, we ``updateIterator`` and change the value of ``i``

*As the value of ``i`` changes, it should eventually cause the condition statement to return ``false`` so we can exit the for loop.*

```ruby
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
```
- ``let i = 1``: initializes an iterator variable.
- ``i <= 10``: the conditional statement that is tested before each iteration.
- ``i++``: this increments the iterator variable by 1 after each iteration.

**Note**: The ++ operator increments a number value by 1. It's the same as writing i = i + 1.

Output would be:

        1
        2
        3
        4
        5
        6
        7
        8
        9
        10

Because we want ``i`` to change each time in the loop, we use the ``let`` keyword. We use a logical evaluation to determine if the current value of ``i`` is less than or equal to 10. After each iteration, we add 1 to the value of i (i.e., i++).

Example

```ruby
    for (let i = 1; i <= 3; i++) {
        console.log("Beetlejuice!")
    }

    // Output:
    // Beetlejuice!
    // Beetlejuice!
    // Beetlejuice!
```

## continue

[21_EvenTheOdds.js]()

- If a given condition is ``true``, the ``continue`` keyword ends the current iteration in a given ``for`` or ``while`` loop and we go to the next one.

```ruby
    for (let i = 0; i < 5; i++) {
        if (i == 1) {
            continue;
    }
        console.log(i);
    }
```
The code above will output the numbers 0 through 4, except for 1 because the continue skips this iteration.

Output would be

        0
        2
        3
        4

## break

- Ends loops early is ``break``
- If a given condition in a loop is ``true``, this keyword ends the loop altogether and the program resumes on the line immediately after the closing curly bracket of the loop

```ruby
    for (let i = 0; i < 5; i++) {
        if (i == 3) {
            break;
    }
        console.log(i);
    }
```

If and when ``i`` is equal to 3, the ``break`` keyword ends the loop, and our output looks like this:

        0
        1
        2

### Short Summary

[22_BasedNumbers.js]()

- You can use loops to perform the same operations over and over
- A ``while`` loop runs as long as a condition is ``true``
- A ``for`` loop runs a certain amount of times, based on an iterator variable
- The ``continue`` keyword ends the current iteration in a loop, given a ``true`` condition
- The ``break`` keyword exits the loop entirely, given a ``true`` condition

## Arrays

[23_FiveBoroughs.js]()

Arrays are variables that can hold multiple values in a comma-separated list:

```ruby
    array = ["Leonardo", "Michaelangelo", "Donatello", "Raphael"];
```

- The elements used for our array can either be a mix of data types, or of a single data type

```ruby
    let lotteryNumbers = [13, 36, 45, 57, 67, 14];       // btw call us if you have these numbers!
    const lettersAndNumbers = ["a", "b", "c", 1, 2, 3];
```

## Index

[24_GroceryTrip.js]()

- To access a single element in an array, we use bracket notation

```ruby
    let fruits = ["strawberries 🍓", "blueberries 🫐", "bananas 🍌"];

    console.log(fruits[0]);
```

- Array indices start at 0, not 1

To change a value of an existing element:

```ruby
    let pokemon = ["Bulbasaur", "Charmander", "Squirtle"];

    pokemon[2] = "Pikachu";

    console.log(pokemon);
    // Output: ["Bulbasaur", "Charmander", "Pikachu"]
```
To assign a new value to an index that doesn't exist yet

```ruby
    let numbers = [1, 2, 3];

    numbers[3] = 4;

    console.log(numbers);
    // Output: [1, 2, 3, 4]
```

**Note**: Be careful when creating new elements like this, for you may end up creating ``undefined`` elements between the old last element and the new last element

```ruby
    let numbers = [1, 2, 3];

    numbers [5] = 88;

    console.log(numbers);
    // Output: [1, 2, 3, undefined, undefined, 88]
```

## .length Property

- To know how many elements are in the array
- ``.length`` and produces an integer that tells us how long an array is (or how many elements it has)
- Used with a dot notion

```ruby
    arrayName.length;
```

```ruby
    const testScores = [78, 96, 100, 88, 85, 81, 79];
    const numberOfScores = testScores.length;

    console.log(numberOfScores); // Output: 7
```

### Looping Over Arrays

[25_TimesTables.js]()

- ``.length`` is commonly used with ``for`` loops

```ruby
    const musicNotes = ["Do", "Re", "Mi", "Fa", "So", "La", "Ti"];

    for (let i = 0; i < musicNotes.length; i++) {
        console.log(musicNotes[i]);
    }   
```

Using bracket notation, we can access the next element in the array with the ``i`` loop variable.

**Note**: We named the iterator variable i but we can technically give this any name as long as it is consistent throughout the loop.

```ruby
    const musicNotes = ["Do", "Re", "Mi", "Fa", "So", "La", "Ti"];
    let counter = 0;

    while (counter < musicNotes.length) {
        console.log(musicNotes[counter]);
        counter++;
}
```

## Adding Elements

[26_MusicPlaylist.js]()

- Methods are pieces of code that some variables can use to perform specific actions, like produce a new value

**Note**: The first method we encountered was console.log() from Chapter 1

```ruby
    const bandMembers = ["J.C.", "Joey", "Chris", "Lance", "Justin"];

    bandMembers[1] = "Nick";

    console.log(bandMembers);
    // Output: ["J.C.", "Nick", "Chris", "Lance", "Justin"]
```

```ruby
    myArray.unshift(newValue);

    myArray.push(newValue);
```

- The ``newValue`` is known as a parameter that we pass into the method. Some methods use parameters while others do not.

- You can also add multiple elements with the ``.push()`` and ``.unshift()`` methods by separating each new value with a comma (i.e., ``.push(newValue1, newValue2);``)

**Note**: For every new element added to an array with the ``.unshift()`` method, the indices of the other elements are shifted up by 1

## Removing Elements

- The ``.shift()`` method removes and returns the first element in an array, shifting the indices of the remaining elements back by 1

Conversely, the ``.pop()`` method removes and returns the last element of an array:

```ruby
    const greeks = ["Zeus", "Hera", "Poseidon", "Apollo", "Hermes", "Dionysus", "Hades"];

    const shiftedElement = greeks.shift();
    const poppedElement = greeks.pop();

    console.log(shiftedElement);
    console.log(poppedElement);
    console.log(greeks);

    /*
    Output:
    Zeus
    Hades
    ["Hera", "Poseidon", "Apollo", "Hermes", "Dionysus"]
    */
```

**Note**: By "returns", we mean that greeks.shift() produces a single value, the removed first element, that can be used elsewhere in the program (such as being printed or stored in a variable)

## Array Methods

### .index()

- Index ``[i]`` is used to obtain a value, while ``.indexOf()`` is used to find the index of a particular value.

```ruby    
    const myArray = [1, 2, 3];

    console.log(myArray[1]); // Output: 2

    vs. 

    const stories = [
        "Sorcerer's Stone",
        "Chamber of Secrets",
        "Prisoner of Azkaban",
        "Goblet of Fire",
        "Order of the Phoenix",
        "Half-blood Prince",
        "Deathly Hallows"
    ];

    console.log(stories.indexOf("Half-blood Prince")); // Output: 5
```

- If the array doesn't have the value we're looking for, -1 is returned instead.

**Note**: If there are multiple elements with the same value in an array, the .indexOf() returns the index of the first occurrence of that value.

### .includes()

- ``.includes()`` method checks if an element with the value parameter exists in the array, and returns a boolean ``true`` if it does or ``false`` otherwise

```ruby
    const myArray = [1, 2, 3];

    console.log(myArray.includes(3));
    console.log(myArray.includes(42));

    /*
    Output:
    true
    false 
    */
```

### Short Summary

- Creating, accessing, and updating an array with square brackets.
- Looping over arrays with the ``.length`` property
- Adding and removing array elements with various methods:
    - ``.push()``
    - ``.unshift()``
    - ``.shift()``
    - ``.pop()``
- Confirming if a given element or value exists in an array with the ``.includes()`` and ``.indexOf()`` methods.