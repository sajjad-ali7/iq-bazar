import Container from "@/components/Container";
import Hero from "@/components/Hero";
import MainContent from "@/components/MainContent";
import Slides from "@/components/Slides";
import { getProducts } from "@/service";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState();
  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.data.data);
    });
  }, []);

  return (
    <>
      <>
        <Head>
          <title>IQ Bazar</title>
          <meta name="description" content="IQ Bazar E-commerce" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
      </>

      <Hero />

      <div className="bg-white p-5">
        <Container>
          <Slides />
        </Container>
      </div>

      <Container>
        <MainContent products={products} />
      </Container>
    </>
  );
}
