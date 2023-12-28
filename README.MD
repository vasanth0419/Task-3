## DAY 3 TASK SUMMITION

### 2, Use the rest countries' API URL -> https://restcountries.com/v3.1/all and display all the country flags in the console.


### Step 1:
  ### CREATE A HTML FILE NAME: "index.html"
  ### CREATE A JS FILE NAME: "script.js"

### Step 2
  ### WRITE A script.js file and join in index.html file

### codes in the index.html file

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

### codes in the script.js file

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

### 3, Use the same rest countries and print all countries names, regions, sub-region and populations


### Step 1:
  ### CREATE A HTML FILE NAME: "index.html"
  ### CREATE A JS FILE NAME: "script.js"

### Step 2
  ### WRITE A script.js file and join in index.html file

### codes in the index.html file

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

### codes in the script.js file

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