import Container from "@/components/Container";
import Head from "next/head";
import { useEffect, useState } from "react";

const index = () => {
  return (
    <>
      <Head>
        <title>Offers</title>
        <meta name="description" content="hello" />
      </Head>
      <Container>
        <div className="grid-auto-cols mx-auto ">
          <Card imgNum={2} coupon={"5OFF2"} />
          <Card imgNum={5} coupon={"OFF6"} />
          <Card imgNum={6} coupon={"BAZAR10"} />
          <Card imgNum={8} coupon={"BAZAR18"} />
          <Card imgNum={10} coupon={"HELLO15"} />
          <Card imgNum={12} coupon={"EID12"} />
          <Card imgNum={15} coupon={"FOO"} />
          <Card imgNum={18} coupon={"EID2"} />
        </div>
      </Container>
    </>
  );
};

export default index;

const Card = ({ imgNum, coupon }) => {
  const [isCopied, setIsCopied] = useState(false);
  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isCopied]);
  return (
    <div className="card shadow-xl">
      <figure>
        <img src={`/${imgNum}off.webp`} alt="Shoes" />
      </figure>
      <div className=" flex flex-row py-4 px-5   justify-between items-center ">
        <p>{coupon}</p>
        <h6 className="text-xl">
          <button
            disabled={isCopied}
            className="text-cyan-600"
            onClick={() => {
              navigator.clipboard.writeText(coupon);
              setIsCopied((prev) => !prev);
            }}
          >
            {isCopied ? "Copied !" : "Copy"}
          </button>
        </h6>
      </div>
    </div>
  );
};
