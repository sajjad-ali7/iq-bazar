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
import { createContext, useState } from "react";

export const App_Context = createContext();

const queryClient = new QueryClient();
export default function App({ Component, pageProps }) {
  const [showCart, setShowCart] = useState(false);
  const [showMenuDrawer, setShowMenuDrawer] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <App_Context.Provider
        value={{ setShowCart, showCart, showMenuDrawer, setShowMenuDrawer }}
      >
        <main className={`${roboto.className}`}>
          <Container>
            <Navbar />
          </Container>
          <Component {...pageProps} />
        </main>
      </App_Context.Provider>
    </QueryClientProvider>
  );
}
