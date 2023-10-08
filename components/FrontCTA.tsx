/*
        FrontCTA Component
*/
import { motion } from "framer-motion";
import TeamSVG from "../components/teamSVG";
import Image from "next/image";
import Extreme from "../public/svgs/extreme-cultures.svg"


export default function FrontCTA() {
    return (
      <section className="p-10 mx-auto px-15">
        <motion.h4
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2 }}
          whileHover={{ scale: 1.05 }}
          className="text-xl font-medium tracking-widest text-center uppercase md:text-2xl xl:text-3xl"
        >
          Let&rsquo;s{" "}
          <span className="text-3xl text-violet-500 xl:text-5xl md:text-4xl">imagine</span>{" "}
          our world
        </motion.h4>
        <div className="flex flex-wrap px-10">
          <div className="w-full pt-10 mb-10 text-center md:w-1/2">
            <motion.p
              className="text-xl font-light lg:text-3xl tracking-snug"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 3 }}
            >
              not <span className="text-3xl lg:text-4xl"> divided</span>
            </motion.p>
            <motion.p
              className="mb-5 text-xl font-light lg:text-3xl"
              initial={{ opacity: 0, y: -25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 3 }}
            >
              by our{" "}
              <span className="text-3xl text-blue-500 lg:text-5xl">
                differ
              </span>
              <span className="text-3xl text-red-400 lg:text-4xl">ences</span>
            </motion.p>
            <motion.p
              className="mb-1 text-xl font-light lg:text-3xl"
              initial={{ opacity: 0, y: -25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 5 }}
            >
              but{" "}
              <span className="text-3xl font-light lg:text-4xl">
                {" "}
                connected
              </span>
            </motion.p>
            <motion.p
              className="text-xl font-light text-center lg:text-3xl"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 5 }}
            >
              by our{" "}
              <span className="text-3xl font-light lg:text-4xl text-violet-500">
                {" "}
                common ground.
              </span>
            </motion.p>
          </div>
          <motion.div
            className="items-center w-full md:w-1/2"
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