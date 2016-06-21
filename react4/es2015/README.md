# From Scary to Friendly

<img src="http://i.dailymail.co.uk/i/pix/2015/02/15/25B321FB00000578-2954536-Healing_a_broken_heart_Mickey_picked_up_the_two_pups_after_his_b-a-46_1424023876938.jpg" width=250px>

## ES2015 Additions to JavaScript

| Lesson Objectives - SWBAT                                |
| :------------------------------------------------------: |
| Use string interpolation                                 |
| Use `let` and `const` for block scoping                  |
| Use fat arrow functions (`() =>`) as callbacks           |
| Manipulate context using the fat arrow functions         |
| Use Rest and Spread Parameters                           |
| Set default parameter arguments                          |
| Use `import` and `export` to pass JS modules             |
| Use destructuring to access nested modules               |
| Create es2015 classes with custom methods                |
| Use `extends` to inherit from other constructors/classes |
| Create static methods                                    |

#### Road Map

1. What is ES2015?
2. String Interpolation
3. Block Scope
4. Arrow Functions
5. Rest and Spread Parameters
6. Default Arguments
7. Import and Export
8. Destructuring
9. ES2015 Classes
10. Outro


## What is ES2015?

#### Is it scary!?

Not at all! 

#### What is this .babelrc?

For each, you must uncomment the `require('./exercises/filename.js');`
and work on the corresponding file.



## String Interpolation

Instead of adding variables together with strings, you can simply use embedded
Javascript!

You can access other variables within your strings, even methods on those
strings.

Ex:

``` javascript
var thing = "variable";

console.log(`Ceci n'est pas une ${thing.toUpperCase()}!`);
```



## Block Scope

`let` and `const` declare a block scoped variable. `const` also makes
the variable a constant. JS will actually throw an error if you try and
overwrite a `const` variable.

``` javascript
function varFoo() {
  var neilYoung = "Crazy Horse";
  if (true) {
    var neilYoung = "Crosby, Stills, Nash, and Young";  // same Neil!
    console.log(neilYoung);  // "Crosby, Stills, Nash, and Young"
  }
  console.log(neilYoung);  // "Crosby, Stills, Nash, and Young"
}

function letBar() {
  let zappa = "Hot Rats";
  if (true) {
    let zappa = "Havin' a Bad Day";  // by Dweezil - different Zappa!
    console.log(zappa);  // "Havin' a Bad Day"
  }
  console.log(zappa);  // "Hot Rats" - back to Frank!
}
```



## Arrow Functions

Arrow functions are a new and relatively cleaner way to write functions. You can
use them anonymously or named, and if they have only argument, you don't need
parenthesis!

 Also, if used within another function, arrow functions will bind the context to
 the enclosing function!! No more need to use `var self = this;`!!!!

``` javascript
() => "No need to use the return keyword on one line functions!";

var beetlejuice = name => {
  return name.repeat(3);    	// String.prototype.repeat() HAS ALSO BEEN ADDED!
}								              // THAT'S A BIG MEATBALL!
```



## Spread Operators & Rest Parameters

Spread Operator: The **spread operator** allows an expression to be expanded in
places where multiple arguments (for function calls) or multiple elements (for
array literals) are expected.

Rest Parameter: The **rest parameter** syntax allows us to represent an
indefinite number of arguments as an array.

What this means: No need to mess with that awful `arguments` object ever. again.

Also, it means we no longer need `Function.prototype.apply()`!

``` javascript
function otherMotherVictims(...ghostChildren) {
  console.log(ghostChildren.length);
}

otherMotherVictims();  									// 0
otherMotherVictims("Margaret"); 						// 1
otherMotherVictims("Margaret", "Freddie", "Josephine"); // 3
```



## Default Arguments

In ES2015, we can now give default arguments within our functions. The latter
arguments can even take from previous arguments!

```
var misconceptions = function(shark = "JAWS", bodyPart = shark.substring(0,3)) {
  var truth = "Not all sharks are " + shark;
  var lies = "Not all Travoltas have an enormous " + bodyPart;
}
```



## Import & Export

You can now import and export modules as well!

``` javascript
// --violent_j.js--
function getJSON(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    callback(this.responseText)
  };
  xhr.open("GET", url, true);
  xhr.send();
}

export function getUsefulContents(url, callback) {
  getJSON(url, data => callback(JSON.parse(data)));
}


// --shaggy_too_dope.js--
import { getUsefulContents } from "file.js";
getUsefulContents("http://www.example.com", data => {
  doSomethingUseful(data);
});
```

or:

``` javascript
// --violent_j.js--
function getJSON(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    callback(this.responseText)
  };
  xhr.open("GET", url, true);
  xhr.send();
}

function getUsefulContents(url, callback) {
  getJSON(url, data => callback(JSON.parse(data)));
}

export default {
  getUsefulContents: getUsefulContents,
  getJSON:           getJSON
}


// --shaggy_too_dope.js--
import Miracles from "file.js";
Miracles.getUsefulContents("http://www.example.com", data => {
  Miracles.doSomethingUseful(data);
});
```



## References

[ES2015 in 350 Bullet Points](https://github.com/bevacqua/es6)

[`tower-of-babel`](https://github.com/yosuke-furukawa/tower-of-babel)

[`count-to-6`](https://github.com/domenic/count-to-6)