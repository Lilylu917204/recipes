import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import CookieIcon from "@mui/icons-material/Cookie";
import WineBarIcon from "@mui/icons-material/WineBar";

const types = [
  {
    title: "Breakfast",
    body: "",
    image:
      "https://www.edamam.com/web-img/400/40091358a014e102ac7ec5bbd7366bab.jpg",
  },
  {
    title: "Lunch",
    body: "",
    image:
      "https://www.edamam.com/web-img/edd/edd29cd4b5c46f2ab4c47b6c083b6217.jpg",
  },
  {
    title: "Dinner",
    body: "",
    image:
      "https://www.edamam.com/web-img/bd5/bd50b9c0ea8b7580b5cbba60522be57f.jpg",
  },
  {
    title: "Snack",
    body: "",
    image:
      "https://www.edamam.com/web-img/04b/04b6c3528fc1ed74714909cf4fdb7d30.jpg",
  },
  {
    title: "Teatime",
    body: "",
    image:
      "https://www.edamam.com/web-img/e70/e70f47152cc70b880001f99341537fbf.jpg",
  },
];

const sidebarData = [
  {
    title: "Home",
    icon: <HomeIcon fontSize="large" />,
    path: "/recipe",
    className: "sidebar__item",
  },
  {
    title: "Favorite",
    icon: <FavoriteIcon fontSize="large" />,
    path: "/recipe/favorite",
    className: "sidebar__item",
  },
  {
    title: "Breakfast",
    icon: <FreeBreakfastIcon fontSize="large" />,
    path: "/recipe/breakfast",
    className: "sidebar__item",
  },
  {
    title: "Lunch",
    icon: <LunchDiningIcon fontSize="large" />,
    path: "/recipe/lunch",
    className: "sidebar__item",
  },
  {
    title: "Dinner",
    icon: <RamenDiningIcon fontSize="large" />,
    path: "/recipe/dinner",
    className: "sidebar__item",
  },
  {
    title: "Snack",
    icon: <CookieIcon fontSize="large" />,
    path: "/recipe/snack",
    className: "sidebar__item",
  },
  {
    title: "Teatime",
    icon: <WineBarIcon fontSize="large" />,
    path: "/recipe/teatime",
    className: "sidebar__item",
  },
];

export { types, sidebarData };
