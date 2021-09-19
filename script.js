
const apiKey = 'ae4aec18b1437eee073c672b9cca4571';
const endPoint = 'https://api.openweathermap.org/data/2.5/weather?';
const input = document.getElementById("input");
const cityName = document.getElementById("cityname");
const condition = document.getElementById("condition");
const temp = document.getElementById("temp");

const setWeater = (value) => {
    let query = endPoint + `q=${value}&units=metric&appid=${apiKey}`
    console.log(query)
    fetch(query)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data); 
        changeHTML(data);
    })
}

const changeHTML = (value) => {
    cityName.innerHTML = `${value.name}` + `, ${value.sys.country}`
    condition.innerHTML = `${value.weather[0].main}`
    temp.innerHTML = `${value.main.temp}`
}

const getValue = (e) => {
    if(e.keyCode == '13'){
        setWeater(input.value)
    }
}


document.addEventListener("keypress",getValue);