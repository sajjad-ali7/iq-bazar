import React, { useEffect, useState } from "react";
import { Inter, Roboto } from "@next/font/google";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartItemsState, showCartState, showMenuDrawerState } from "@/recoil";
import Navbar from "./Navbar";
import CartDrawer from "@/Asides/CartAside";
import MenuDrawer from "@/Asides/MenuAside";
import { storage } from "@/helpers";
import { CART_ITEMS, NAVBAR_HEIGHT } from "@/consts";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const MainWrapper = ({ children }) => {
  const menuAside = useRecoilValue(showMenuDrawerState);
  // const prodcutModal = useRecoilValue(showProdcutModalState);
  const cartAside = useRecoilValue(showCartState);
  const [overflowY, setOverflowY] = useState(cartAside || menuAside);
  const [, setCartItems] = useRecoilState(cartItemsState);
  const [contentpadding, setContentPadding] = useState(false);

  useEffect(() => {
    if (localStorage) {
      setCartItems(storage.parsedGet(CART_ITEMS));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setOverflowY(menuAside);
  }, [, menuAside, cartAside]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setContentPadding(true);
      } else {
        setContentPadding(false);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      setContentPadding(false);
    }

    return () => {
      if (typeof window !== "undefined") {
        setContentPadding(false);
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <main className={`${inter.className} ${overflowY ? "max-h-screen" : ""}`}>
      <Navbar />
      <CartDrawer />
      <MenuDrawer />
      <div style={{ paddingTop: contentpadding ? `${NAVBAR_HEIGHT}px` : "" }}>
        {children}
      </div>
    </main>
  );
};

export default MainWrapper;
