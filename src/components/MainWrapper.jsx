import React, { useEffect, useState } from "react";
import { Roboto } from "@next/font/google";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  cartItemsState,
  showCartState,
  showMenuDrawerState,
  showProdcutModalState,
} from "@/recoil";
import Navbar from "./Navbar";
import CartDrawer from "@/Asides/CartAside";
import MenuDrawer from "@/Asides/MenuAside";
import Container from "./Container";
import { storage } from "@/helpers";
import { CART_ITEMS } from "@/consts";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const MainWrapper = ({ children }) => {
  const menuAside = useRecoilValue(showMenuDrawerState);
  // const prodcutModal = useRecoilValue(showProdcutModalState);
  const cartAside = useRecoilValue(showCartState);
  const [overflowY, setOverflowY] = useState(cartAside || menuAside);
  const [, setCartItems] = useRecoilState(cartItemsState);
  useEffect(() => {
    if (localStorage) {
      setCartItems(storage.parsedGet(CART_ITEMS));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setOverflowY(cartAside || menuAside);
  }, [, menuAside, cartAside]);
  return (
    <main
      className={`${roboto.className} ${
        overflowY ? "overflow-hidden max-h-screen" : ""
      }`}
    >
      <Container>
        <Navbar />
      </Container>
      <CartDrawer />
      <MenuDrawer />
      {children}
    </main>
  );
};

export default MainWrapper;
