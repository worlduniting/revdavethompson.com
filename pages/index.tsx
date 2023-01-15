// Root Index/Home Page

import Testimonials from "../components/Testimonials";
import { motion } from "framer-motion";
import health from "../public/health.png";
import team from "../public/svgs/team-work.svg"
import sync4 from "../public/sync4.png";
import rdtMast from "../public/rdt-mast.jpg";
import standing from "../public/standing.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Head from "next/head";
import TeamSVG from "../components/teamSVG";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Rev. Dave Thompson: Building HUMAN Peace and Common Ground
        </title>
      </Head>
      <Header />

      {/* Call To Action */}
      <section className="mx-auto px-15 p-10">
        <div className="flex items-center flex-wrap mb-10">
          <div className="w-full md:w-1/2">
            <motion.h4
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 2 }}
              whileHover={{ scale: 1.05 }}
              className="text-2xl xl:text-3xl lg:pl-[5%] mx-auto w-full uppercase font-medium"
            >
              Let&rsquo;s{" "}
              <span className="text-violet-500 text-3xl xl:text-4xl">
                imagine
              </span>{" "}
              our world
            </motion.h4>
            <motion.p
              className="mb-5 font-right tracking-snug font-extralight lg:pl-[10%] text-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 3 }}
            >
              not <span className="text-3xl lg:text-3xl">divided</span> by our <span className="text-2xl md:text-3xl">differences</span>,
            </motion.p>
            <motion.p
              className="text-right mb-3"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, delay: 4 }}
            >
              <span className="text-xl font-extralight">but <span className="text-3xl">connected</span> by our </span> {" "}<br />
              <span className="text-3xl lg:text-4xl text-violet-500 uppercase">common ground</span>.
            </motion.p>
          </div>
          <div className="w-full md:w-1/2 items-center">
            <TeamSVG />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Features Section */}
      <section className="mx-auto px-6 p-10">
        <motion.h2 className="text-4xl font-bold text-center text-violet-800 mb-8">
          Features
        </motion.h2>

        {/* Features One */}
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">
              Exercise Metric
            </h4>
            <p className="text-gray-600 mb-8">
              Our Smart Health Monitoring Wristwatch is able to capture you
              vitals while you exercise. You can create different category of
              exercises and can track your vitals on the go.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image src={health} alt="Monitoring" />
          </div>
        </div>

        {/* Features Two */}
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <Image src={standing} alt="Monitoring" />
          </div>
          <div className="w-full md:w-1/2 pl-10">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">
              Exercise Metric
            </h4>
            <p className="text-gray-600 mb-8">
              Our Smart Health Monitoring Wristwatch is able to capture you
              vitals while you exercise. You can create different category of
              exercises and can track your vitals on the go.
            </p>
          </div>
        </div>

        {/* Features Three */}
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">
              Exercise Metric
            </h4>
            <p className="text-gray-600 mb-8">
              Our Smart Health Monitoring Wristwatch is able to capture you
              vitals while you exercise. You can create different category of
              exercises and can track your vitals on the go.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image src={sync4} alt="Monitoring" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
