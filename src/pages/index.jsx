/* eslint-disable react-hooks/exhaustive-deps */
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import MainContent from "@/components/MainPageContent/MainContent";
import Slides from "@/components/Slides";
import { onCategoriesSelect, onSearch } from "@/helpers";
import { getQueryState, productsArr } from "@/recoil";
import { getProducts } from "@/service";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export default function Home() {
  //getTypes is [null , 'search' , 'categories']
  const [getType, setGetType] = useState();
  const [getQuery, setGetQuery] = useRecoilState(getQueryState);
  const [products, setProducts] = useRecoilState(productsArr);
  const [categoryName, setCategoryName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(null);
  const [loader, setLoader] = useState(false);

  const fetchData = async () => {
    setLoader(true);
    const { data: res } = await getProducts(getQuery);

    setLastPage(res.last_page);
    if (getType === "search") setProducts((prev) => [...res.data]);
    else setProducts((prev) => [...prev, ...res.data]);

    setLoader(false);
  };

  //first render gets random products and whenever the query change
  useEffect(() => {
    fetchData();
  }, [getQuery, currentPage]);

  //if the query type change reset the main states
  useEffect(() => {
    setCurrentPage(1);
    setProducts([]);
  }, [getType, categoryName]);

  //on search submit change the queryType state
  const onSearchClick = (searchVal) => {
    setGetType("search");
    setGetQuery(onSearch(searchVal));
  };

  const onCategorySelect = (categoryName) => {
    setGetType("categories");
    setCategoryName(categoryName);
    setGetQuery(onCategoriesSelect(categoryName, currentPage));
  };

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

      <Hero onSearchClick={onSearchClick} />

      <div className="bg-white p-5">
        <Container>
          <Slides />
        </Container>
      </div>

      <Container>
        <MainContent
          onCategorySelect={onCategorySelect}
          lastPage={lastPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          loader={loader}
          products={products || []}
          onLoadMoreClick={onLoadMoreClick}
        />
      </Container>
    </>
  );
}
