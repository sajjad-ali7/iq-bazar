import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Roboto } from "@next/font/google";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/globals.css";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
import MenuDrawer from "@/Asides/MenuAside";
import CartDrawer from "@/Asides/CartAside";
import contextApi from "@/context";

import { createContext, useState } from "react";
export const App_Context = createContext();

const queryClient = new QueryClient();
export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <App_Context.Provider value={contextApi()}>
        <main className={`${roboto.className}`}>
          <Container>
            <Navbar />
          </Container>
          <CartDrawer />
          <MenuDrawer />
          <Component {...pageProps} />
        </main>
      </App_Context.Provider>
    </QueryClientProvider>
  );
}
