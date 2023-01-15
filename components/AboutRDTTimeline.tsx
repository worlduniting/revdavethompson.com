/*
    AboutRDTTimeline Component
*/

import { motion } from "framer-motion";
import Image from "next/image";
import Nu from "../public/nu-180x180.png";
import OcBook from "../public/oc-book-sqr.jpg";
import Poli from "../public/poli-logo.jpg";
import Starbucks from "../public/starbucks.png";
import Gordon from "../public/gordonconwell.jpg";
import Disc from "../public/disclaimer.jpg";
import Human from "../public/book-cover-sq.jpg";
import CHBS from "../public/chbs-crcl.png";
import Link from "next/link";

export default function AboutRDTTimeline() {
  return (
    <section className="mx-auto py-20 px-6 p-10 bg-zinc-100 dark:bg-zinc-800">
      <h1 className="text-right text-4xl tracking-tight font-medium text-zinc-900 dark:text-white">
        Rev. &nbsp;Dave&rsquo;s Journey.
      </h1>
      <h2 className="text-right mb-10 text-2xl tracking-tight font-extralight text-zinc-900 dark:text-white">
        Stops along the road
      </h2>
      <div className="container mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden p-10 h-full">
          {/* Timeline Line */}
          <div className="left-24 border-2-2 absolute border-opacity-20 md:left-[50%] border-zinc-700 dark:border-zinc-500 h-full border"></div>

          {/* Northwest University */}
          <div className="mb-20 flex md:justify-between md:items-center w-full md:right-timeline">
            <div className="order-1 md:w-5/12"></div>
            <div className="z-20 flex md:items-center order-1 bg-violet-500 shadow-xl w-28 h-28 border-solid border-8 border-violet-500 rounded-full">
              <Image
                className="shadow rounded-full max-w-full h-auto align-middle border-none"
                src={Nu}
                alt="Northwest University Logo"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="ml-10 md:ml-2 order-1 bg-zinc-200 dark:bg-zinc-400 rounded-lg shadow-xl w-2/3 md:w-5/12 px-6 py-4"
            >
              <h3 className="mb-3 text-black font-light text-2xl text-tight">
                1995
              </h3>
              <h4 className="font-bold text-2xl text-violet-600">
                Ministry Education
              </h4>
              <h5 className="text-black font-light text-xl mb-5">
                Northwest University
              </h5>
              <p className="leading-snug tracking-wide">
                Rev. Dave began his career as a Christian Minister, studying
                with a BA in Religion & Philosophy, while also focusing on
                ancient culture and the translation of ancient Biblical texts.
              </p>
            </motion.div>
          </div>

          {/* Gordon Conwell Theological Seminary */}
          <div className="mb-20 flex md:justify-between md:flex-row-reverse md:items-center w-full right-timeline md:left-timeline">
            <div className="order-1 md:w-5/12"></div>
            <div className="z-20 flex md:items-center order-1 bg-violet-500 shadow-xl w-28 h-28 border-solid border-8 border-violet-500 rounded-full">
              <Image
                className="shadow rounded-full max-w-full h-auto align-middle border-none"
                src={Gordon}
                alt="Gordon Conwell Theological Seminary Logo"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="md:mr-2 ml-10 md:ml-0 order-1 bg-zinc-200 dark:bg-zinc-400 md:flex-wrap rounded-lg shadow-xl w-2/3 md:w-5/12 px-6 py-4"
            >
              <h3 className="md:text-right mb-3 text-black font-light text-2xl text-tight">
                1998
              </h3>
              <h4 className="font-bold text-2xl text-violet-600 md:text-right">
                Theology Education
              </h4>
              <h5 className="md:text-right text-black font-light text-xl mb-5">
                Gordon Conwell Theological Seminary
              </h5>
              <p className="md:text-right leading-snug tracking-wide">
                Rev. Dave continued his ministry studies, entering a Masters in
                Theology program, forcusing on conflict resolution.
                Additionally, he worked to receive a Certificate in Religion &
                Social Conflict from the Boston Theological Institute, while
                also working in distributed and online education.
              </p>
            </motion.div>
          </div>

          {/* Admin Northwest University */}
          <div className="mb-20 flex md:justify-between md:items-center w-full md:right-timeline">
            <div className="order-1 md:w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-violet-500 shadow-xl w-28 h-28 border-solid border-8 border-violet-500 rounded-full">
              <Image
                className="shadow rounded-full max-w-full h-auto align-middle border-none"
                src={Nu}
                alt="Northwest University Logo"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="md:ml-2 ml-10 order-1 bg-zinc-200 dark:bg-zinc-400 md:flex-wrap rounded-lg shadow-xl w-2/3 md:w-5/12 px-6 py-4"
            >
              <h3 className="mb-3 text-black font-light text-2xl text-tight">
                2000
              </h3>
              <h4 className="font-bold text-2xl text-violet-600">
                Education Administration
              </h4>
              <h5 className="text-black font-light text-xl mb-5">
                Northwest University
              </h5>
              <p className="leading-snug tracking-wide">
                Being disillusioned with his lack of experience in the business
                and politics of social conflict, Rev. Dave continued his work in
                Education Administration, focusing on non-traditional students
                and serving as the Director of Online Education. He spent these
                years reflecting on his next course of action.
              </p>
            </motion.div>
          </div>

          {/* Policorp Corporation */}
          <div className="mb-20 flex md:justify-between md:flex-row-reverse md:items-center w-full right-timeline md:left-timeline">
            <div className="order-1 md:w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-violet-500 shadow-xl w-28 h-28 border-solid border-8 border-violet-500 rounded-full">
              <Image
                className="shadow rounded-full max-w-full h-auto align-middle border-none"
                src={Poli}
                alt="Policorp Corporation Logo"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="md:mr-2 ml-10 md:ml-0 order-1 bg-zinc-200 dark:bg-zinc-400 md:flex-wrap rounded-lg shadow-xl w-2/3 md:w-5/12 px-6 py-4"
            >
              <h3 className="text-right mb-3 text-black font-light text-2xl text-tight">
                2003
              </h3>
              <h4 className="font-bold text-2xl text-violet-600 text-right">
                Political Consulting
              </h4>
              <h5 className="text-right text-black font-light text-xl mb-5">
                Policorp Corporation <span className="text-sm">(Founder)</span>
              </h5>
              <p className="text-right leading-snug tracking-wide mb-3">
                In an effort to broaden his understand of social conflict, Rev.
                Dave left formal ministry and launched a political consulting
                firm.
              </p>
              <p className="text-right leading-snug tracking-wide mb-3">
                During these years he was fortunate to work with local, state,
                national and global political campaigns, managing communications
                and public relations.
              </p>
              <p className="text-right leading-snug tracking-wide">
                Finding he had a knack for software, he also built one of the
                first open source software platforms to manage political
                campaigns.
              </p>
            </motion.div>
          </div>

          {/* Starbucks Corporation */}
          <div className="mb-20 flex md:justify-between md:items-center w-full md:right-timeline">
            <div className="order-1 md:w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-violet-500 shadow-xl w-28 h-28 border-solid border-8 border-violet-500 rounded-full">
              <Image
                className="shadow rounded-full max-w-full h-auto align-middle border-none"
                src={Starbucks}
                alt="Starbucks Corporation Logo"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="md:ml-2 ml-10 order-1 bg-zinc-200 dark:bg-zinc-400 md:flex-wrap rounded-lg shadow-xl w-2/3 md:w-5/12 px-6 py-4"
            >
              <h3 className="mb-3 text-black font-light text-2xl text-tight">
                2007
              </h3>
              <h4 className="font-bold text-2xl text-violet-600">
                Fortune 500 & Tech
              </h4>
              <h5 className="text-black font-light text-xl mb-5">
                Starbucks Corporation
              </h5>
              <p className="leading-snug tracking-wide">
                While closing his political consulting firm, Rev. Dave worked as
                a Barista at Starbucks. He was then promoted, becoming the Lead
                Application Developer for Starbucks&rsquo; Global Business
                Services Solutions.
              </p>
            </motion.div>
          </div>

          {/* Disclaimer CD */}
          <div className="mb-20 flex md:justify-between md:flex-row-reverse md:items-center w-full right-timeline md:left-timeline">
            <div className="order-1 md:w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-violet-500 shadow-xl w-28 h-28 border-solid border-8 border-violet-500 rounded-full">
              <Image
                className="shadow rounded-full max-w-full h-auto align-middle border-none"
                src={Disc}
                alt="Disclaimer CD Cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="md:mr-2 ml-10 md:ml-0 order-1 bg-zinc-200 dark:bg-zinc-400 md:flex-wrap rounded-lg shadow-xl w-2/3 md:w-5/12 px-6 py-4"
            >
              <h3 className="text-right mb-3 text-black font-light text-2xl text-tight">
                2009
              </h3>
              <h4 className="font-bold text-2xl text-violet-600 text-right">
                Recorded Musician
              </h4>
              <h5 className="text-right text-black font-light text-xl mb-5">
                Disclaimer CD
              </h5>
              <p className="text-right leading-snug tracking-wide">
                Rev. Dave has spent most of his life performing music
                (piano/singing) in venues of all sorts. In 2009 he decided to
                check a box off his bucket list, and put out a cd of his own
                original compositions called{" "}
                <Link
                  href="https://store.cdbaby.com/cd/dathompson"
                  className="text-violet-600 hover:text-violet-400"
                >
                  Disclaimer
                </Link>
                .
              </p>
            </motion.div>
          </div>

          {/* Over Coffee Book */}
          <div className="mb-20 flex md:justify-between md:items-center w-full md:right-timeline">
            <div className="order-1 md:w-5/12"></div>
            <div className="z-20 flex md:items-center order-1 bg-violet-500 shadow-xl w-28 h-28 border-solid border-8 border-violet-500 rounded-full">
              <Image
                className="shadow rounded-full max-w-full h-auto align-middle border-none"
                src={OcBook}
                alt="Over Coffee Book Cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="ml-10 md:ml-2 order-1 bg-zinc-200 dark:bg-zinc-400 rounded-lg shadow-xl w-2/3 md:w-5/12 px-6 py-4"
            >
              <h3 className="mb-3 text-black font-light text-2xl text-tight">
                2010
              </h3>
              <h4 className="font-bold text-2xl text-violet-600">
                Author & Speaker
              </h4>
              <h5 className="text-black font-light text-xl mb-5">
                Over Coffee Book
              </h5>
              <p className="leading-snug tracking-wide mb-3">
                After years of reseach and reflection, Rev. Dave returned to
                formal ministry, launching his first book,{" "}
                <Link
                  href="https://amzn.to/2teKwO3"
                  className="text-violet-600 hover:text-violet-400"
                >
                  Over Coffee: a conversation for gay partnership and
                  conservative faith
                </Link>
                .
              </p>
              <p>
                This was his chance to work on a piece of religion and social
                conflict that was close to home. Since he began, he has reached
                across the political and spiritual divides to meet privately,
                over coffee, with hundreds of conservative and liberal ministers
                and leaders, providing a safe-space for them to talk about gay
                &#40;and other sexuality&#41; issues in their ministries,
                organizations or personal lives.
              </p>
            </motion.div>
          </div>

          {/* YouTube CHBS */}
          <div className="mb-20 flex md:justify-between md:flex-row-reverse md:items-center w-full right-timeline md:left-timeline">
            <div className="order-1 md:w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-violet-500 shadow-xl w-28 h-28 border-solid border-8 border-violet-500 rounded-full">
              <Image
                className="shadow rounded-full max-w-full h-auto align-middle border-none"
                src={CHBS}
                alt="CIVIL HUMAN Bible Study"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="md:mr-2 ml-10 md:ml-0 order-1 bg-zinc-200 dark:bg-zinc-400 md:flex-wrap rounded-lg shadow-xl w-2/3 md:w-5/12 px-6 py-4"
            >
              <h3 className="text-right mb-3 text-black font-light text-2xl text-tight">
                2019
              </h3>
              <h4 className="font-bold text-2xl text-violet-600 text-right">
                YouTube Personality
              </h4>
              <h5 className="text-right text-black font-light text-xl mb-5">
                CIVIL HUMAN Bible STudy
              </h5>
              <p className="text-right leading-snug tracking-wide">
                Rev. Dave launched his{" "}
                <Link
                  href="http://youtube.com/revdavethompson"
                  className="text-violet-600 hover:text-violet-400"
                >
                  YouTube Channel
                </Link>{" "}
                and{" "}
                <Link
                  href="http://youtube.com/revdavethompson"
                  className="text-violet-600 hover:text-violet-400"
                >
                  a biblical study
                </Link>{" "}
                searching for human common ground from within his own spiritual
                heritage. His unique approach led him to consider the Gospel of
                Matthew, from a purely HUMAN perspective, attempting to find
                those teachings that every person can hold in common, regardless
                of their race, creed or color.
              </p>
            </motion.div>
          </div>

          {/* Becoming Human Book */}
          <div className="flex md:justify-between md:items-center w-full md:right-timeline">
            <div className="order-1 md:w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-violet-500 shadow-xl w-28 h-28 border-solid border-8 border-violet-500 rounded-full">
              <Image
                className="shadow rounded-full max-w-full h-auto align-middle border-none"
                src={Human}
                alt="Becoming Human Book Cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="md:ml-2 ml-10 order-1 bg-zinc-200 dark:bg-zinc-400 md:flex-wrap rounded-lg shadow-xl w-2/3 md:w-5/12 px-6 py-4"
            >
              <h3 className="mb-3 text-black font-light text-2xl text-tight">
                2023
              </h3>
              <h4 className="font-bold text-2xl text-violet-600">
                Author & Speaker
              </h4>
              <h5 className="text-black font-light text-xl mb-5">
                Becoming HUMAN
              </h5>
              <p className="leading-snug tracking-wide">
                In this gripping survival story, Rev Dave shares his harrowing
                account, facing death in the grips of a deadly mountaintop
                storm, forcing him to wrestle with the inescapable rules about
                our shared human truth.
                <br />
                <br />
                In the midst of each new challenge, we get a unique look into
                the spiritual and philisophic struggles of a Christian Minister
                as he stands on the precipace of death. With each new
                development we begin to see him pulling back layer after layer
                of his beliefs, until he is left to wrestle with only those
                truths that we as human beings must acknowledge.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
