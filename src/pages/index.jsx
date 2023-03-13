import CartDrawer from "@/components/CartDrawer";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import MenuDrawer from "@/components/MenuDrawer";
import Slides from "@/components/Slides";
import Head from "next/head";

export default function Home() {
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
