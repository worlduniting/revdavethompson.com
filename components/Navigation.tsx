import AnimatedText from "./AnimatedText";
import localFont from "@next/font/local";
import { motion } from "framer-motion";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import Head from "next/head";
import { useState } from "react";

{
  /* https://larainfo.com/blogs/create-responsive-navbar-menu-in-next-js-with-tailwind-css */
}

const myFont = localFont({ src: "../fonts/Zayne.ttf", preload: true });

export default function Navigation() {

  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <nav className="w-full border-zinc-200 px-2 sm:px-4 py-4 rounded dark:bg-zinc-700 shadow sticky top-0 z-50">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link className="flex items-center text-2xl lg:text-4xl" href="/">
                <AnimatedText
                  text="Rev. Dave Thompson"
                  textStyles={myFont.className}
                />
              </Link>

              <div className="md:hidden">
                <button
                  className="p-2 rounded-md outline-none"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-0 md:flex md:space-x-6 md:space-y-0">
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    className="block py-2 pl-3 pr-4 text-zinc-700 rounded hover:bg-zinc-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-700 md:p-0 dark:text-zinc-400 md:dark:hover:text-white dark:hover:bg-zinc-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    href="/a-human-ethic/"
                  >
                    A{" "}
                    <span className="text-violet-600 dark:text-violet-400 font-medium">
                      HUMAN
                    </span>{" "}
                    Ethic
                  </Link>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    className="block py-2 pl-3 pr-4 text-zinc-700 rounded hover:bg-zinc-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-700 md:p-0 dark:text-zinc-400 md:dark:hover:text-white dark:hover:bg-zinc-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    href="/about/"
                  >
                    About Rev. Dave
                  </Link>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    className="block py-2 pl-3 pr-4 text-zinc-700 rounded hover:bg-zinc-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-700 md:p-0 dark:text-zinc-400 md:dark:hover:text-white dark:hover:bg-zinc-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    href="/contact/"
                  >
                    Contact
                  </Link>
                </motion.li>
                <li className="block py-2 pl-3 pr-4 text-zinc-700 rounded md:hover:bg-transparent md:border-0 md:hover:text-violet-700 md:p-0 dark:text-zinc-400 md:dark:hover:text-white dark:hover:bg-zinc-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  <ThemeSwitcher />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
