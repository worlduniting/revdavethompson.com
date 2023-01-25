/*
    HUMANTimeline Component
*/

import { motion } from "framer-motion";

export default function HUMANTimeline() {
  return (
    <section className="mx-auto py-20 px-6 p-10">
      <h1 className="text-4xl ml-5 tracking-tight font-medium text-zinc-900 dark:text-white">
        Five simple rules.
      </h1>
      <h2 className="mb-10 ml-5 text-2xl tracking-tight font-extralight text-zinc-900 dark:text-white">
        For finding common ground
      </h2>
      <div className="container mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden h-full">
          {/* Timeline Line */}
          <div className="left-14 border-2-2 absolute border-opacity-20 md:left-[50%] border-zinc-700 dark:border-zinc-500 h-full border"></div>

          {/* Honest */}
          <div className="mb-20 flex md:justify-between md:items-center w-full md:right-timeline">
            <div className="order-1 md:w-5/12"></div>
            <div className="z-20 flex ml-4 items-center order-1 bg-violet-500 shadow-xl md:w-28 md:h-28 w-20 h-20 border-solid border-8 border-white rounded-full">
              <h1 className="mx-auto font-semibold text-5xl text-white ">H</h1>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="md:ml-5 xl:ml-5 lg:ml-5 ml-5 order-1 bg-zinc-200 dark:bg-zinc-400 md:flex-wrap rounded-lg shadow-xl w-2/3 md:w-2/5 xl:w-5/12 px-6 py-4"
            >
              <h2 className="mb-3 text-zinc-800 font-light text-2xl text-tight">
                Be{" "}
                <span className="mx-1 text-violet-600 dark:text-white font-medium text-4xl">
                  H
                </span>
                onest
              </h2>
              <p className="leading-snug tracking-wide">
                We must be{" "}
                <strong className="text-2xl font-medium">honest</strong> about
                what we can and cannot observe.
              </p>
            </motion.div>
          </div>

          {/* Understandable */}
          <div className="mb-20 flex md:justify-between md:flex-row-reverse md:items-center w-full right-timeline md:left-timeline">
            <div className="order-1 md:w-5/12"></div>
            <div className="z-20 ml-4 flex items-center order-1 bg-violet-500 shadow-xl w-20 h-20 md:w-28 md:h-28 border-solid border-8 border-white rounded-full">
              <h1 className="mx-auto font-semibold text-5xl text-white">U</h1>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="md:mr-1 lg:mr-5 xl:mr-1 ml-3 order-1 bg-zinc-200 dark:bg-zinc-400 md:flex-wrap rounded-lg shadow-xl w-2/3 xl:w-[39%] md:w-[37%] px-4 py-4"
            >
              <h2 className="text-right mb-3 text-zinc-800 font-light text-xl text-tight">
                Be{" "}
                <span className="mx-1 text-violet-600 dark:text-white font-medium text-4xl">
                  U
                </span>
                nderstandable
              </h2>
              <p className="text-right leading-snug tracking-wide mb-3">
                We must work to build{" "}
                <strong className="text-2xl font-medium">understanding</strong>,
                so everyone understands what is being agreed upon.
              </p>
            </motion.div>
          </div>

          {/* Measurable */}
          <div className="mb-20 flex md:justify-between md:items-center w-full md:right-timeline">
            <div className="order-1 md:w-5/12"></div>
            <div className="z-20 flex ml-4 items-center order-1 bg-violet-500 shadow-xl md:w-28 md:h-28 w-20 h-20 border-solid border-8 border-white rounded-full">
              <h2 className="mx-auto font-semibold text-5xl text-white">M</h2>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="md:ml-5 xl:ml-5 lg:ml-5 ml-5 order-1 bg-zinc-200 dark:bg-zinc-400 md:flex-wrap rounded-lg shadow-xl w-2/3 md:w-2/5 xl:w-5/12 px-6 py-4"
            >
              <h3 className="mb-3 text-black font-light text-2xl text-tight">
                Be{" "}
                <span className="mx-1 text-violet-600 dark:text-white font-medium text-4xl">
                  M
                </span>
                easurable
              </h3>
              <p className="leading-snug tracking-wide">
                We must provide{" "}
                <strong className="text-2xl font-medium">
                  measurable proof
                </strong>{" "}
                for the claims we make.
              </p>
            </motion.div>
          </div>

          {/* Achievable */}
          <div className="mb-20 flex md:justify-between md:flex-row-reverse md:items-center w-full right-timeline md:left-timeline">
            <div className="order-1 md:w-5/12"></div>
            <div className="z-20 ml-4 flex items-center order-1 bg-violet-500 shadow-xl w-20 h-20 md:w-28 md:h-28 border-solid border-8 border-white rounded-full">
              <h1 className="mx-auto font-semibold text-5xl text-white">A</h1>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="md:mr-1 lg:mr-5 xl:mr-0 ml-5 order-1 bg-zinc-200 dark:bg-zinc-400 md:flex-wrap rounded-lg shadow-xl w-2/3 xl:w-[39%] md:w-[37%] px-4 py-4"
            >
              <h3 className="text-right mb-3 text-black font-light text-2xl text-tight">
                Be{" "}
                <span className="mx-1 text-violet-600 dark:text-white font-medium text-4xl">
                  A
                </span>
                chievable
              </h3>
              <p className="text-right leading-snug tracking-wide">
                We must only require of others what is{" "}
                <strong className="text-2xl font-medium">achievable</strong>{" "}
                without suffering.
              </p>
            </motion.div>
          </div>

          {/* Negotiable */}
          <div className="mb-20 flex md:justify-between md:items-center w-full md:right-timeline">
            <div className="order-1 md:w-5/12"></div>
            <div className="z-20 flex ml-4 items-center order-1 bg-violet-500 shadow-xl md:w-28 md:h-28 w-20 h-20 border-solid border-8 border-white rounded-full">
              <h1 className="mx-auto font-semibold text-5xl text-white">N</h1>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="md:ml-5 xl:ml-5 lg:ml-5 ml-5 order-1 bg-zinc-200 dark:bg-zinc-400 md:flex-wrap rounded-lg shadow-xl w-2/3 md:w-2/5 xl:w-5/12 px-6 py-4"
            >
              <h3 className="mb-3 text-black font-light text-2xl text-tight">
                Be{" "}
                <span className="mx-1 text-violet-600 dark:text-white font-medium text-4xl">
                  N
                </span>
                egotiable
              </h3>
              <p className="leading-snug tracking-wide mb-3">
                In an ever-changing universe, we must agree to be{" "}
                <strong className="text-2xl font-medium">negotiable</strong>{" "}
                with our rules, so they continue to remain HUMAN.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
