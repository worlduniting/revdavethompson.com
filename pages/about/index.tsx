/*
    About Rev Dave Thompson
*/

import AboutRDT from "../../components/AboutRDTTimeline";
import Header from "../../components/Header";
import Image from "next/image";
import rdtAvatar from "../../public/svgs/rdt-avatar.svg";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Header />

      <section>
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
              src={rdtAvatar}
            />
          </motion.div>
          <div className="flex flex-col flex-wrap lg:py-6 mb-10 md:w-1/2 md:pl-12 md:text-left text-center">
            <div className="flex flex-col mb-10 md:items-start items-center">
              <div className="flex-grow items-center">
                <h2 className="text-3xl pb-3 border-solid md:border-b-2 border-zinc-500 title-font font-medium mb-3">
                  Rev. Dave Thompson
                </h2>
                <p className="leading-relaxed mb-5 text-base">
                  For over two decades, author and speaker Rev. Dave Thompson
                  has continued his work building peace and common ground within
                  our most divided of social groups, organizations and politics.
                </p>
                <p>
                  From out of his long career of bringing people together Rev.
                  Dave developed a real-world method for building common ground.
                  His HUMAN™ Ethic provides a foundational set of rules and
                  best-practices for avoiding many of the road blocks that can
                  derail the process of building peace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutRDT />

    </>
  );
}
