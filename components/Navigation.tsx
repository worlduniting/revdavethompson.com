import AnimatedText from "./AnimatedText";
import localFont from "@next/font/local";
import { motion } from "framer-motion";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

const myFont = localFont({ src: "../fonts/Zayne.ttf", preload: true });

// https://tailwindui.com/components/application-ui/application-shells/stacked

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 opacity-90 shadow-md bg-white dark:bg-zinc-700">
      <div className="container flex items-center justify-between px-6 mx-auto">
        <Link className="text-2xl lg:text-4xl my-7" href="/">
          <AnimatedText
            text="Rev. Dave Thompson"
            textStyles={myFont.className}
          />
        </Link>

        {/* Mobile Menu */}
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="md:hidden hover:bg-zinc-200 dark:hover:bg-zinc-500 focus:outline-none font-medium rounded-lg text-sm px-2.5 py-2.5 text-center inline-flex items-center"
          type="button"
        >
          <svg
            className="fill-current h-5 w-5"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <div
          id="dropdown"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <Link
                href="/a-human-ethic/"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                A{" "}
                <span className="text-violet-600 dark:text-violet-400 font-medium">
                  HUMAN
                </span>{" "}
                Ethic
              </Link>
            </li>
            <li>
              <Link
                href="/about/"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                About Rev. Dave
              </Link>
            </li>
            <li>
              <Link
                href="/contact/"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <motion.ul
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="inline-flex"
          >
            <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <Link
                className="px-4 dark:hover:text-slate-300"
                href="/a-human-ethic/"
              >
                A{" "}
                <span className="text-violet-600 dark:text-violet-400 font-medium">
                  HUMAN
                </span>{" "}
                Ethic
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <Link
                className="px-4 dark:hover:text-slate-300"
                href="/about/"
              >
                About Rev. Dave
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <Link
                className="px-4 dark:hover:text-slate-300"
                href="/contact/"
              >
                Contact
              </Link>
            </motion.li>
          </motion.ul>
        </div>
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
