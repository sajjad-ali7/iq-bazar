import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/globals.css";

import { RecoilRoot } from "recoil";
import MainWrapper from "@/components/MainWrapper";
import Head from "next/head";

const queryClient = new QueryClient();
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.jpg" type="image/x-icon" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <MainWrapper>
            <Component {...pageProps} />
          </MainWrapper>
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}
