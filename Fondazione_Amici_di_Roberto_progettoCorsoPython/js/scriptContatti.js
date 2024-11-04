//mappa 
let map = L.map('map').setView([25.07, -77.33], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([25.07, -77.33]).addTo(map);

marker.bindPopup("<b>Noi siamo qui!</b><br>Montrose Avenue.").openPopup();