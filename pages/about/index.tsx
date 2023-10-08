/*
    About Rev Dave Thompson
*/

import AboutRDT from "../../components/AboutRDTTimeline";
import Header from "../../components/Header";
import Image from "next/image";
import rdtAvatar from "../../public/svgs/rdt-avatar.svg";
import { motion } from "framer-motion";
import Featurettes from "../../components/Featurettes";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>About Rev. Dave Thompson</title>
        <meta
          name="title"
          content="Rev. Dave Thompson is an author, speaker, and CIVIL HUMAN Servant building human common ground and peace."
        />
        <meta
          name="description"
          content="Rev. Dave Thompson is an author, speaker, and CIVIL HUMAN Servant building human common ground and peace."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="About Rev. Dave Thompson" />
        <meta
          property="og:description"
          content="Rev. Dave Thompson is an author, speaker, and CIVIL HUMAN Servant building human common ground and peace."
        />
        <meta
          property="og:image"
          content="https://revdavethompson.com/social-media.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="About Rev. Dave Thompson" />
        <meta
          property="twitter:description"
          content="Rev. Dave Thompson is an author, speaker, and CIVIL HUMAN Servant building human common ground and peace."
        />
        <meta
          property="twitter:image"
          content="https://revdavethompson.com/social-media.jpg"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addAboutMetaJsonLd()}
          key="product-jsonld"
        />
      </Head>
      <Header />

      <section>
        <div className="container flex flex-wrap items-center py-24 mx-auto">
          {/* Speaking & Engagements Feature */}
          <motion.div
            className="inline-flex items-center justify-center w-full mb-5 md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 100, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              alt="Rev Dave shaking hand with Presidential candidate."
              className="object-center border-8 border-solid rounded-full w-300 h-300 border-zinc-300"
              src={rdtAvatar}
            />
          </motion.div>
          <div className="flex flex-col flex-wrap mb-10 text-center lg:py-6 md:w-1/2 md:pl-12 md:text-left">
            <div className="flex flex-col items-center mb-10 md:items-start">
              <div className="items-center flex-grow">
                <h2 className="pb-3 mb-3 text-3xl font-medium border-solid md:border-b-2 border-zinc-500 title-font">
                  Rev. Dave Thompson
                </h2>
                <p className="mb-5 text-base leading-relaxed">
                  For over two decades, author and speaker Rev. Dave Thompson
                  has continued his work building peace and common ground within
                  our most divided of social groups, organizations and politics.
                </p>
                <p>
                  From out of his long career of bringing people together Rev.
                  Dave developed a real-world method for building common ground.
                  His{" "}
                  <span className="text-violet-400">HUMAN Ethic&trade;</span>{" "}
                  provides a foundational set of rules and best-practices for
                  avoiding many of the road blocks that can derail the process
                  of building peace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutRDT styles="bg-zinc-100" />

      {/* Featurettes */}
      <Featurettes styles="" />
      
    </>
  );
}
{
  /* JSON-LD */
}
function addAboutMetaJsonLd() {
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
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": [
      "Trinity Bible College,
      "Northwest University",
      "Gordon Conwell Theological Seminary",
    ],
  }
  "worksFor": {
    ["@type": "Organization",
    "name": "World Uniting International"],
    ["@type": "EducationalOrganization]
  }
}
  `,
  };
}
