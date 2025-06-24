document.getElementById('locationForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const location = document.getElementById('locationInput').value;

    const res = await fetch(`/get_aqi?location=${encodeURIComponent(location)}`);
    const data = await res.json();

    const infoDiv = document.getElementById('aqiInfo');
    infoDiv.innerHTML = `
        <h3>Current AQI for ${data.current_aqi.location}</h3>
        <p><strong>AQI:</strong> ${data.current_aqi.value}</p>
        <p><strong>Category:</strong> ${data.current_aqi.category}</p>
        <p><strong>Main Pollutant:</strong> ${data.current_aqi.main_pollutant}</p>
    `;

    const ctx = document.getElementById('aqiChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.history.dates,
            datasets: [{
                label: 'Historical AQI',
                data: data.history.aqi,
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.2
            }]
        },
        options: {
            responsive: true
        }
    });
});
