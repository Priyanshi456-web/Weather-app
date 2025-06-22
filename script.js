async function getWeather() {
  const location = document.getElementById('locationInput').value;
  if (!location) return alert("Please enter a location");

  const response = await fetch(`/weather?location=${location}`);
  const data = await response.json();

  if (data.error) {
    alert(data.error.message);
    return;
  }

  document.getElementById("cityName").textContent = `${data.location.name}, ${data.location.country}`;
  document.getElementById("temp").textContent = data.current.temp_c;
  document.getElementById("condition").textContent = data.current.condition.text;
  document.getElementById("result").classList.remove("hidden");
}
