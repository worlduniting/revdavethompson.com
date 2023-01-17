import Header from "../../components/Header";
import earth from "../../public/svgs/urban-earth.svg";
import rdtAvatar from "../../public/svgs/rdt-avatar.svg";
import Image from "next/image";
import HUMANTimeline from "../../components/HUMANTimeline";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Header />

      {/* A HUMAN Ethic */}
      <section className="pt-10 px-5 lg:px-10">
        <h1 className="pr-10 text-3xl tracking-tight font-bold">
          A <span className="text-violet-400 text-4xl ">HUMAN</span> Ethic.
        </h1>
        <div className="flex items-center flex-wrap">
          <div className="px-16 pt-5 md:px-10 w-full md:w-1/2 max-w-screen-xl lg:pt-5 lg:pl-20">
            <div className="max-w-screen-lg text-zinc-500 sm:text-lg lg:pl-[10%] md:text-sm dark:text-zinc-400">
              <motion.p
                className="tracking-snug font-extralight text-xl"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 3 }}
              >
                IN our <span className="text-3xl lg:text-5xl">internet</span>{" "}
                world,
              </motion.p>
              <motion.p
                className="text-right mb-2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, delay: 4 }}
              >
                <span className="text-xl font-extralight">
                  where there are{" "}
                  <span className="text-3xl lg:text-5xl">no nations</span>
                </span>
              </motion.p>
              <motion.p className="text-xl font-extralight">
                <span className="text-3xl lg:text-5xl">whose culture</span> will
                we follow
              </motion.p>
              <motion.p className="text-xl font-extralight text-right">
                and how do we <span className="text-3xl lg:text-5xl">find</span>
                <span className="text-center text-3xl lg:text-5xl text-violet-500"></span>
              </motion.p>
              <motion.p className="text-center tracking-widest mt-2 text-3xl lg:text-5xl text-violet-500">
                common ground?
              </motion.p>
            </div>
          </div>
          <div className="w-full px-4 p-20 md:w-1/2">
            <Image
              className="w-full border-solid border-8 border-white shadow-lg"
              src={earth}
              alt="Earth with Big Question Mark on it"
            />
          </div>
        </div>
      </section>

      {/* RDT HUMAN Intro */}
      <section className="pt-10 px-5 pb-16 lg:px-10">
        <div className="flex items-center flex-wrap">
          <div className="w-full px-10 pt-16 md:w-1/2">
            <Image
              className="bborder-solid border-8 border-white shadow-lg rounded-full w-full"
              src={rdtAvatar}
              alt="Earth with Big Question Mark on it"
            />
          </div>
          <div className="px-16 pt-5 md:px-10 w-full md:w-1/2 max-w-screen-xl lg:pt-5 lg:pl-20">
            <div className="max-w-screen-lg text-zinc-500 sm:text-lg lg:pl-[10%] md:text-sm dark:text-zinc-400">
              <motion.p
                className="tracking-snug mb-3 font-extralight text-xl"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <span className="text-white">Rev. Dave</span> has spent over
                twenty years building common ground between our most divided of
                social groups and issues.
              </motion.p>
              <motion.p
                className="tracking-snug font-extralight text-xl"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                His long experience provided him the opportunity to develop his{" "}
                <strong className="text-white">HUMAN</strong>&nbsp;Ethic, a set
                of real-world, field-tested rules of conduct necessary for
                finding the common ground that creates peace.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* HUMAN Timeline */}
      <HUMANTimeline />
    </>
  );
}
