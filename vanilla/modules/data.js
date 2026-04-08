// Shared static data extracted from the former React config.
// Used by vanilla calculator + map modules.

export const CALCULATOR_REGIONS = [
  { value: "moscow", label: "Москва", baseSupport: 25000 },
  { value: "spb", label: "Санкт-Петербург", baseSupport: 22000 },
  { value: "novosibirsk", label: "Новосибирск", baseSupport: 18000 },
  { value: "ekaterinburg", label: "Екатеринбург", baseSupport: 17000 },
  { value: "kazan", label: "Казань", baseSupport: 16000 },
  { value: "krasnodar", label: "Краснодар", baseSupport: 15000 },
  { value: "samara", label: "Самара", baseSupport: 14000 },
  { value: "ufa", label: "Уфа", baseSupport: 14500 },
];

export const CALCULATOR_BENEFITS = [
  {
    key: "maternity",
    label: "Пособие по беременности и родам",
    perChild: 12000,
    base: 8000,
  },
  {
    key: "childcare",
    label: "Ежемесячное пособие по уходу за ребёнком",
    perChild: 7500,
    base: 5000,
  },
  {
    key: "birth",
    label: "Единовременное пособие при рождении",
    perChild: 20000,
    base: 20000,
  },
  {
    key: "housing",
    label: "Субсидия на жильё",
    perChild: 0,
    base: 50000,
    housingOnly: true,
  },
  {
    key: "regional",
    label: "Региональная доплата",
    perChild: 3000,
    base: 2000,
  },
];

export const MAP_TYPES = [
  { value: "all", label: "Все", icon: "ri-map-pin-line", color: "#3D8B6E" },
  {
    value: "clinic",
    label: "Клиники",
    icon: "ri-hospital-line",
    color: "#E07070",
  },
  { value: "park", label: "Парки", icon: "ri-plant-line", color: "#5A9E6F" },
  {
    value: "kindergarten",
    label: "Детские сады",
    icon: "ri-building-line",
    color: "#E09A40",
  },
];

export const MAP_TYPE_COLORS = {
  clinic: "#E07070",
  park: "#5A9E6F",
  kindergarten: "#E09A40",
};

export const MAP_TYPE_EMOJIS = {
  clinic: "🏥",
  park: "🌳",
  kindergarten: "🏫",
};

export const MAP_POINTS = [
  {
    id: 1,
    type: "clinic",
    name: "Детская поликлиника №1",
    address: "ул. Садовая, 12",
    lat: 55.755,
    lng: 37.617,
  },
  {
    id: 2,
    type: "clinic",
    name: "Женская консультация №3",
    address: "пр. Мира, 45",
    lat: 55.762,
    lng: 37.632,
  },
  {
    id: 3,
    type: "clinic",
    name: "Перинатальный центр",
    address: "ул. Ленина, 78",
    lat: 55.748,
    lng: 37.605,
  },
  {
    id: 4,
    type: "park",
    name: "Парк Семейного отдыха",
    address: "ул. Парковая, 3",
    lat: 55.77,
    lng: 37.625,
  },
  {
    id: 5,
    type: "park",
    name: "Детский парк «Радуга»",
    address: "ул. Зелёная, 19",
    lat: 55.758,
    lng: 37.598,
  },
  {
    id: 6,
    type: "park",
    name: "Сквер «Солнечный»",
    address: "пер. Тихий, 7",
    lat: 55.744,
    lng: 37.64,
  },
  {
    id: 7,
    type: "kindergarten",
    name: "Детский сад №42 «Ромашка»",
    address: "ул. Цветочная, 5",
    lat: 55.765,
    lng: 37.61,
  },
  {
    id: 8,
    type: "kindergarten",
    name: "Детский сад №17 «Солнышко»",
    address: "ул. Берёзовая, 22",
    lat: 55.752,
    lng: 37.628,
  },
  {
    id: 9,
    type: "kindergarten",
    name: "Частный сад «Умка»",
    address: "ул. Дружбы, 11",
    lat: 55.76,
    lng: 37.645,
  },
  {
    id: 10,
    type: "clinic",
    name: "Стоматология для детей",
    address: "ул. Весенняя, 33",
    lat: 55.756,
    lng: 37.655,
  },
];

export const MAP_DEFAULT_VIEW = {
  center: [55.758, 37.625],
  zoom: 13,
};

export const COMMUNITY_BOARD_POSTS = [
  {
    id: 1,
    author: "Анна К.",
    avatar: "👩",
    avatarBg: "#B8E6D5",
    time: "Сегодня, 10:32",
    tag: "Вопрос",
    tagColor: "#3D8B6E",
    title: "Как оформить пособие на третьего ребёнка?",
    text: "Подскажите, какие документы нужны для оформления ежемесячного пособия на третьего ребёнка. Уже собрала часть, но не уверена в полноте списка.",
    replies: 12,
    likes: 8,
  },
  {
    id: 2,
    author: "Михаил Д.",
    avatar: "👨",
    avatarBg: "#FFD6B0",
    time: "Вчера, 18:15",
    tag: "Совет",
    tagColor: "#D4820A",
    title: "Семейная ипотека — личный опыт получения",
    text: "Прошли весь путь от подачи заявки до получения ключей. Делюсь пошаговым опытом, чтобы вы не наступали на те же грабли.",
    replies: 24,
    likes: 41,
  },
  {
    id: 3,
    author: "Елена С.",
    avatar: "👩‍🦱",
    avatarBg: "#F9C6D0",
    time: "2 дня назад",
    tag: "Новость",
    tagColor: "#C0392B",
    title: "Новые выплаты с 1 апреля 2026 — что изменилось",
    text: "Правительство утвердило новые размеры пособий. Разбираю, кому и сколько теперь положено, и как пересчитать свои выплаты.",
    replies: 37,
    likes: 89,
  },
  {
    id: 4,
    author: "Ольга Т.",
    avatar: "👩‍🦳",
    avatarBg: "#D4F0E8",
    time: "3 дня назад",
    tag: "Помощь",
    tagColor: "#2C5F4F",
    title: "Ищу логопеда для ребёнка 3 лет в Санкт-Петербурге",
    text: "Нам поставили задержку речевого развития. Ищем хорошего логопеда, желательно по ОМС. Буду благодарна за рекомендации.",
    replies: 9,
    likes: 5,
  },
];
