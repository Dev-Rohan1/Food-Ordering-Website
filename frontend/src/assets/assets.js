import logo from "./logo.png";
import heroImage from "./hero.png";
import boost from "./boost.png";
import category_01 from "./category_01.png";
import category_02 from "./category_02.png";
import category_03 from "./category_03.png";
import category_04 from "./category_04.png";

export const assets = {
  logo,
  heroImage,
  boost,
  category_01,
  category_02,
  category_03,
  category_04,
};

export const categories = [
  {
    id: 1,
    img: assets.category_01,
    title: "Fresh & Healthy",
    description:
      "Enjoy fresh, healthy meals made with the finest natural ingredients.",
  },
  {
    id: 2,
    img: assets.category_02,
    title: "Fast Delivery",
    description:
      "Swift and safe delivery of your meals right to your doorstep every time.",
  },
  {
    id: 3,
    img: assets.category_03,
    title: "Delicious Taste",
    description:
      "Savor mouth-watering flavors carefully crafted by our expert chefs.",
  },
  {
    id: 4,
    img: assets.category_04,
    title: "Affordable Prices",
    description:
      "High-quality meals offered at prices that fit your budget perfectly.",
  },
];
