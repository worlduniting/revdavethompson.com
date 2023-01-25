// Root Index/Home Page

import Testimonials from "../components/Testimonials";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Inter } from "@next/font/google";
import Script from "next/script";
import Featurettes from "../components/Featurettes";
import HtmlHead from "../components/HtmlHead";
import FrontCTA from "../components/FrontCTA";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
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
