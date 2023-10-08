import {
  NewspaperIcon,
  BookOpenIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import ThemeSwitcher from "./ThemeSwitcher";

import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="bg-slate-100 dark:text-zinc-900 dark:bg-zinc-600">
      <div className="container px-6 py-12 mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl text-right dark:text-white"
          whileHover={{ scale: 1.05 }}
        >
          In their own words
        </motion.h2>
        <div className="grid gap-4 items-right xl:grid-cols-5">
          <div className="max-w-2xl mx-auto my-8 space-y-4 text-right xl:col-span-2 xl:text-left"></div>
          <div className="p-6 xl:col-span-3">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid content-center gap-4">
                {/* Testimony */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="p-6 rounded-lg shadow-md bg-slate-100 dark:bg-slate-200"
                  whileHover={{ scale: 1.05 }}
                >
                  <p>
                    &ldquo;A disarming and surprisingly genuine voice.&rdquo;
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <NewspaperIcon className="w-10 h-10 p-2 font-bold text-white bg-green-500 bg-center bg-cover rounded-full text-small" />
                    <div>
                      <p className="text-lg font-semibold text-gray-800">
                        Vipp Jaswal
                      </p>
                      <p className="text-sm text-gray-800">
                        Head of International Affairs,
                        <br />
                        <span className="italic">Fox News</span>
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Testimony */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="p-6 rounded-lg shadow-md bg-slate-50 dark:bg-slate-200"
                  whileHover={{ scale: 1.05 }}
                >
                  <p>
                    &ldquo;...a bridge-builder...has perfected a strategy of
                    grace and peaceful dialogue.&rdquo;
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <BookOpenIcon className="w-10 h-10 p-2 text-white bg-green-500 bg-center bg-cover rounded-full text-small" />
                    <div>
                      <p className="text-lg font-semibold">Timothy Kurek</p>
                      <p className="text-sm text-gray-600">
                        Best Selling Author, <br />
                        <span className="italic">The Cross in The Closet</span>
                        <br />
                        Contributing Writer,
                        <br />
                        <span className="italic">The Huffington Post</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="grid content-center gap-4">
                {/* Testimony */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="p-6 rounded-lg shadow-md bg-slate-50 dark:bg-slate-200"
                  whileHover={{ scale: 1.05 }}
                >
                  <p>
                    &ldquo;Amid all the [divisive] controversies flying around
                    today...[Rev. Dave] is working to build some bridges.&rdquo;
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <NewspaperIcon className="w-10 h-10 p-2 text-white bg-green-500 bg-center bg-cover rounded-full text-small" />
                    <div>
                      <p className="text-lg font-semibold">Matt Nagle</p>
                      <p className="text-sm text-gray-600">
                        Staff Writer at Tacoma News Tribune
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Testimony */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="p-6 rounded-lg shadow-md bg-slate-50 dark:bg-slate-200"
                  whileHover={{ scale: 1.05 }}
                >
                  <p>
                    &ldquo;...a conversation that might surprise you and could
                    open the door to real conversation.&rdquo;
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <PlusIcon
                      path="stroke-width: 4"
                      className="w-10 h-10 p-2 text-white bg-green-500 bg-center bg-cover rounded-full"
                    />
                    <div>
                      <p className="text-lg font-semibold">
                        Rev. Time Phillips
                      </p>
                      <p className="text-sm text-gray-600">
                        Seattle First Baptist
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Testimony */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="p-6 rounded-lg shadow-md bg-slate-50 dark:bg-slate-200"
                  whileHover={{ scale: 1.05 }}
                >
                  <p>
                    &ldquo;Instead of debating, what if we talked over coffee
                    about faith, grace, and &#91;different&#93; people in our
                    community? A wonderful, compelling, and pastoral
                    conversation starter.&rdquo;
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <PlusIcon className="w-10 h-10 p-2 text-white bg-green-500 bg-center bg-cover rounded-full text-small" />
                    <div>
                      <p className="text-lg font-semibold">
                        Rev. Martin W. Eldred
                      </p>
                      <p className="text-sm text-gray-600">
                        Joy Lutheran Church, Eagle River, AK
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
