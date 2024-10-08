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

[17_RockPaperScissor.js]()

- Conditionals control the order in which the program's code executes
- ``if`` statement checks a condition for truth and executes the code if it is
- ``else`` executes the code if none of the above is True
- One or more ``else if``s can be added between if and else
- Comparison operators compare two values: ``===,`` ``!==,`` ``>``, ``>=``, ``<``, ``<=``
- Logical operators combine two or more conditions: ``&&``, ``||``, ``!``