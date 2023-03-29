import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/globals.css";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";

import MenuDrawer from "@/Asides/MenuAside";
import CartDrawer from "@/Asides/CartAside";

import { RecoilRoot } from "recoil";
import Main from "@/components/Main";

const queryClient = new QueryClient();
export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Main>
          <Component {...pageProps} />
        </Main>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
