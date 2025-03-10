 function showweatherDetails(event){
    const city = document.getElementById('city').value
    const apiKey = '6e860231b606aada72776ed06b8ebadd'
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo')
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                <p>Temperature: ${data.main.temp} &#8451;</p>
                                <p>Weather: ${data.weather[0].description}</p>`
        })  
        .catch(error => {
            console.error('Erreur lors de la récupération des données météo :', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Échec de la récupération des données météo. Veuillez réessayer.</p>`;
          });
    event.preventDeafault()
 }

 document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );
