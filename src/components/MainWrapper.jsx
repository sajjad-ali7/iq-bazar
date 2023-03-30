import React, { useEffect, useState } from "react";
import { Roboto } from "@next/font/google";
import { useRecoilValue } from "recoil";
import {
  showCartState,
  showMenuDrawerState,
  showProdcutModalState,
} from "@/recoil";
import Navbar from "./Navbar";
import CartDrawer from "@/Asides/CartAside";
import MenuDrawer from "@/Asides/MenuAside";
import Container from "./Container";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const MainWrapper = ({ children }) => {
  const menuAside = useRecoilValue(showMenuDrawerState);
  const prodcutModal = useRecoilValue(showProdcutModalState);
  const cartAside = useRecoilValue(showCartState);
  const [overflowY, setOverflowY] = useState(cartAside || menuAside);

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
