import Container from "@/components/Container";
import Hero from "@/components/Hero";
import MainContent from "@/components/MainPageContent/MainContent";
import Slides from "@/components/Slides";
import { getProducts } from "@/service";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    getProducts(currentPage).then((res) => {
      setProducts((prev) => [...prev, ...res.data.data]);
      setLoader(false);
    });
  }, [currentPage]);

  const onLoadMoreClick = () => {
    setCurrentPage((prev) => prev + 1);
    setLoader(false);
  };

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
        <MainContent
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          loader={loader}
          products={products}
          onLoadMoreClick={onLoadMoreClick}
        />
      </Container>
    </>
  );
}
