const [lng, lat] = geometry.coordinates;
const map = L.map("map").setView([lat, lng], 10);

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'


const tileLayer = L.tileLayer(tileUrl, {attribution});
tileLayer.addTo(map);

L.marker([lat, lng])
  .addTo(map)
  .bindPopup("Listing location");


