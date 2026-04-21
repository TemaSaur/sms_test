// Marker data: 3 blue, 3 red, 3 green in Yekaterinburg
export const markersData = [
  // Blue
  {
    id: 1,
    type: "blue",
    lng: 60.597025,
    lat: 56.809206,
    label: "Детский сад №222",
    description: "Детский сад, ясли; ул. Серова, 14, Екатеринбург",
  },
  {
    id: 2,
    type: "blue",
    lat: 56.819942,
    lng: 60.584602,
    label: "Детский сад №444",
    description: "Детский сад, ясли; Посадская ул., 73А, Екатеринбург",
  },
  {
    id: 3,
    type: "blue",
    lat: 56.856122,
    lng: 60.657635,
    label: "Детский сад №352",
    description: "Детский сад, ясли; ул. Кулибина, 5, Екатеринбург",
  },
  // Red
  {
    id: 4,
    type: "red",
    lat: 56.859625,
    lng: 60.683591,
    label: "Шарташский лесопарк",
    description: "Лесопарк; Свердловская область, Екатеринбург, улица Отдыха",
  },
  {
    id: 5,
    type: "red",
    lat: 56.82046,
    lng: 60.595336,
    label: "Зеленая роща",
    description:
      "Городской парк; Свердловская область, Екатеринбург, улица Народной Воли",
  },
  {
    id: 6,
    type: "red",
    lat: 56.815497,
    lng: 60.639734,
    label: "ЦПКиО",
    description: "Городской парк; ул. Мичурина, 230, Екатеринбург",
  },
  // Green
  {
    id: 7,
    type: "green",
    lat: 56.827738,
    lng: 60.588535,
    label: "УГМК-Здоровье",
    description: "Детская поликлиника; ул. Шейнкмана, 73, Екатеринбург",
  },
  {
    id: 8,
    type: "green",
    lat: 56.836255,
    lng: 60.625544,
    label: "УГМК-Здоровье",
    description: "Детская поликлиника; ул. Малышева, 102Б, Екатеринбург",
  },
  {
    id: 9,
    type: "green",
    lat: 56.84699,
    lng: 60.622845,
    label: "Здоровье 365",
    description: "Медцентр, клиника; ул. Бажова, 68, Екатеринбург",
  },
];

export const markerColors = {
  blue: "#3b82f6",
  red: "#ef4444",
  green: "#10b981",
};

export function createGeoJSONSource(filterType = "all") {
  let filtered =
    filterType === "all"
      ? markersData
      : markersData.filter((m) => m.type === filterType);
  return {
    type: "FeatureCollection",
    features: filtered.map((marker) => ({
      type: "Feature",
      geometry: { type: "Point", coordinates: [marker.lng, marker.lat] },
      properties: {
        id: marker.id,
        type: marker.type,
        label: marker.label,
        description: marker.description,
        color: markerColors[marker.type],
      },
    })),
  };
}
