/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Inter } from "@next/font/google";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartItemsState, showCartState, showMenuAsideState } from "@/recoil";
import Navbar from "./Navbar";
import CartAside from "@/Asides/CartAside";
import MenuAside from "@/Asides/MenuAside";
import { storage } from "@/helpers";
import { CART_ITEMS, NAVBAR_HEIGHT } from "@/consts";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const MainWrapper = ({ children }) => {
  const menuAside = useRecoilValue(showMenuAsideState);
  const cartAside = useRecoilValue(showCartState);
  const [overflowY, setOverflowY] = useState(cartAside || menuAside);
  const [, setCartItems] = useRecoilState(cartItemsState);
  const [contentpadding, setContentPadding] = useState(false);

  useEffect(() => {
    if (localStorage) {
      setCartItems(storage.parsedGet(CART_ITEMS));
    }
  }, []);

  useEffect(() => {
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
      <CartAside />
      <MenuAside />
      <div style={{ paddingTop: contentpadding ? `${NAVBAR_HEIGHT}px` : "" }}>
        {children}
      </div>
    </main>
  );
};

export default MainWrapper;
