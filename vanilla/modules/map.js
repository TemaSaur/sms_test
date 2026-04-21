import { qsa, on, delegate } from "./utils.js";
import {
  markersData,
  markerColors,
  createGeoJSONSource,
} from "./mapMarkers.js";

let map = null;
let popup = null;
let cleanupHandlers = [];

export function initMap() {
  if (map) {
    console.warn("[map] already initialized");
    return () => {};
  }

  // Ensure maplibregl is globally available
  if (typeof maplibregl === "undefined") {
    console.error(
      '[map] MapLibre GL JS not loaded – add <script src="...maplibre-gl.js"> to HTML',
    );
    return () => {};
  }

  const container = document.getElementById("map");
  if (!container) {
    console.error("[map] #map element missing");
    return () => {};
  }

  // Fallback style in case OpenFreeMap is blocked
  // const styleUrl = "https://tiles.stadiamaps.com/styles/alidade_smooth.json";
  const styleUrl = "https://tiles.stadiamaps.com/styles/osm_bright.json";
  // "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json";
  // "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";
  // Alternative: 'https://demotiles.maplibre.org/style.json' (very basic but always works)

  map = new maplibregl.Map({
    container: "map",
    style: styleUrl,
    center: [60.597576, 56.837565],
    zoom: 11.5,
  });

  map.addControl(new maplibregl.NavigationControl(), "top-right");
  map.addControl(new maplibregl.ScaleControl(), "bottom-left");

  let loadHandler = () => {
    console.log("[map] style loaded – adding markers");
    addMarkersToMap();
    setupFilters();
  };
  map.on("load", loadHandler);
  cleanupHandlers.push(() => map.off("load", loadHandler));

  // Also handle style load errors
  map.on("error", (e) => {
    console.error("[map] error:", e);
  });

  return () => {
    cleanupHandlers.forEach((fn) => fn());
    cleanupHandlers = [];
    if (map) {
      map.remove();
      map = null;
    }
    if (popup) {
      popup.remove();
      popup = null;
    }
  };
}

function addMarkersToMap() {
  if (!map || !map.getStyle()) {
    console.warn("[map] addMarkersToMap called before style ready");
    return;
  }

  const geojsonData = createGeoJSONSource("all");
  console.log(
    "[map] adding source with",
    geojsonData.features.length,
    "markers",
  );

  map.addSource("markers", {
    type: "geojson",
    data: geojsonData,
  });

  map.addLayer({
    id: "markers-circle",
    type: "circle",
    source: "markers",
    paint: {
      "circle-radius": ["interpolate", ["linear"], ["zoom"], 10, 8, 15, 12],
      "circle-color": ["get", "color"],
      "circle-stroke-width": 2,
      "circle-stroke-color": "#ffffff",
      "circle-opacity": 0.9,
    },
  });

  map.addLayer({
    id: "markers-labels",
    type: "symbol",
    source: "markers",
    layout: {
      "text-field": ["get", "label"],
      "text-size": ["interpolate", ["linear"], ["zoom"], 10, 10, 15, 14],
      "text-offset": [0, -1.5],
      "text-anchor": "top",
      "text-allow-overlap": false,
      "text-ignore-placement": false,
    },
    paint: {
      "text-color": "#333333",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2,
    },
  });

  // Click popup
  map.on("click", "markers-circle", (e) => {
    const coordinates = e.features[0].geometry.coordinates.slice();
    const props = e.features[0].properties;
    const html = `
      <div style="font-family:sans-serif;">
        <strong style="color:${props.color};">${props.label}</strong>
        <p style="margin:5px 0 0;font-size:12px;">${props.description}</p>
      </div>
    `;
    if (popup) popup.remove();
    popup = new maplibregl.Popup()
      .setLngLat(coordinates)
      .setHTML(html)
      .addTo(map);
  });

  map.on(
    "mouseenter",
    "markers-circle",
    () => (map.getCanvas().style.cursor = "pointer"),
  );
  map.on(
    "mouseleave",
    "markers-circle",
    () => (map.getCanvas().style.cursor = ""),
  );

  const eventCleanup = () => {
    map.off("click", "markers-circle");
    map.off("mouseenter", "markers-circle");
    map.off("mouseleave", "markers-circle");
  };
  cleanupHandlers.push(eventCleanup);
}

function setupFilters() {
  const controls = document.querySelector(".controls");
  if (!controls) {
    console.warn("[map] .controls not found – filters will not work");
    return;
  }

  const removeDelegate = delegate(
    controls,
    "click",
    ".filter-btn",
    (event, btn) => {
      const filterType = btn.getAttribute("data-type") || "all";
      updateFilter(filterType);
      qsa(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      console.log(`[map] filter changed to ${filterType}`);
    },
  );
  cleanupHandlers.push(removeDelegate);

  const onKey = (e) => {
    const keyMap = { 1: "all", 2: "blue", 3: "red", 4: "green" };
    const type = keyMap[e.key];
    if (type) {
      const btn = document.querySelector(`.filter-btn[data-type="${type}"]`);
      if (btn) btn.click();
    }
  };
  document.addEventListener("keydown", onKey);
  cleanupHandlers.push(() => document.removeEventListener("keydown", onKey));
}

function updateFilter(filterType) {
  const source = map.getSource("markers");
  if (source) {
    source.setData(createGeoJSONSource(filterType));
  } else {
    console.warn("[map] source not ready yet");
  }
}
