// Root Index/Home Page

import Testimonials from "../components/Testimonials";
import { motion } from "framer-motion";
import health from "../public/health.png";
import sync4 from "../public/sync4.png";
import standing from "../public/standing.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Head from "next/head";
import TeamSVG from "../components/teamSVG";
import Script from "next/script";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="A CIVIL HUMAN Servant of Peace and Common Ground & YouTube Host of the Over Coffee Show. Learn More!"
        />

        {/* Schema.org markup for Google+ */}
        <meta
          itemProp="brand"
          key="brand"
          content="Rev. Dave Thompson: CIVIL HUMAN Servant Building Human Peace and Common Ground"
        />
        <meta
          itemProp="description"
          key="desc"
          content="Rev. Dave Thompson: CIVIL HUMAN Servant Building Human Peace and Common Ground. Learn More!"
        />
        <meta
          itemProp="image"
          key="image"
          content="https://revdavethompson.com/img/rdt-masthead-branded.jpg"
        />
        <meta itemProp="birthDate" key="bd" content="1974-11-01" />
        <meta
          itemProp="affiliation"
          key="affil"
          content="World Uniting International"
        />
        <meta itemProp="alumniOf" key="alum1" content="Northwest Universtiy" />
        <meta
          itemProp="alumniOf"
          key="alum2"
          content="Gordon-Conwell Theological Seminary"
        />
        <meta
          itemProp="memberOf"
          key="alum3"
          content="Sons of the American Revolution"
        />
        <meta itemProp="jobTitle" key="alum4" content="CIVIL HUMAN Servant" />
        <meta itemProp="email" key="alum6" content="rdt@worlduniting.org" />
        <meta
          itemProp="interactionService"
          content="https://www.youtube.com/revdavethompson"
        />
        {/* Twitter Card data */}
        <meta name="twitter:card" key="tcard" content="summary_large_image" />
        <meta name="twitter:site" key="tsite" content="@revdavethompson" />
        <meta
          name="twitter:title"
          key="ttitle"
          content="Rev. Dave Thompson: A CIVIL HUMAN Servant."
        />
        <meta
          name="twitter:description"
          key="tdesc"
          content="A politically neutral CIVIL HUMAN Servant of Peace and Common Ground & YouTube Host of the Over Coffee Show. Learn More!"
        />
        <meta name="twitter:creator" key="tcreat" content="@revdavethompson" />

        {/* Twitter summary card with large image must be at least 280x150px */}
        <meta
          name="twitter:image:src"
          key="timage"
          content="https://revdavethompson.com/img/rdt-masthead-branded.jpg"
        />

        {/* Open Graph data */}
        <meta
          property="og:title"
          content="Rev. Dave Thompson: A CIVIL HUMAN Servant building Peace and Common Ground & YouTube Host."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://revdavethompson.com/" />
        <meta
          property="og:image"
          content="https://revdavethompson.com/img/rdt-masthead-branded.jpg"
        />
        <meta
          property="og:description"
          content="A CIVIL HUMAN Servant building Peace and Common Ground & YouTube Host. Learn More!"
        />
        <meta property="og:site_name" content="Rev. Dave Thompson Website" />
        <meta
          property="article:published_time"
          content="2018-08-01T05:59:00+01:00"
        />
        <meta
          property="article:modified_time"
          content="2018-08-01T19:08:47+01:00"
        />
        <meta property="article:section" content="Article Section" />
        <meta property="article:tag" content="Article Tag" />
        <meta property="fb:app_id" content="2020039758088719" />

        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="author" content="Rev. Dave Thompson" />

        <title>
          Rev. Dave Thompson: A CIVIL HUMAN Servant building Peace and Common
          Ground
        </title>
      </Head>
      <Header />

      {/* Call To Action */}
      <section className="mx-auto px-15 p-10">
        <motion.h4
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 2 }}
          whileHover={{ scale: 1.05 }}
          className="tracking-wide md:pl-10 text-2xl xl:text-4xl uppercase font-medium"
        >
          Let&rsquo;s{" "}
          <span className="text-violet-500 text-3xl xl:text-5xl">imagine</span>{" "}
          our world
        </motion.h4>
        <div className="flex md:px-10 flex-wrap">
          <div className="w-full pt-10 mb-10 lg:px-10 md:w-1/2">
            <motion.p
              className="ml-5 tracking-snug font-extralight text-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 3 }}
            >
              not{" "}
              <span className="text-green-300 text-3xl lg:text-3xl">
                divided
              </span>
            </motion.p>
            <motion.p
              className="mb-5 text-right pr-4 tracking-snug font-extralight text-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 3 }}
            >
              by our{" "}
              <span className="text-3xl md:text-4xl text-green-300">
                differences
              </span>
              ,
            </motion.p>
            <motion.p
              className="mb-1 ml-5 text-xl font-extralight"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, delay: 4 }}
            >
              but <span className="text-3xl text-violet-500">connected</span>
            </motion.p>
            <motion.p
              className="text-xl font-extralight text-right"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, delay: 5 }}
            >
              by our
              <span className="text-3xl lg:text-4xl text-violet-500">
                {" "}
                common ground.
              </span>
            </motion.p>
          </div>
          <div className="w-full md:w-1/2 items-center">
            <TeamSVG />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />
      <Footer />
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
