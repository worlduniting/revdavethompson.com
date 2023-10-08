/*
    HUMANTimeline Component
*/

import { motion } from "framer-motion";

export default function HUMANTimeline() {
  return (
    <section className="p-10 px-6 py-20 mx-auto">
      <h1 className="ml-5 text-4xl font-medium tracking-tight text-zinc-900 dark:text-white">
        Five simple rules
      </h1>
      <h2 className="mb-10 ml-5 text-2xl tracking-tight font-extralight text-zinc-900 dark:text-white">
        For finding common ground
      </h2>
      <div className="container w-full h-full mx-auto">
        <div className="relative h-full overflow-hidden wrap">
          {/* Timeline Line */}
          <div className="left-14 border-2-2 absolute border-opacity-20 md:left-[50%] border-zinc-700 dark:border-zinc-500 h-full border"></div>

          {/* Honest */}
          <div className="flex w-full mb-20 md:justify-between md:items-center md:right-timeline">
            <div className="order-1 md:w-5/12"></div>
            <div className="z-20 flex items-center order-1 w-20 h-20 ml-4 border-8 border-white border-solid rounded-full shadow-xl bg-violet-500 md:w-28 md:h-28">
              <h1 className="mx-auto text-5xl font-semibold text-white ">H</h1>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="order-1 w-2/3 px-6 py-4 ml-5 rounded-lg shadow-xl md:ml-5 xl:ml-5 lg:ml-5 bg-zinc-200 dark:bg-zinc-400 md:flex-wrap md:w-2/5 xl:w-5/12"
            >
              <h2 className="mb-3 text-2xl font-light text-zinc-800 text-tight">
                Be{" "}
                <span className="mx-1 text-4xl font-medium text-violet-600 dark:text-white">
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
          <div className="flex w-full mb-20 md:justify-between md:flex-row-reverse md:items-center right-timeline md:left-timeline">
            <div className="order-1 md:w-5/12"></div>
            <div className="z-20 flex items-center order-1 w-20 h-20 ml-4 border-8 border-white border-solid rounded-full shadow-xl bg-violet-500 md:w-28 md:h-28">
              <h1 className="mx-auto text-5xl font-semibold text-white">U</h1>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="md:mr-1 lg:mr-5 xl:mr-1 ml-3 order-1 bg-zinc-200 dark:bg-zinc-400 md:flex-wrap rounded-lg shadow-xl w-2/3 xl:w-[39%] md:w-[37%] px-4 py-4"
            >
              <h2 className="mb-3 text-xl font-light text-right text-zinc-800 text-tight">
                Be{" "}
                <span className="mx-1 text-4xl font-medium text-violet-600 dark:text-white">
                  U
                </span>
                nderstandable
              </h2>
              <p className="mb-3 leading-snug tracking-wide text-right">
                We must work to build{" "}
                <strong className="text-2xl font-medium">understanding</strong>,
                so everyone understands what is being agreed upon.
              </p>
            </motion.div>
          </div>

          {/* Measurable */}
          <div className="flex w-full mb-20 md:justify-between md:items-center md:right-timeline">
            <div className="order-1 md:w-5/12"></div>
            <div className="z-20 flex items-center order-1 w-20 h-20 ml-4 border-8 border-white border-solid rounded-full shadow-xl bg-violet-500 md:w-28 md:h-28">
              <h2 className="mx-auto text-5xl font-semibold text-white">M</h2>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="order-1 w-2/3 px-6 py-4 ml-5 rounded-lg shadow-xl md:ml-5 xl:ml-5 lg:ml-5 bg-zinc-200 dark:bg-zinc-400 md:flex-wrap md:w-2/5 xl:w-5/12"
            >
              <h3 className="mb-3 text-2xl font-light text-black text-tight">
                Be{" "}
                <span className="mx-1 text-4xl font-medium text-violet-600 dark:text-white">
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
          <div className="flex w-full mb-20 md:justify-between md:flex-row-reverse md:items-center right-timeline md:left-timeline">
            <div className="order-1 md:w-5/12"></div>
            <div className="z-20 flex items-center order-1 w-20 h-20 ml-4 border-8 border-white border-solid rounded-full shadow-xl bg-violet-500 md:w-28 md:h-28">
              <h1 className="mx-auto text-5xl font-semibold text-white">A</h1>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="md:mr-1 lg:mr-5 xl:mr-0 ml-5 order-1 bg-zinc-200 dark:bg-zinc-400 md:flex-wrap rounded-lg shadow-xl w-2/3 xl:w-[39%] md:w-[37%] px-4 py-4"
            >
              <h3 className="mb-3 text-2xl font-light text-right text-black text-tight">
                Be{" "}
                <span className="mx-1 text-4xl font-medium text-violet-600 dark:text-white">
                  A
                </span>
                chievable
              </h3>
              <p className="leading-snug tracking-wide text-right">
                We must only require of others what is{" "}
                <strong className="text-2xl font-medium">achievable</strong>{" "}
                without suffering.
              </p>
            </motion.div>
          </div>

          {/* Negotiable */}
          <div className="flex w-full mb-20 md:justify-between md:items-center md:right-timeline">
            <div className="order-1 md:w-5/12"></div>
            <div className="z-20 flex items-center order-1 w-20 h-20 ml-4 border-8 border-white border-solid rounded-full shadow-xl bg-violet-500 md:w-28 md:h-28">
              <h1 className="mx-auto text-5xl font-semibold text-white">N</h1>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="order-1 w-2/3 px-6 py-4 ml-5 rounded-lg shadow-xl md:ml-5 xl:ml-5 lg:ml-5 bg-zinc-200 dark:bg-zinc-400 md:flex-wrap md:w-2/5 xl:w-5/12"
            >
              <h3 className="mb-3 text-2xl font-light text-black text-tight">
                Be{" "}
                <span className="mx-1 text-4xl font-medium text-violet-600 dark:text-white">
                  N
                </span>
                egotiable
              </h3>
              <p className="mb-3 leading-snug tracking-wide">
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
