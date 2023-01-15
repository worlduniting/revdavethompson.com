import { Html, Head, Main, NextScript } from 'next/document'
import SpeedDialBtmRt from '../components/SpeedDialBtmRt';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/flowbite@1.6.0/dist/flowbite.min.css"
        />
      </Head>
      <body className="dark:bg-zinc-700 dark:text-white text-slate-700">
        <Main />

        <SpeedDialBtmRt />
        <script src="https://unpkg.com/flowbite@1.6.0/dist/flowbite.min.js" async></script>
        <NextScript />
      </body>
    </Html>
  );
}
