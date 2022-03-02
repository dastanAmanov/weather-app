let searchBox = document.querySelector("#searchinput");
let date = document.querySelector('.date')
console.log(date);
function setQuery(e){
    if(e.keyCode == 13){
        getResults(searchBox.value.trim())
    }
}
let api = {
    key: "b7471e1943c50ff2ac76cec9bb4fdc81",
    baseUrl: "https://api.openweathermap.org/data/2.5/",
};
function getResults(query){
    fetch(`${api.baseUrl}weather?q=${query}&units=metric&APPID=${api.key}&lang=ru`)
    .then(weather => weather.json())
    .then(displayResults);
}
searchBox.addEventListener("keypress", setQuery);

let dateBulder = (d) =>{
    let months = ['Yanvar', 'Febral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr'];
    let days = ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba', 'Yakshanba']
    let month = months[d.getMonth()];
    let day = days[d.getDay()];
    let dates = d.getDate();
    let year = d.getFullYear();
    date.textContent = `${day}, ${dates}-${month}, ${year}-yil`
}
dateBulder(new Date())

function displayResults(weather) {
    let title = document.querySelector("#title");
    let tempinfo = document.querySelector("#tempinfo");
    let maxtemp = document.querySelector("#maxtemp");
    let mintemp = document.querySelector("#mintemp");

    title.textContent = weather.name;
    tempinfo.textContent = Math.round(weather.main.temp);
    maxtemp.textContent = Math.round(weather.main.temp_max);
    mintemp.textContent = Math.round(weather.main.temp_min)
}


