// Creating our initial map object:
// We set the longitude, latitude, and starting zoom level.

let myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5
});

// Adding a tile layer (the background map image) to our map:
// We use the addTo() method to add objects to our map.
L.tileLayer()