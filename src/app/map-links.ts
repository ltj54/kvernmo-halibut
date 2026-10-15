// Map views use an explicit zoom so Google Maps shows the surrounding coast.
// Place coordinates checked against Kartverket's place-name API, 2026-10-15.
function mapView(latitude: number, longitude: number, zoom: number) {
  const parameters = new URLSearchParams({
    api: "1",
    map_action: "map",
    center: `${latitude},${longitude}`,
    zoom: String(zoom),
    basemap: "terrain",
  });
  return `https://www.google.com/maps/@?${parameters}`;
}

export const mapLinks = {
  altafjord: mapView(70.15, 23.15, 9),
  langfjord: mapView(70.08322, 22.68861, 11),
  stjernsund: mapView(70.23793, 22.71921, 11),
  rognsund: mapView(70.31601, 22.99263, 11),
  vargsund: mapView(70.40446, 23.56352, 11),
};
