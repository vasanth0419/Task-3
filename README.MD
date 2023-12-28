### _DAY 3 TASK SUMMITION_

#### 1, How to compare two JSON have the same properties without order?
####        a. let obj1 = { name: "Person 1", age:5 };
####        b. let obj2 = { age:5, name: "Person 1"};

  ####   _CREATE A JS FILE NAME_: `objectcompare.js`
  
  #### codes in the `objectcomapre.js` file
 ```
 let obj1 = {name:"Person 1", age:5};
let obj2 = {age:5, name:"Person 1"};
function areObjectsEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}
console.log(areObjectsEqual(obj1,obj2))
 ```

#### 2, Use the rest countries' API URL -> https://restcountries.com/v3.1/all and display all the country flags in the console.


#### Step 1:
   ####   _CREATE A HTML FILE NAME_: `index.html`
   ####   _CREATE A JS FILE NAME_: `script.js`

#### Step 2
  ####   _Write a `script.js` file and join in `index.html` file._

#### codes in the `index.html` file

  ```
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="./script.js"></script>
</body>
</html>
  ```

#### codes in the `script.js` file

  ```
  const URL = "https://restcountries.com/v3.1/all";
const xhr = new XMLHttpRequest();
xhr.open("GET", URL);
xhr.send();
xhr.onload = () => {
    const infovalue  = JSON.parse(xhr.response) 
   
    for (let key in infovalue){
    
        console.log(infovalue[key].flags.png)
    }
};
  ```

#### 3, Use the same rest countries and print all countries names, regions, sub-region and populations


#### Step 1:
  ####   _CREATE A HTML FILE NAME_: `index.html`
  ####   _CREATE A JS FILE NAME_: `script.js`

#### Step 2
  ####  _Write a `script.js` file and join in `index.html` file._

#### codes in the `index.html` file

  ```
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="./script.js"></script>
</body>
</html>
  ```

#### codes in the `script.js` file

  ```
const URL = "https://restcountries.com/v3.1/all";
const xhr = new XMLHttpRequest();
xhr.open("GET", URL);
xhr.send();
xhr.onload = () => {
    const infovalue  = JSON.parse(xhr.response) 
   
    for (let key in infovalue){
    
        console.log(infovalue[key].name.common +","+ infovalue[key].region +","+ infovalue[key].subregion +","+ infovalue[key].population)
    }
};
 
  ```