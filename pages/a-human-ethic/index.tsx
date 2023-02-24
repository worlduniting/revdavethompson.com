import Header from "../../components/Header";
import earth from "../../public/svgs/urban-earth.svg";
import rdtAvatar from "../../public/svgs/rdt-avatar.svg";
import Image from "next/image";
import HUMANTimeline from "../../components/HUMANTimeline";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Rev. Dave Thompson's HUMAN EThic&trade;</title>
        <meta name="title" content="Rev. Dave Thompson Human Ethic &trade;" />
        <meta
          name="description"
          content="Rev. Dave Thompson's HUMAN Ethic&trade; is an ethical model for building Human common ground and peace."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Rev. Dave's HUMAN Ethic&trade;" />
        <meta
          property="og:description"
          content="Rev. Dave's HUMAN Ethic&trade; is an ethical model for building Human common ground and peace."
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
          content="Rev. Dave Thompson's HUMAN Ethic&trade;"
        />
        <meta
          property="twitter:description"
          content="Rev. Dave's HUMAN Ethic&trade; is an ethical model for building Human common ground and peace."
        />
        <meta
          property="twitter:image"
          content="https://revdavethompson.com/social-media.jpg"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addAHumanEthicMetaJsonLd()}
          key="product-jsonld"
        />
      </Head>
      <Header />

      {/* A HUMAN Ethic */}
      <section className="px-5 pt-10 pb-20 lg:px-10">
        <h1 className="pr-10 ml-5 text-3xl font-bold tracking-tight">
          A <span className="text-4xl text-violet-400 ">HUMAN</span> Ethic
          <span className="text-2xl"><sup>&trade;</sup></span>
        </h1>
        <div className="flex flex-wrap items-center">
          <div className="w-full max-w-screen-xl px-16 pt-5 mt-10 md:px-10 md:w-1/2 lg:pt-5 lg:pl-20">
            <div className="max-w-screen-lg text-zinc-500 sm:text-lg lg:pl-[10%] md:text-sm dark:text-zinc-400">
              <motion.p
                className="text-xl font-light tracking-snug"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
              >
                IN our{" "}
                <span className="text-3xl lg:text-5xl dark:text-zinc-200">
                  internet
                </span>{" "}
                world,
              </motion.p>
              <motion.p
                className="mb-2 text-right"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, delay: 2 }}
              >
                <span className="text-xl font-light">
                  where there are{" "}
                  <span className="text-3xl lg:text-5xl dark:text-zinc-200">
                    no nations
                  </span>
                  ,
                </span>
              </motion.p>
              <motion.p
                className="text-xl font-light"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, delay: 4 }}
              >
                <span className="mb-2 text-3xl text-right lg:text-5xl dark:text-zinc-200">
                  whose culture
                </span>{" "}
                will we{" "}
                <span className="mb-2 text-3xl text-right lg:text-5xl dark:text-zinc-200">
                  follow
                </span>
              </motion.p>
              <motion.p
                className="text-xl font-light text-right"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, delay: 6 }}
              >
                and how do we{" "}
                <span className="text-3xl lg:text-5xl dark:text-zinc-200">
                  find
                </span>
                <span className="text-3xl text-center lg:text-5xl text-violet-500"></span>
              </motion.p>
              <motion.p
                className="mt-2 text-3xl font-medium tracking-wide text-center lg:text-4xl text-violet-500"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, delay: 8 }}
              >
                common ground?
              </motion.p>
            </div>
          </div>
          <div className="inline-flex justify-center w-full mt-10 md:w-1/2">
            <Image
              className="object-center border-8 border-solid rounded-full w-300 h-300 border-zinc-300"
              src={earth}
              alt="Earth with Big Question Mark on it"
            />
          </div>
        </div>
      </section>

      {/* RDT HUMAN Intro */}
      <section className="px-5 pt-10 pb-16 lg:px-10 bg-zinc-100 dark:bg-zinc-800">
        <h1 className="pr-10 text-3xl font-bold tracking-tight text-right">
          A <span className="text-4xl text-violet-400 ">HUMAN</span> Servant
        </h1>
        <div className="flex flex-wrap items-center">
          <motion.div
            className="w-full px-10 pt-16 md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 100, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              className="object-center border-8 border-solid rounded-full w-300 h-300 border-zinc-300"
              src={rdtAvatar}
              alt="Earth with Big Question Mark on it"
            />
          </motion.div>
          <div className="w-full max-w-screen-xl px-16 pt-5 md:px-10 md:w-1/2 lg:pt-5 lg:pl-20">
            <div className="max-w-screen-lg text-zinc-500 sm:text-lg lg:pl-[10%] md:text-sm dark:text-zinc-400">
              <motion.p
                className="mb-3 text-xl font-light tracking-snug"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <span className="text-2xl font-medium">Rev. Dave</span> has
                spent over twenty years building common ground between our most
                divided of social groups and issues.
              </motion.p>
              <motion.p
                className="text-xl font-light tracking-snug"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                His long experience has provided him the opportunity to develop
                his <strong className="text-2xl font-medium">HUMAN</strong>{" "}
                Ethic&trade;, a set of real-world, field-tested rules of conduct
                necessary for finding the common ground that creates peace.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* HUMAN Timeline */}
      <HUMANTimeline />
    </>
  );
}

  {/* JSON-LD */}
function addAHumanEthicMetaJsonLd() {
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
