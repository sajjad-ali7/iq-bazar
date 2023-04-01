import { Html, Head, Main, NextScript } from "next/document";
import { RecoilRoot } from "recoil";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <RecoilRoot>
        <body className="overflow-x-hidden bg-bgColor text-fontColor">
          <Main />
          <NextScript />
          <div id="portal"></div>
        </body>
      </RecoilRoot>
    </Html>
  );
}
