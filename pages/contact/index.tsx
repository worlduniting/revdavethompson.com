/*
        Contact Page
*/
import ContactForm from "../../components/ContactForm";
import Header from "../../components/Header"
import Image from "next/image";
import rdtAvatar from "../../public/svgs/rdt-avatar.svg"
import { motion } from "framer-motion";
import Head from "next/head";


export default function Home() {
    return (
      <>
        <Head>
          {/* Primary Meta Tags */}
          <title>Contact Page for Rev. Dave Thompson</title>

          <meta name="title" content="Contact Rev. Dave Thompson" />
          <meta
            name="description"
            content="Contact Rev. Dave Thompson, whether you are a leader in need of care, or someone looking to build common ground!"
          />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://metatags.io/" />
          <meta property="og:title" content="Contact Rev. Dave Thompson" />
          <meta
            property="og:description"
            content="Contact Rev. Dave Thompson, whether you are a leader in need of care, or someone looking to build common ground!"
          />
          <meta
            property="og:image"
            content="https://revdavethompson.com/social-media.jpg"
          />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://metatags.io/" />
          <meta property="twitter:title" content="Contact Rev. Dave Thompson" />
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
            dangerouslySetInnerHTML={addContactMetaJsonLd()}
            key="product-jsonld"
          />
        </Head>
        <Header />

        {/* RDT HUMAN Intro */}
        <section className="pt-10 px-5 pb-16 lg:px-10">
          <div className="container items-center py-24 mx-auto flex flex-wrap">
            <div className="mb-5 w-full inline-flex items-center justify-center md:w-1/2">
              <Image
                className="object-center w-300 h-300 border-solid border-8 border-zinc-300 rounded-full"
                src={rdtAvatar}
                alt="Earth with Big Question Mark on it"
              />
            </div>
            <div className="px-16 pt-5 md:px-10 w-full md:w-1/2 max-w-screen-xl lg:pt-5 lg:pl-20">
              <div className="max-w-screen-lg text-zinc-500 sm:text-lg lg:pl-[10%] md:text-xl dark:text-zinc-400">
                <motion.p
                  className="tracking-snug mb-5"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <span className="text-violet-500 tracking-wide text-2xl font-light">
                    Rev. Dave
                  </span>{" "}
                  is excited to hear from you and is looking forward to{" "}
                  <span className="text-violet-500 tracking-wide text-2xl font-light">
                    serving
                  </span>{" "}
                  you in whatever circumstances you are facing.
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="pt-10 mb-20 px-5 lg:px-10 bg-zinc-100 dark:bg-zinc-800">
          <ContactForm />
        </section>
      </>
    );
}


{
  /* JSON-LD */
}
function addContactMetaJsonLd() {
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