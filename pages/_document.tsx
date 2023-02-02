import { Head, Html, Main, NextScript } from 'next/document'
import SpeedDialBtmRt from '../components/SpeedDialBtmRt';
import Footer from '../components/Footer';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head>
        
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
