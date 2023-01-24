/*
        FrontCTA Component
*/
import { motion } from "framer-motion";
import TeamSVG from "../components/teamSVG";


export default function FrontCTA() {
    return (
      <section className="mx-auto px-15 p-10">
        <motion.h4
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2 }}
          whileHover={{ scale: 1.05 }}
          className="tracking-widest text-center text-xl md:text-2xl xl:text-4xl uppercase font-medium"
        >
          Let&rsquo;s{" "}
          <span className="text-violet-500 text-3xl xl:text-5xl">imagine</span>{" "}
          our world
        </motion.h4>
        <div className="flex px-10 flex-wrap">
          <div className="w-full pt-10 mb-10 lg:px-10 md:w-1/2">
            <motion.p
              className="ml-5 tracking-snug font-extralight text-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 3 }}
            >
              not{" "}
              <span className="text-zinc-400 text-4xl lg:text-3xl pr-1">
                div
              </span>
              <span className="text-5xl md:text-5xl text-zinc-300 pr-1">|</span>
              <span className="text-zinc-400 text-4xl lg:text-3xl">ided</span>
            </motion.p>
            <motion.p
              className="mb-5 text-right pr-4 tracking-snug font-extralight text-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 3 }}
            >
              by our{" "}
              <span className="text-4xl md:text-4xl text-pink-400">d</span>
              <span className="text-4xl md:text-4xl text-gray-400">i</span>
              <span className="text-4xl md:text-4xl text-violet-400">f</span>
              <span className="text-4xl md:text-4xl text-red-400">f</span>
              <span className="text-4xl md:text-4xl text-green-400">e</span>
              <span className="text-4xl md:text-4xl text-sky-400">r</span>
              <span className="text-4xl md:text-4xl text-fuchsia-400">e</span>
              <span className="text-4xl md:text-4xl text-lime-400">n</span>
              <span className="text-4xl md:text-4xl text-yellow-400">c</span>
              <span className="text-4xl md:text-4xl text-rose-400">e</span>
              <span className="text-4xl md:text-4xl text-orange-400">s</span>,
            </motion.p>
            <motion.p
              className="mb-1 ml-5 text-xl font-extralight"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 5 }}
            >
              but{" "}
              <span className="text-4xl text-violet-400 font-extralight">
                connected
              </span>
            </motion.p>
            <motion.p
              className="text-xl font-extralight text-right"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 5 }}
            >
              by our
              <span className="text-4xl lg:text-4xl text-violet-400 font-extralight">
                {" "}
                common ground.
              </span>
            </motion.p>
          </div>
          <motion.div
            className="w-full md:w-1/2 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 5 }}
          >
            <TeamSVG />
          </motion.div>
        </div>
      </section>
    );
}