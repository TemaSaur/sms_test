import { qs } from "./utils.js"; // works, querySelector

// Map data with clinics, parks, and kindergartens
const MAP_POINTS = [
  {
    id: 1,
    name: "Детская поликлиника №1",
    address: "ул. Садовая, 12",
    lat: 55.7558,
    lng: 37.6173,
    type: "clinic",
    icon: "🏥",
    color: "#e07070",
  },
  {
    id: 2,
    name: "Женская консультация №3",
    address: "пр. Мира, 45",
    lat: 55.7661,
    lng: 37.6254,
    type: "clinic",
    icon: "🏥",
    color: "#e07070",
  },
  {
    id: 3,
    name: "Перинатальный центр",
    address: "ул. Ленина, 78",
    lat: 55.7494,
    lng: 37.6205,
    type: "clinic",
    icon: "🏥",
    color: "#e07070",
  },
  {
    id: 4,
    name: "Парк Семейного отдыха",
    address: "ул. Парковая, 3",
    lat: 55.7589,
    lng: 37.6088,
    type: "park",
    icon: "🌳",
    color: "#5a9e6f",
  },
  {
    id: 5,
    name: "Детский парк «Радуга»",
    address: "ул. Зелёная, 19",
    lat: 55.7632,
    lng: 37.6156,
    type: "park",
    icon: "🌳",
    color: "#5a9e6f",
  },
  {
    id: 6,
    name: "Сквер «Солнечный»",
    address: "пер. Тихий, 7",
    lat: 55.7512,
    lng: 37.6223,
    type: "park",
    icon: "🌳",
    color: "#5a9e6f",
  },
  {
    id: 7,
    name: "Детский сад №42 «Ромашка»",
    address: "ул. Цветочная, 5",
    lat: 55.7688,
    lng: 37.6321,
    type: "kindergarten",
    icon: "🏫",
    color: "#e09a40",
  },
  {
    id: 8,
    name: "Детский сад №17 «Солнышко»",
    address: "ул. Берёзовая, 22",
    lat: 55.7421,
    lng: 37.6089,
    type: "kindergarten",
    icon: "🏫",
    color: "#e09a40",
  },
  {
    id: 9,
    name: "Частный сад «Умка»",
    address: "ул. Дружбы, 11",
    lat: 55.7543,
    lng: 37.6345,
    type: "kindergarten",
    icon: "🏫",
    color: "#e09a40",
  },
  {
    id: 10,
    name: "Стоматология для детей",
    address: "ул. Весенняя, 33",
    lat: 55.7712,
    lng: 37.6187,
    type: "clinic",
    icon: "🏥",
    color: "#e07070",
  },
];

const MAP_TYPES = [
  { value: "all", label: "Все", icon: "ri-map-pin-line" },
  { value: "clinic", label: "Клиники", icon: "ri-hospital-line" },
  { value: "park", label: "Парки", icon: "ri-plant-line" },
  { value: "kindergarten", label: "Детские сады", icon: "ri-building-line" },
];

const MAP_DEFAULT_VIEW = {
  center: [55.7558, 37.6173],
  zoom: 12,
};

// export function initYandexMap() {
//   const section = qs("#map");
//   if (!section) return () => {};
//
//   // Wait for Yandex Maps API to load
//   const initMap = () => {
//     if (!window.ymaps) {
//       console.error("Yandex Maps API not loaded");
//       return;
//     }
//
//     ymaps.ready(() => {
//       const mapContainer = qs("#map");
//       if (!mapContainer) return;
//
//       // Initialize map
//       const map = new ymaps.Map(mapContainer, {
//         center: MAP_DEFAULT_VIEW.center,
//         zoom: MAP_DEFAULT_VIEW.zoom,
//         controls: ["zoomControl", "searchControl"],
//       });
//
//       const state = {
//         filter: "all",
//         selectedId: null,
//         markers: new Map(),
//       };
//
//       // Create markers
//       MAP_POINTS.forEach((point) => {
//         const placemark = new ymaps.Placemark(
//           [point.lat, point.lng],
//           {
//             balloonContentHeader: point.name,
//             balloonContentBody: point.address,
//             hintContent: point.name,
//           },
//           {
//             preset: "islands#redDotIcon",
//             iconColor: point.color,
//             iconLayout: "default#image",
//             iconImageHref: `data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><circle cx="18" cy="18" r="16" fill="${encodeURIComponent(point.color)}" stroke="white" stroke-width="2"/><text x="18" y="24" text-anchor="middle" font-size="16">${point.icon}</text></svg>`,
//             iconImageSize: [36, 36],
//             iconImageOffset: [-18, -36],
//           },
//         );
//
//         placemark.events.add("click", () => {
//           state.selectedId = point.id;
//           renderList();
//           placemark.balloon.open();
//         });
//
//         state.markers.set(point.id, { placemark, data: point });
//         map.geoObjects.add(placemark);
//       });
//
//       // Filter functions
//       function filterMarkers(filter) {
//         state.filter = filter;
//         state.markers.forEach(({ placemark, data }) => {
//           const visible = filter === "all" || data.type === filter;
//           placemark.options.set("visible", visible);
//         });
//         renderList();
//       }
//
//       // Render list function
//       function renderList() {
//         const listBody = section.querySelector(".flex-1.overflow-y-auto");
//         if (!listBody) return;
//
//         const filteredPoints = MAP_POINTS.filter(
//           (point) => state.filter === "all" || point.type === state.filter,
//         );
//
//         const countEl = section.querySelector(".p-4 p.font-semibold");
//         if (countEl) {
//           countEl.textContent = `Найдено: ${filteredPoints.length} объектов`;
//         }
//
//         listBody.innerHTML = filteredPoints
//           .map(
//             (point) => `
//           <button
//             class="text-left cursor-pointer w-full duration-150 p-4 transition-colors"
//             style="border-bottom: 1px solid #b8e6d5; background: ${state.selectedId === point.id ? "#f0faf7" : "transparent"}"
//             data-point-id="${point.id}"
//           >
//             <div class="flex gap-3 items-start">
//               <div
//                 class="flex items-center justify-center flex-shrink-0 rounded-full h-8 w-8 text-sm"
//                 style="background: ${point.color}"
//               >
//                 ${point.icon}
//               </div>
//               <div>
//                 <p class="text-sm mb-1 font-semibold leading-tight" style="color: #1a3a2e">
//                   ${point.name}
//                 </p>
//                 <p class="text-xs" style="color: #6b7a74">${point.address}</p>
//               </div>
//             </div>
//           </button>
//         `,
//           )
//           .join("");
//
//         // Add click handlers to list items
//         listBody.querySelectorAll("button[data-point-id]").forEach((btn) => {
//           btn.addEventListener("click", () => {
//             const pointId = parseInt(btn.dataset.pointId);
//             const markerData = state.markers.get(pointId);
//             if (markerData) {
//               state.selectedId = pointId;
//               renderList();
//               markerData.placemark.balloon.open();
//             }
//           });
//         });
//       }
//
//       // Setup filter buttons
//       const filterRow = section.querySelector(
//         ".flex.justify-center.gap-2.flex-wrap.mb-10",
//       );
//       if (filterRow) {
//         filterRow.innerHTML = MAP_TYPES.map(
//           (type) => `
//           <button
//             class="items-center gap-2 text-sm duration-200 whitespace-nowrap font-medium inline-flex transition-all rounded-xl px-4 py-2"
//             style="background: ${state.filter === type.value ? "#3d8b6e" : "#e8f7f2"}; color: ${state.filter === type.value ? "#fff" : "#3d8b6e"}"
//             data-filter="${type.value}"
//           >
//             <i class="${type.icon}"></i>
//             ${type.label}
//             <span class="text-xs rounded-full py-0.5 px-1.5"
//                   style="background: ${state.filter === type.value ? "rgba(255,255,255,0.25)" : "rgba(184,230,213,0.4)"}; color: ${state.filter === type.value ? "#fff" : "#3d8b6e"}">
//               ${MAP_POINTS.filter((p) => type.value === "all" || p.type === type.value).length}
//             </span>
//           </button>
//         `,
//         ).join("");
//
//         filterRow.querySelectorAll("button[data-filter]").forEach((btn) => {
//           btn.addEventListener("click", () => {
//             filterMarkers(btn.dataset.filter);
//             // Update button styles
//             filterRow.querySelectorAll("button[data-filter]").forEach((b) => {
//               const isActive = b.dataset.filter === btn.dataset.filter;
//               b.style.background = isActive ? "#3d8b6e" : "#e8f7f2";
//               b.style.color = isActive ? "#fff" : "#3d8b6e";
//               const span = b.querySelector("span");
//               if (span) {
//                 span.style.background = isActive
//                   ? "rgba(255,255,255,0.25)"
//                   : "rgba(184,230,213,0.4)";
//                 span.style.color = isActive ? "#fff" : "#3d8b6e";
//               }
//             });
//           });
//         });
//       }
//
//       // Initial render
//       renderList();
//     });
//   };
//
//   // Check if Yandex Maps is already loaded
//   if (window.ymaps) {
//     initMap();
//   } else {
//     // Wait for Yandex Maps to load
//     window.addEventListener("load", initMap);
//   }
//
//   return () => {
//     // Cleanup function
//   };
// }

export async function initYandexMap() {
  const mapContainer = qs("#map");
  if (!mapContainer) return () => {};

  try {
    // Ждём полной загрузки API с таймаутом
    const ymaps3 = await new Promise((resolve, reject) => {
      const startTime = Date.now();
      const timeout = 10000; // 10 секунд

      function check() {
        if (window.ymaps3 && typeof window.ymaps3.import === "function") {
          resolve(window.ymaps3);
          return;
        }

        if (Date.now() - startTime > timeout) {
          reject(
            new Error("Yandex Maps API не загрузился за отведённое время"),
          );
          return;
        }

        setTimeout(check, 100);
      }

      check();
    });

    console.log("API загружено полностью:", ymaps3);

    // Загружаем необходимые модули
    const { YMap, YMapDefaultSchemeLayer, YMapMarker } = await ymaps3.import(
      "@yandex/ymaps3-core",
    );

    // Создаём карту
    const map = new YMap(mapContainer, {
      location: {
        center: MAP_DEFAULT_VIEW.center,
        zoom: MAP_DEFAULT_VIEW.zoom,
      },
    });

    // Добавляем слой схемы
    map.addChild(new YMapDefaultSchemeLayer());

    const state = {
      filter: "all",
      selectedId: null,
      markers: new Map(),
    };

    // Создаём маркеры
    MAP_POINTS.forEach((point) => {
      const marker = new YMapMarker({
        coordinates: [point.lng, point.lat], // долгота, широта
        data: point,
      });

      // Обработчик клика
      marker.addEventListener("click", () => {
        state.selectedId = point.id;
        renderList();
        // Логика открытия balloon
      });

      state.markers.set(point.id, { marker, data: point });
      map.addChild(marker);
    });

    // Функции фильтрации и отрисовки списка
    function filterMarkers(filter) {
      state.filter = filter;
      state.markers.forEach(({ marker, data }) => {
        const visible = filter === "all" || data.type === filter;
        // В API v3 нет прямого setVisible — нужно управлять видимостью через стили или удаление/добавление
      });
      renderList();
    }

    function renderList() {
      // Ваша логика отрисовки списка
      // ...
    }

    // Настройка кнопок фильтрации
    // ...

    renderList(); // Первоначальная отрисовка

    return () => {
      // Очистка при уничтожении
      if (map) {
        map.destroy();
      }
    };
  } catch (error) {
    console.error("Ошибка инициализации карты:", error);
    alert("Не удалось загрузить карту. Проверьте консоль для деталей.");
  }
}
