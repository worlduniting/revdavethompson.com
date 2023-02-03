// Root Index/Home Page

import Testimonials from "../components/Testimonials";
import { Inter } from "@next/font/google";
import Script from "next/script";
import Featurettes from "../components/Featurettes";
import FrontCTA from "../components/FrontCTA";
import Header from "../components/Header";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>
          Rev. Dave Thompson: A CIVIL HUMAN Servant building common ground and
          peace. Learn more!
        </title>
        <meta
          name="title"
          content="Rev. Dave Thompson: A CIVIL HUMAN Servant building common ground and peace. Learn more!"
        />
        <meta
          name="description"
          content="Learn from Rev. Dave Thompson how to build common ground and peace amidst division. Resources and for Leaders!"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta
          property="og:title"
          content="Rev. Dave Thompson: A CIVIL HUMAN Servant building common ground and peace. Learn more!"
        />
        <meta
          property="og:description"
          content="Learn from Rev. Dave Thompson how to build common ground and peace amidst division. Resources and for Leaders!"
        />
        <meta
          property="og:image"
          content="https://revdavethompson.com/social-media.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta
          property="twitter:title"
          content="Rev. Dave Thompson: A CIVIL HUMAN Servant building common ground and peace. Learn more!"
        />
        <meta
          property="twitter:description"
          content="Learn from Rev. Dave Thompson how to build common ground and peace amidst division. Resources and for Leaders!"
        />
        <meta
          property="twitter:image"
          content="https://revdavethompson.com/social-media.jpg"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addHomeMetaJsonLd()}
          key="product-jsonld"
        />
      </Head>
      <HtmlHead />
      <Header />

      {/* Call To Action */}
      <FrontCTA />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Featurettes */}
      <Featurettes styles="" />

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

{
  /* JSON-LD */
}
function addHomeMetaJsonLd() {
  return {
    __html: `{
  "@context": "https://schema.org/",
  "@type": "Person",
  "name": "Rev. Dave Thompson",
  "url": "https://revdavethompson.com",
  "image": "https://revdavethompson.com/social-media.jpg",
  "sameAs": [
    "https://facebook.com/revdavethompson",
    "https://twitter.com/revdavethompson",
    "https://instagram.com/revdavethompson",
    "https://youtube.com/revdavethompson",
    "https://linkedin.com/revdavethompson"
  ],
  "jobTitle": "CIVIL HUMAN Servant",
  "worksFor": {
    "@type": "Organization",
    "name": "World Uniting International"
  }
}
  `,
  };
}
