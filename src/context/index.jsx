import { useState } from "react";

const contextApi = () => {
  const [showCart, setShowCart] = useState(false);
  const [showMenuDrawer, setShowMenuDrawer] = useState(false);

  return {
    setShowCart,
    showCart,
    showMenuDrawer,
    setShowMenuDrawer,
  };
};

export default contextApi;
