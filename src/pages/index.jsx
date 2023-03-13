import CartButton from "@/components/CartButton";
import CartDrawer from "@/components/CartDrawer";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Slides from "@/components/Slides";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [showCart, setShowCart] = useState(false);

  const toggleShowCart = (value) => setShowCart(value);

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
      <CartDrawer showCart={showCart} setShowCart={toggleShowCart} />
    </>
  );
}
