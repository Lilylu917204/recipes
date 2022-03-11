import { MaterialIcon } from "./materialUI";

const mealTypeData = [
  {
    title: "Breakfast",
    body: "Breakfast is everything. The beginning, the first thing. It is the mouthful that is the commitment to a new day, a continuing life.",
    author: "- A. A. Gill",
    image:
      "https://www.edamam.com/web-img/400/40091358a014e102ac7ec5bbd7366bab.jpg",
  },
  {
    title: "Lunch",
    body: "People who say they’re too busy to have lunch have a false impression of their own importance. ",
    author: "- John Howard",
    image:
      "https://www.edamam.com/web-img/edd/edd29cd4b5c46f2ab4c47b6c083b6217.jpg",
  },
  {
    title: "Dinner",
    body: "The dinner hour is a sacred, happy time when everyone should be together and relaxed.",
    author: "- Julia Child",
    image:
      "https://www.edamam.com/web-img/bd5/bd50b9c0ea8b7580b5cbba60522be57f.jpg",
  },
  {
    title: "Snack",
    body: "I like almonds as a snack - keeps your energy up but doesn't fill you up.",
    author: "- Ina Garten",
    image:
      "https://www.edamam.com/web-img/04b/04b6c3528fc1ed74714909cf4fdb7d30.jpg",
  },
  {
    title: "Teatime",
    body: "You can never get a cup of tea large enough or a book long enough to suit me.",
    author: "- C.S. Lewis",
    image:
      "https://www.edamam.com/web-img/e70/e70f47152cc70b880001f99341537fbf.jpg",
  },
];

const sidebarData = [
  {
    title: "Home",
    icon: <MaterialIcon.HomeIcon fontSize="large" />,
    path: "/recipe",
    className: "sidebar__item",
  },
  {
    title: "Favorite",
    icon: <MaterialIcon.FavoriteIcon fontSize="large" />,
    path: "/recipe/favorite",
    className: "sidebar__item",
  },
  {
    title: "Breakfast",
    icon: <MaterialIcon.FreeBreakfastIcon fontSize="large" />,
    path: "/recipe/breakfast",
    className: "sidebar__item",
  },
  {
    title: "Lunch",
    icon: <MaterialIcon.LunchDiningIcon fontSize="large" />,
    path: "/recipe/lunch",
    className: "sidebar__item",
  },
  {
    title: "Dinner",
    icon: <MaterialIcon.RamenDiningIcon fontSize="large" />,
    path: "/recipe/dinner",
    className: "sidebar__item",
  },
  {
    title: "Snack",
    icon: <MaterialIcon.CookieIcon fontSize="large" />,
    path: "/recipe/snack",
    className: "sidebar__item",
  },
  {
    title: "Teatime",
    icon: <MaterialIcon.WineBarIcon fontSize="large" />,
    path: "/recipe/teatime",
    className: "sidebar__item",
  },
];

export { mealTypeData, sidebarData };
