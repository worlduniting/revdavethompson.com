/*
    HUMANTimeline Component
*/

import { motion } from "framer-motion";

export default function HUMANTimeline() {
  return (
    <section className="mx-auto py-20 px-6 p-10 bg-zinc-100 dark:bg-zinc-800">
      <h1 className="text-right text-4xl tracking-tight font-medium text-zinc-900 dark:text-white">
        Five simple rules.
      </h1>
      <h2 className="text-right mb-10 text-2xl tracking-tight font-extralight text-zinc-900 dark:text-white">
        For finding common ground
      </h2>
      <div className="container mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden p-10 h-full">
          {/* Timeline Line */}
          <div className="left-24 border-2-2 absolute border-opacity-20 md:left-[50%] border-zinc-700 dark:border-zinc-500 h-full border"></div>

          {/* Honest */}
          <div className="mb-20 flex md:justify-between md:items-center w-full md:right-timeline">
            <div className="order-1 md:w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-violet-500 shadow-xl w-28 h-28 border-solid border-8 border-white rounded-full">
              <h1 className="mx-auto font-semibold text-5xl text-white">H</h1>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="md:ml-2 ml-10 order-1 bg-zinc-200 dark:bg-zinc-400 md:flex-wrap rounded-lg shadow-xl w-2/3 md:w-5/12 px-6 py-4"
            >
              <h2 className="mb-3 text-black font-light text-2xl text-tight">
                Honest
              </h2>
              <p className="leading-snug tracking-wide">
                We must be <strong className="text-xl">honest</strong> about
                what we can and cannot observe or measure.
              </p>
            </motion.div>
          </div>

          {/* Understandable */}
          <div className="mb-20 flex md:justify-between md:flex-row-reverse md:items-center w-full right-timeline md:left-timeline">
            <div className="order-1 md:w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-violet-500 shadow-xl w-28 h-28 border-solid border-8 border-white rounded-full">
              <h1 className="mx-auto font-semibold text-5xl text-white">U</h1>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="md:mr-2 ml-10 md:ml-0 order-1 bg-zinc-200 dark:bg-zinc-400 md:flex-wrap rounded-lg shadow-xl w-2/3 md:w-5/12 px-6 py-4"
            >
              <h2 className="text-right mb-3 text-black font-light text-2xl text-tight">
                Understandable
              </h2>
              <p className="text-right leading-snug tracking-wide mb-3">
                We must work to build{" "}
                <strong className="text-xl">understanding</strong>, so that
                every person can truly understand what is being agreed upon.
              </p>
            </motion.div>
          </div>

          {/* Measurable */}
          <div className="mb-20 flex md:justify-between md:items-center w-full md:right-timeline">
            <div className="order-1 md:w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-violet-500 shadow-xl w-28 h-28 border-solid border-8 border-white rounded-full">
              <h2 className="mx-auto font-semibold text-5xl text-white">M</h2>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="md:ml-2 ml-10 order-1 bg-zinc-200 dark:bg-zinc-400 md:flex-wrap rounded-lg shadow-xl w-2/3 md:w-5/12 px-6 py-4"
            >
              <h3 className="mb-3 text-black font-light text-2xl text-tight">
                Measurable
              </h3>
              <p className="leading-snug tracking-wide">
                We must provide{" "}
                <strong className="text-xl">measurable proof</strong> for the
                claims that we make and accept.
              </p>
            </motion.div>
          </div>

          {/* Achievable */}
          <div className="mb-20 flex md:justify-between md:flex-row-reverse md:items-center w-full right-timeline md:left-timeline">
            <div className="order-1 md:w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-violet-500 shadow-xl w-28 h-28 border-solid border-8 border-white rounded-full">
              <h1 className="mx-auto font-semibold text-5xl text-white">A</h1>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="md:mr-2 ml-10 md:ml-0 order-1 bg-zinc-200 dark:bg-zinc-400 md:flex-wrap rounded-lg shadow-xl w-2/3 md:w-5/12 px-6 py-4"
            >
              <h3 className="text-right mb-3 text-black font-light text-2xl text-tight">
                Achievable
              </h3>
              <p className="text-right leading-snug tracking-wide">
                We must only require of others what is{" "}
                <strong className="text-slate-500 text-xl">achievable</strong>{" "}
                without suffering.
              </p>
            </motion.div>
          </div>

          {/* Negotiable */}
          <div className="mb-20 flex md:justify-between md:items-center w-full md:right-timeline">
            <div className="order-1 md:w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-violet-500 shadow-xl w-28 h-28 border-solid border-8 border-white rounded-full">
              <h1 className="mx-auto font-semibold text-5xl text-white">N</h1>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="ml-10 md:ml-2 order-1 bg-zinc-200 dark:bg-zinc-400 rounded-lg shadow-xl w-2/3 md:w-5/12 px-6 py-4"
            >
              <h3 className="mb-3 text-black font-light text-2xl text-tight">
                Negotiable
              </h3>
              <p className="leading-snug tracking-wide mb-3">
                In an ever-changing universe, we must agree to be{" "}
                <strong className="text-xl">negotiable</strong> with our rules,
                so they continue to remain HUMAN.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
