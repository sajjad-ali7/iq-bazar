import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Slides from "@/components/Slides";
import { getProducts } from "@/service";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState();
  useEffect(() => {
    getProducts().then((data) => setProducts(data.data));
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

      <Container>
        <Slides />
      </Container>
    </>
  );
}
