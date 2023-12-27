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
 