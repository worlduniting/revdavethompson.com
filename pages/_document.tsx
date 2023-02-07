import { Head, Html, Main, NextScript } from "next/document";
import SpeedDialBtmRt from "../components/SpeedDialBtmRt";
import Footer from "../components/Footer";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <body className="dark:bg-zinc-700 dark:text-white text-zinc-700">
        <Main />

        <SpeedDialBtmRt />

        <Footer />

        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.js"
          strategy="afterInteractive"
        ></Script>
        <NextScript />
      </body>
    </Html>
  );
}
