
let obj1 = {name:"Person 1", age:5};
let obj2 = {age:5, name:"Person 1"};

if (obj1.name === obj2.name && obj1.age === obj2.age) {
    console.log("Objects are equal");
  } else {
    console.log("Objects are not equal");
  }