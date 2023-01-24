/*
        htmlHead Component
*/

import Head from "next/head";


export default function HtmlHead() {
    return (
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
    )
}