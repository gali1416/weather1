document.querySelector(".location-btn").addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(
    position => {
      const { latitude, longitude } = position.coords;
      getWeatherByCoords(latitude, longitude);
    },
    () => {
      alert("Location access denied.");
    }
  );
});

async function getWeatherByCoords(lat, lon) {
  const cityUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  const cityData = await fetch(cityUrl).then(res => res.json());
  getWeather(cityData.name);
}
