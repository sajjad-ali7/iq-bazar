import { getAllProducts } from "@/helpers";
import { atom } from "recoil";
export const showCartState = atom({
  key: "showCart",
  default: false,
});
export const showMenuAsideState = atom({
  key: "showMenuAside",
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
export const getQueryState = atom({
  key: "getQueryState",
  default: getAllProducts(1),
});
export const cartItemsState = atom({
  key: "cartItemsState",
  default: [],
});
export const productSectionRefState = atom({
  key: "productSectionRefState",
  default: "",
});
export const getTypeState = atom({
  key: "getTypeState",
  default: null,
});
