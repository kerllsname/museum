export default function initializeMap() {
  mapboxgl.accessToken =
    "pk.eyJ1Ijoia2VybGwiLCJhIjoiY2t1azlidnN6MTQzbzJub3phcDRzYzdudyJ9.1Zft24BGCDMUIKTKOGYrAw";

  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/light-v10",
    center: [2.3364, 48.86091],
    zoom: 15.75,
  });

  const marker = new mapboxgl.Marker({
    color: "#000000",
    draggable: false,
  })
    .setLngLat([2.3364, 48.86091])
    .addTo(map);

  const marker2 = new mapboxgl.Marker({
    color: "#999999",
    draggable: false,
  })
    .setLngLat([2.3397, 48.8607])
    .addTo(map);

  const marker3 = new mapboxgl.Marker({
    color: "#999999",
    draggable: false,
  })
    .setLngLat([2.333, 48.8619])
    .addTo(map);

  const marker4 = new mapboxgl.Marker({
    color: "#999999",
    draggable: false,
  })
    .setLngLat([2.3365, 48.8625])
    .addTo(map);

  const marker5 = new mapboxgl.Marker({
    color: "#999999",
    draggable: false,
  })
    .setLngLat([2.3333, 48.8602])
    .addTo(map);
}
