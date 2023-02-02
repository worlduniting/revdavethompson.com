// Root Index/Home Page

import Testimonials from "../components/Testimonials";
import { Inter } from "@next/font/google";
import Script from "next/script";
import Featurettes from "../components/Featurettes";
import HtmlHead from "../components/HtmlHead";
import FrontCTA from "../components/FrontCTA";
import Header from "../components/Header";
import Head from "next/head";
import HomeMeta from "../components/meta/HomeMeta";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Head>
      <HomeMeta />
    </Head>
      <HtmlHead />
      <Header />

      {/* Call To Action */}
      <FrontCTA />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Featurettes */}
      <Featurettes />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'UA-59712520-7', 'auto');
          ga('send', 'pageview');
        `}
      </Script>
      <Script
        src="https://www.google-analytics.com/analytics.js"
        strategy="afterInteractive"
      />
    </>
  );
}
