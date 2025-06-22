const apiKey = "12be3574203b47b8990123714252206";

async function getWeather() {
  const location = document.getElementById("locationInput").value;
  if (!location) {
    alert("Please enter a location!");
    return;
  }

  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Location not found");
    const data = await response.json();

    document.getElementById("cityName").textContent = data.location.name + ", " + data.location.country;
    document.getElementById("temperature").textContent = data.current.temp_c;
    document.getElementById("condition").textContent = data.current.condition.text;

    document.getElementById("weatherResult").classList.remove("hidden");
  } catch (error) {
    alert("Error fetching weather: " + error.message);
  }
}
