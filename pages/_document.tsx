import { Html, Head, Main, NextScript } from 'next/document'
import SpeedDialBtmRt from '../components/SpeedDialBtmRt';
import Footer from '../components/Footer';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head></Head>
      <body className="dark:bg-zinc-700 dark:text-white text-zinc-700">
        <Main />

        <SpeedDialBtmRt />

        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
