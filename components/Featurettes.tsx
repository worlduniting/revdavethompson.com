/*
        Featurettes Component
*/
import Image from "next/image";
import YouTube from "../public/YouTube.jpg";
import poliSmall from "../public/poli-sm.jpg";
import allSaints from "../public/all-saints.jpg";
import help from "../public/svgs/HelpSVG.svg";
import speaking from "../public/svgs/speaking.svg";
import Speaking from "./modals/Speaking";
import Lccc from "./modals/Lccc";
import { motion } from "framer-motion";

export default function Featurettes() {
  return (
    <>
      <section className="body-front">
        <div className="container items-center py-24 mx-auto flex flex-wrap">
          {/* Speaking & Engagements Feature */}
          <motion.div
            className="mb-5 w-full inline-flex items-center justify-center md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 100, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              alt="Rev Dave shaking hand with Presidential candidate."
              className="object-center w-300 h-300 border-solid border-8 border-zinc-300 rounded-full"
              src={allSaints}
            />
          </motion.div>
          <div className="flex flex-col flex-wrap lg:py-6 mb-10 md:w-1/2 md:pl-12 md:text-left text-center">
            <div className="flex flex-col mb-10 md:items-start items-center">
              <div className="w-20 h-20 border-solid border-4 border-zinc-300 inline-flex items-center justify-center rounded-full bg-white text-purple-500 mb-5">
                <Image
                  alt="Speaking Icon"
                  className="object-center rounded-full w-16 h-16"
                  src={speaking}
                />
              </div>
              <div className="flex-grow items-center">
                <h2 className="text-3xl pb-3 border-solid md:border-b-2 border-zinc-300 title-font font-medium mb-3">
                  Speaking
                  <br />& Engagements
                </h2>
                <p className="leading-relaxed mb-5 text-base">
                  Rev. Dave has spoken with audiences large and small, bringing
                  a message of common ground and peace to his listeners. His
                  disarming nature continues to leave his audiences with expanded
                  horizons and a renewed hope for peace. Rev. Dave would
                  welcoming the opportunity to speak at your college, business,
                  church, organization, or small group.
                </p>
                <Speaking />
              </div>
            </div>
          </div>

          {/* Leadership CCC Feature */}
          <motion.div
            className="mb-5 w-full inline-flex items-center justify-center md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 100, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              alt="Rev Dave shaking hand with Presidential candidate."
              className="object-center w-300 h-300 border-solid border-8 border-zinc-300 rounded-full"
              src={poliSmall}
            />
          </motion.div>
          <div className="flex flex-col flex-wrap mt-14 lg:py-6 mb-10 md:w-1/2 md:pl-12 md:text-left text-center">
            <div className="flex flex-col mb-10 md:items-start items-center">
              <div className="w-20 h-20 border-solid border-4 border-zinc-300 inline-flex items-center justify-center rounded-full bg-white text-purple-500 mb-5">
                <Image
                  alt="Leadership Help Icon"
                  className="object-center rounded-full w-16 h-16"
                  src={help}
                />
              </div>
              <div className="flex-grow">
                <h2 className="text-3xl pb-3 border-solid border-b-2 border-zinc-300 title-font font-medium mb-3">
                  Confidential
                  <br />
                  Leadership Care
                </h2>
                <p className="leading-relaxed text-base mb-3 px-16">
                  It can be <span className="text-2xl font-light">lonely</span>{" "}
                  living in the{" "}
                  <span className="text-2xl font-light">glass house</span> of{" "}
                  <span className="text-2xl font-light">leadership</span>.
                </p>
                <p className="leading-relaxed text-base mb-3">
                  When everyone is looking to you for help with their problems,
                  where do you look for help with yours?
                </p>
                <p className="leading-relaxed text-base mb-5">
                  For over twenty years, Rev Dave has served as a
                  confidential resource for leaders around the world: CEO's,
                  Ministers, Political Leaders, and more. His unbiased
                  understanding and long experience with divisive and delicate
                  issues, has helped leaders navigate these challenging waters,
                  whether within their organization, or in their own personal
                  lives.
                </p>
                <Lccc />
              </div>
            </div>
          </div>

          {/* Youtube Channel Feature */}
          <motion.div
            className="mb-5 w-full inline-flex items-center justify-center md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 100, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              alt="Rev Dave YouTube Channel Cover Image with Rev Dave at table"
              className="object-center w-300 h-300 border-solid border-8 border-zinc399 rounded-full"
              src={YouTube}
            />
          </motion.div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 md:w-1/2 md:pl-12 md:text-left text-center">
            <div className="flex flex-col mb-10 md:items-start items-center">
              <div className="w-20 h-20 border-solid border-4 border-zinc-300 inline-flex items-center justify-center rounded-full bg-white text-purple-500 mb-5">
                {/* YouTube SVG Graphic */}
                <svg
                  aria-hidden="true"
                  className="w-12 h-12"
                  fill="currentColor"
                  id="Layer_1"
                  viewBox="0 0 461 461"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      fillRule="evenodd"
                      fill="currentColor"
                      d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728
		c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137
		C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607
		c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"
                      clipRule="evenodd"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-3xl pb-3 border-solid border-b-2 border-zinc-300 title-font font-medium mb-3">
                  Rev. Dave&rsquo;s<br /> YouTube Channel
                </h2>
                <p className="leading-relaxed text-base mb-5">
                  Rev Dave began his YouTube channel in the hopes of providing
                  his audience with a uniquely HUMAN perspective, focusing on
                  only those things that we as humans hold together as common
                  ground.
                </p>
                <a
                  className="text-purple-500 inline-flex items-center"
                  href="https://youtube.com/revdavethompson"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    data-modal-target="top-center-modal"
                    data-modal-toggle="top-center-modal"
                    className="block text-white bg-violet-400 hover:bg-violet-500 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
                    type="button"
                  >
                    Visit
                  </button>
                  <span className="ml-5 dark:text-violet-400">(Don't forget to Subscribe!)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
