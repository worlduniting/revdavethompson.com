export default function HomeMeta() {
  return (
    <>
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
