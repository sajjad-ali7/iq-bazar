import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const queryClient = new QueryClient();
export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={`${roboto.className}`}>
        <Component {...pageProps} />
      </main>
    </QueryClientProvider>
  );
}
