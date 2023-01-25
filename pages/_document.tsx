import { Html, Head, Main, NextScript } from 'next/document'
import SpeedDialBtmRt from '../components/SpeedDialBtmRt';
import Footer from '../components/Footer';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/flowbite@1.6.0/dist/flowbite.min.css"
        />
      </Head>
      <body className="dark:bg-zinc-700 dark:text-white text-zinc-700">
        <Main />

        <SpeedDialBtmRt />
        <script src="https://unpkg.com/flowbite@1.6.0/dist/flowbite.min.js" async></script>
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
