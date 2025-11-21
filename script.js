const API_KEY="94dafad45847739bc8888197ae872718"

const CITY = "Madrid";

const BASE_URL="https://api.openweathermap.org/data/2.5/weather";

function getWeatherWithFetch() {

    const url = `${BASE_URL}?q=${CITY}&appid=${API_KEY}&units=metric&lang=es`;

    fetch(url)

        .then


        .then


        .catch((e) =>{
           console.log("Error al obtener los datos con fetch: ", e);
        });


}

