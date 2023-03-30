import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/globals.css";

import { RecoilRoot } from "recoil";
import MainWrapper from "@/components/MainWrapper";

const queryClient = new QueryClient();
export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <MainWrapper>
          <Component {...pageProps} />
        </MainWrapper>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
