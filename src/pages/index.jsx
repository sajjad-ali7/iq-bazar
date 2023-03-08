import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
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

      <Container>
        <Navbar />
      </Container>

      <Hero />

      <Container>
        <Slides />
      </Container>
    </>
  );
}
