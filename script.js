var map = L.map('map').setView([0.466, 35.966], 8);

L.tileLayer(
'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
{
    attribution: '&copy; OpenStreetMap contributors'
}
).addTo(map);

/* Marigat */
L.marker([0.166, 35.970])
.addTo(map)
.bindPopup('💧 Water shortage reported in Marigat');

/* Kabarnet */
L.marker([0.491, 35.743])
.addTo(map)
.bindPopup('🌧️ Rainfall update from Kabarnet');

/* Tiaty */
L.marker([0.950, 35.550])
.addTo(map)
.bindPopup('⚔️ Conflict reported in Tiaty');

/* Mogotio */
L.marker([0.220, 35.860])
.addTo(map)
.bindPopup('☀️ Drought alert from Mogotio');