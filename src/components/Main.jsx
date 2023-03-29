import React, { useEffect, useState } from "react";
import { Roboto } from "@next/font/google";
import { useRecoilValue } from "recoil";
import {
  showCartState,
  showMenuDrawerState,
  showProdcutModalState,
} from "@/recoil";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const Main = ({ children }) => {
  const menuAside = useRecoilValue(showMenuDrawerState);
  const prodcutModal = useRecoilValue(showProdcutModalState);
  const cartAside = useRecoilValue(showCartState);
  const [overflowY, setOverflowY] = useState(
    cartAside || prodcutModal || menuAside
  );

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setOverflowY(cartAside || prodcutModal || menuAside);
  }, [prodcutModal, menuAside, cartAside]);

  console.log(overflowY);
  return (
    <main
      className={`${roboto.className} ${
        overflowY ? "overflow-hidden max-h-screen" : ""
      }`}
    >
      {children}
    </main>
  );
};

export default Main;
