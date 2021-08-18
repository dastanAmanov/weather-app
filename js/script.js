let api = {
    key: "b7471e1943c50ff2ac76cec9bb4fdc81",
    baseUrl: "https://api.openweathermap.org/data/2.5/",
};
let searchBox = document.querySelector("#searchinput");

searchBox.addEventListener("keypress", setQuery);

function setQuery(e){
    if(e.keyCode == 13){
        getResults(searchBox.value)
    }
}
function getResults(query){
    fetch(`${api.baseUrl}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather =>{
        return weather.json()
    })
    .then(displayResults);
}

function displayResults(weather){
    
    console.log(weather)

    let title = document.querySelector("#title")
    let tempinfo = document.querySelector("#tempinfo")
    let maxtemp = document.querySelector("#maxtemp")
    let mintemp = document.querySelector("#mintemp")
    


    title.textContent = weather.name;
    tempinfo.textContent = Math.round(weather.main.temp);
    maxtemp.textContent = Math.round(weather.main.temp_max);
    mintemp.textContent = Math.round(weather.main.temp_min)
}