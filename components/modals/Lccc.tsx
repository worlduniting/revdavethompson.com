/*
        lccc Component
*/
import Image from "next/image";
import help from "../../public/svgs/helping-u-01.svg";
import Link from "next/link";

export default function Lccc() {
  return (
    <>
      {/* Speaking Modal */}
      <div className="block space-y-4 md:flex md:space-y-0 md:space-x-4">
        {/* Modal Toggle */}
        <button
          data-modal-target="lccc-modal"
          data-modal-toggle="lccc-modal"
          className="text-white bg-violet-400 hover:bg-violet-500 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
          type="button"
        >
          Learn More
        </button>
      </div>

      {/* Main modal */}
      <div
        id="lccc-modal"
        className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
      >
        <div className="relative w-full h-full max-w-md md:h-auto">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* Modal header */}
            <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
              <div className="w-12 h-12 mt-8 inline-flex items-center justify-left rounded-full bg-purple-100 text-purple-500 mb-5">
                <Image
                  alt="Helping Icon"
                  className="object-center rounded-full w-12 h-12"
                  src={help}
                />
              </div>
              <h3 className="pl-5 text-xl font-medium mt-5">
                Leadership
                <br />
                Confidential Care and Counsel
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="lccc-modal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <div className="p-6 space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>

              {/* Accordian Component */}
              <div
                id="accordion-flush"
                data-accordion="collapse"
                data-active-classes="bg-white dark:bg-zinc-600 text-zinc-900 dark:text-white"
                data-inactive-classes="text-zinc-500 dark:text-zinc-400"
              >
                {/* Corporate Presentations */}
                <h2 id="accordion-flush-heading-1 text-2xl">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-medium text-left text-zinc-500 border-b border-zinc-200 dark:border-zinc-700 dark:text-zinc-400"
                    data-accordion-target="#accordion-flush-body-1"
                    aria-expanded="true"
                    aria-controls="accordion-flush-body-1"
                  >
                    <span className="text-2xl font-light">
                      Corporate Presentations & Key Note Speaking
                    </span>
                    <svg
                      data-accordion-icon
                      className="w-6 h-6 rotate-180 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-flush-body-1"
                  className="hidden"
                  aria-labelledby="accordion-flush-heading-1"
                >
                  <div className="py-5 overflow-y-auto h-[200px] font-light border-b border-zinc-200 dark:border-zinc-700">
                    <p className="font-light text-xl mx-16 tracking-widest mb-4 text-zinc-500 dark:text-zinc-400">
                      The single most{" "}
                      <span className="text-2xl font-extralight">
                        important
                      </span>{" "}
                      asset of any business is{" "}
                      <span className="text-2xl font-extralight  ">people</span>
                      .
                    </p>
                    <p className="mb-2 text-zinc-500 dark:text-zinc-400">
                      In our culture that has become more divided than ever, the
                      ability to create and maintain a peaceful work environment
                      is more critical than ever. Rev. Dave's training and
                      resources can help your people set aside our many human
                      differences, and insteadm to be galvanized around your
                      their shared common ground, and your vision.
                    </p>
                    <p className="mb-2 text-zinc-500 dark:text-zinc-400">
                      Rev. Dave brings an impressive resume of business know-how
                      to his engagements. Running his own political consulting
                      firm for eight years, and working with and in Fortune-500
                      corporations, has given him an invaluable insight into the
                      practical value of a peaceful and united corporate culture
                      and environment.
                    </p>
                    <p className="text-zinc-500 font-medium dark:text-zinc-400">
                      Check out this guide and learn how to{" "}
                      <a
                        href="/docs/getting-started/introduction/"
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        get started
                      </a>{" "}
                      building a culture of peace and common ground.
                    </p>
                  </div>
                </div>

                {/* Small Groups */}
                <h2 id="accordion-flush-heading-2">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-medium text-left text-zinc-500 border-b border-zinc-200 dark:border-zinc-700 dark:text-zinc-400"
                    data-accordion-target="#accordion-flush-body-2"
                    aria-expanded="false"
                    aria-controls="accordion-flush-body-2"
                  >
                    <span className="text-2xl font-light">
                      Small Group Engagements
                    </span>
                    <svg
                      data-accordion-icon
                      className="w-6 h-6 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-flush-body-2"
                  className="hidden"
                  aria-labelledby="accordion-flush-heading-2"
                >
                  <div className="py-5 font-light border-b border-zinc-200 dark:border-zinc-700">
                    <p className="mb-2 text-zinc-500 dark:text-zinc-400">
                      Rev. Dave would love to speak to your small group.
                    </p>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      Check out the{" "}
                      <a
                        href="https://flowbite.com/figma/"
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Figma design system
                      </a>{" "}
                      based on the utility classes from Tailwind CSS and
                      components from Flowbite.
                    </p>
                  </div>
                </div>

                {/* Churches & Non-Profits */}
                <h2 id="accordion-flush-heading-3">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-medium text-left text-zinc-500 border-b border-zinc-200 dark:border-zinc-700 dark:text-zinc-400"
                    data-accordion-target="#accordion-flush-body-3"
                    aria-expanded="false"
                    aria-controls="accordion-flush-body-3"
                  >
                    <span className="text-2xl font-light">
                      Churches & Non-Profits
                    </span>
                    <svg
                      data-accordion-icon
                      className="w-6 h-6 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-flush-body-3"
                  className="hidden"
                  aria-labelledby="accordion-flush-heading-3"
                >
                  <div className="py-5 font-light border-b border-zinc-200 dark:border-zinc-700">
                    <p className="mb-2 text-zinc-500 dark:text-zinc-400">
                      The main difference is that the core components from
                      Flowbite are open source under the MIT license, whereas
                      Tailwind UI is a paid product. Another difference is that
                      Flowbite relies on smaller and standalone components,
                      whereas Tailwind UI offers sections of pages.
                    </p>
                    <p className="mb-2 text-zinc-500 dark:text-zinc-400">
                      However, we actually recommend using both Flowbite,
                      Flowbite Pro, and even Tailwind UI as there is no
                      technical reason stopping you from using the best of two
                      worlds.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Modal footer */}
            <div className="flex items-center justify-end p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <Link className="" href={"/contact/"}>
                <button
                  data-modal-hide="defaultModal"
                  type="button"
                  className="text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
                >
                  Contact Rev. Dave
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
