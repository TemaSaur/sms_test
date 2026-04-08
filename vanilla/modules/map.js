import {
  MAP_DEFAULT_VIEW,
  MAP_POINTS,
  MAP_TYPES,
  MAP_TYPE_COLORS,
  MAP_TYPE_EMOJIS,
} from "./data.js";
import { qs } from "./utils.js";

/**
 * Fully rebuilt Leaflet map module:
 * - Replaces snapshot/static map DOM with a clean live map root
 * - Builds filter chips dynamically
 * - Creates/removes markers by active filter
 * - Syncs marker click <-> right-side list selection
 */
export function initMap() {
  const section = qs("#map");
  if (!section) return () => {};

  const state = {
    filter: "all",
    selectedId: null,
  };

  const markerRegistry = new Map(); // id -> { marker, data }
  let map = null;

  // Root elements in existing section.
  const mapAndListWrap = section.querySelector(".flex.flex-col.gap-6.lg\\:flex-row");
  if (!mapAndListWrap) return () => {};

  const mapPane = mapAndListWrap.querySelector(".flex-1.relative");
  const listPane = mapAndListWrap.querySelector(".flex.flex-col.rounded-2xl");
  if (!mapPane || !listPane) return () => {};

  // Rebuild map container from scratch to avoid stale snapshot Leaflet DOM.
  mapPane.innerHTML = "";
  const mapEl = document.createElement("div");
  mapEl.className = "w-full rounded-2xl overflow-hidden";
  mapEl.style.height = "500px";
  mapEl.style.border = "1.5px solid rgba(184,230,213,0.5)";
  mapPane.appendChild(mapEl);

  // Build / rebuild filters row.
  const filterRow = findMapFilterRow(section);
  if (filterRow) {
    renderFilterButtons(filterRow, state.filter, onFilterClick);
  }

  // Right-side list internals.
  const listHeader = listPane.querySelector(".p-4 p");
  const listBody = listPane.querySelector(".flex-1.overflow-y-auto");
  if (!listBody) return () => {};

  // Init Leaflet map.
  if (!window.L) {
    showMapUnavailable(mapEl, "Leaflet не загружен");
    return () => {};
  }

  map = window.L.map(mapEl, {
    center: MAP_DEFAULT_VIEW.center,
    zoom: MAP_DEFAULT_VIEW.zoom,
    zoomControl: true,
  });

  window.L
    .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    })
    .addTo(map);

  // Create all markers once.
  MAP_POINTS.forEach((point) => {
    const marker = buildMarker(point);
    marker.on("click", () => {
      state.selectedId = point.id;
      renderList();
      const target = markerRegistry.get(point.id);
      if (target?.marker) target.marker.openPopup();
    });

    marker.bindPopup(`
      <div style="font-family:'Inter',sans-serif;padding:4px">
        <p style="font-weight:700;font-size:14px;color:#1A3A2E;margin:0 0 4px">${escapeHtml(
          point.name,
        )}</p>
        <p style="font-size:12px;color:#6B7A74;margin:0 0 8px">${escapeHtml(
          point.address,
        )}</p>
        <a href="#" style="font-size:12px;color:#3D8B6E;font-weight:600;text-decoration:none">Проложить маршрут →</a>
      </div>
    `);

    markerRegistry.set(point.id, { marker, data: point });
  });

  // First render.
  syncMarkersToFilter();
  renderList();

  function onFilterClick(nextFilter) {
    if (state.filter === nextFilter) return;
    state.filter = nextFilter;

    // Clear selected if hidden by filter.
    if (state.selectedId != null) {
      const selected = MAP_POINTS.find((p) => p.id === state.selectedId);
      if (selected && !isVisibleByFilter(selected, state.filter)) {
        state.selectedId = null;
      }
    }

    if (filterRow) {
      renderFilterButtons(filterRow, state.filter, onFilterClick);
    }
    syncMarkersToFilter();
    renderList();
  }

  function syncMarkersToFilter() {
    markerRegistry.forEach(({ marker, data }) => {
      if (isVisibleByFilter(data, state.filter)) {
        marker.addTo(map);
      } else {
        marker.remove();
      }
    });
  }

  function renderList() {
    const items = MAP_POINTS.filter((p) => isVisibleByFilter(p, state.filter));
    if (listHeader) {
      listHeader.textContent = `Найдено: ${items.length} объектов`;
    }

    listBody.innerHTML = "";
    items.forEach((point) => {
      const selected = state.selectedId === point.id;
      const row = document.createElement("button");
      row.type = "button";
      row.className = "text-left cursor-pointer w-full duration-150 p-4 transition-colors";
      row.style.borderBottom = "1px solid rgba(184,230,213,0.3)";
      row.style.background = selected ? "#F0FAF7" : "transparent";

      row.innerHTML = `
        <div class="flex gap-3 items-start">
          <div class="flex items-center justify-center flex-shrink-0 rounded-full h-8 w-8 text-sm"
               style="background: ${MAP_TYPE_COLORS[point.type]}20;">
            ${MAP_TYPE_EMOJIS[point.type]}
          </div>
          <div>
            <p class="text-sm mb-1 font-semibold leading-tight" style="color:#1A3A2E">
              ${escapeHtml(point.name)}
            </p>
            <p class="text-xs" style="color:#6B7A74">${escapeHtml(point.address)}</p>
          </div>
        </div>
      `;

      row.addEventListener("click", () => {
        state.selectedId = point.id;
        renderList();

        const entry = markerRegistry.get(point.id);
        if (entry?.marker) {
          entry.marker.addTo(map);
          map.setView([point.lat, point.lng], Math.max(map.getZoom(), 14), {
            animate: true,
          });
          entry.marker.openPopup();
        }
      });

      listBody.appendChild(row);
    });
  }

  // Fix map tiles sizing if section becomes visible after layout changes.
  const resizeTimer = setTimeout(() => {
    if (map) map.invalidateSize();
  }, 100);

  return () => {
    clearTimeout(resizeTimer);
    markerRegistry.forEach(({ marker }) => {
      marker.remove();
    });
    markerRegistry.clear();
    if (map) {
      map.remove();
      map = null;
    }
  };
}

function buildMarker(point) {
  const color = MAP_TYPE_COLORS[point.type];
  const emoji = MAP_TYPE_EMOJIS[point.type];

  const icon = window.L.divIcon({
    className: "",
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    html: `
      <div style="
        background:${color};
        width:36px;height:36px;
        border-radius:50% 50% 50% 0;
        transform:rotate(-45deg);
        display:flex;align-items:center;justify-content:center;
        border:2px solid #fff;
        box-shadow:0 2px 8px rgba(0,0,0,0.2);
      ">
        <span style="transform:rotate(45deg);font-size:16px">${emoji}</span>
      </div>
    `,
  });

  return window.L.marker([point.lat, point.lng], { icon });
}

function isVisibleByFilter(point, filter) {
  return filter === "all" || point.type === filter;
}

function findMapFilterRow(section) {
  // Existing map filter row is the second direct child in section header's right side.
  // We locate a container with several buttons containing map filter labels/icons.
  const candidateGroups = Array.from(section.querySelectorAll("div"))
    .filter((el) => {
      const buttons = el.querySelectorAll("button");
      return buttons.length >= 3 && /Клиники|Парки|Детские сады/.test(el.textContent || "");
    });

  return candidateGroups[0] || null;
}

function renderFilterButtons(container, activeValue, onClick) {
  container.innerHTML = "";
  MAP_TYPES.forEach((type) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className =
      "items-center gap-2 text-sm duration-200 whitespace-nowrap cursor-pointer transition-all inline-flex rounded-full font-medium px-4 py-2";
    const active = activeValue === type.value;

    btn.style.background = active ? type.color : "#fff";
    btn.style.color = active ? "#fff" : "#4A6B5E";
    btn.style.border = `1.5px solid ${active ? type.color : "#B8E6D5"}`;

    const count =
      type.value === "all"
        ? MAP_POINTS.length
        : MAP_POINTS.filter((p) => p.type === type.value).length;

    btn.innerHTML = `
      <i class="${type.icon}"></i>
      ${type.label}
      <span class="text-xs rounded-full py-0.5 px-1.5"
            style="background:${active ? "rgba(255,255,255,0.25)" : "rgba(184,230,213,0.4)"};color:${active ? "#fff" : "#3D8B6E"}">
        ${count}
      </span>
    `;

    btn.addEventListener("click", () => onClick(type.value));
    container.appendChild(btn);
  });
}

function showMapUnavailable(root, message) {
  root.innerHTML = `
    <div class="h-full w-full flex items-center justify-center rounded-2xl" style="background:#F0FAF7">
      <div class="text-center">
        <div class="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center"
             style="background:rgba(184,230,213,0.5);color:#3D8B6E">
          <i class="ri-map-pin-line text-xl"></i>
        </div>
        <p class="text-sm" style="color:#6B7A74">${escapeHtml(message)}</p>
      </div>
    </div>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
