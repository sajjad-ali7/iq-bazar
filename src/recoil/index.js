import { atom } from "recoil";
export const showCartState = atom({
  key: "showCart",
  default: false,
});
export const showMenuDrawerState = atom({
  key: "showMenuDrawer",
  default: false,
});
export const showProdcutModalState = atom({
  key: "showProdcutModal",
  default: false,
});
export const productsArr = atom({
  key: "products",
  default: [],
});
