/*
        LearnMore Modal Component
*/
import Image from "next/image";
import speak from "../../public/svgs/speaking.svg";
import Link from "next/link";

export default function LearnMore() {
  return (
    <>
      {/* Speaking Modal */}
      <div className="block space-y-4 dark:text-white md:flex md:space-y-0 md:space-x-4">
        {/* Modal toggle */}
        <button
          data-modal-target="top-center-modal"
          data-modal-toggle="top-center-modal"
          className="text-white bg-violet-400 hover:bg-violet-500 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
          type="button"
        >
          Learn more
        </button>
      </div>

      {/* Main modal */}
      <div
        id="top-center-modal"
        className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden bg-zinc-300 md:inset-0 h-modal md:h-full"
      >
        <div className="relative w-full h-full max-w-2xl md:h-auto">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow dark:bg-zinc-600">
            {/* Modal header */}
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-zinc-600">
              <div className="inline-flex items-center mt-5 mb-5 ml-5 text-purple-500 bg-purple-100 rounded-full justify-left">
                <Image
                  alt="Speaking Icon"
                  className="object-center rounded-full w-14 h-14"
                  src={speak}
                />
              </div>
              <h1 className="pl-5 mt-5 text-2xl font-medium">
                Speaking
                <br /> & Engagements
              </h1>
              <button
                type="button"
                className="text-zinc-400 bg-transparent hover:bg-zinc-200 hover:text-zinc-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-zinc-600 dark:hover:text-white"
                data-modal-hide="top-center-modal"
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
            <div className="p-10 space-y-6 leading-relaxed dark:text-white">
              <p>
                Rev. Dave has been speaking before audiences for over thirty
                years. His natural ease provides a disarming and engaging
                experience. From small intimate groups to large events, Rev.
                Dave is able to easily adapt his message to meet the needs of
                your audience.
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
                    className="flex items-center justify-between w-full py-5 font-medium text-left border-b text-zinc-500 border-zinc-200 dark:border-zinc-700 dark:text-zinc-400"
                    data-accordion-target="#accordion-flush-body-1"
                    aria-expanded="true"
                    aria-controls="accordion-flush-body-1"
                  >
                    <span className="text-2xl font-light">
                      Corporate & Conference Presentations
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
                    <p className="mx-16 mb-4 text-xl font-light tracking-widest">
                      The single most{" "}
                      <span className="text-3xl font-light text-violet-400">
                        important
                      </span>{" "}
                      asset of any business is{" "}
                      <span className="text-3xl font-light text-violet-400">
                        people
                      </span>
                      .
                    </p>
                    <p className="mb-2 text-zinc-600 dark:text-zinc-300">
                      Our culture has become more divided than ever. The ability
                      to create and maintain a peaceful work environment is
                      critical to success. Rev. Dave can provide resources and
                      training that can help your people set aside our many
                      human differences, and instead, to be galvanized around
                      their shared common ground---and your vision.
                    </p>
                    <p className="mb-2 text-zinc-600 dark:text-zinc-300">
                      Rev. Dave brings an impressive resume of business know-how
                      to his engagements. Having run his own political
                      consulting firm for eight years, and worked with and in
                      Fortune-500 corporations, he has gained an invaluable
                      insight into the practical value of a peaceful and united
                      corporate culture and environment.
                    </p>
                    <p className="font-medium text-zinc-500 dark:text-zinc-300">
                      Check out this guide and learn how to{" "}
                      <a
                        href="#"
                        className="underline text-violet-600 dark:text-violet-500 hover:text-violet-300"
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
                    className="flex items-center justify-between w-full py-5 font-medium text-left border-b text-zinc-500 border-zinc-200 dark:border-zinc-700 dark:text-zinc-400"
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
                    <p className="mb-2 text-zinc-600 dark:text-zinc-300">
                      Rev. Dave would love to speak to your small group.
                    </p>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      Please click on the "Contact" button below to arrange to
                      have him speak at your group.
                    </p>
                  </div>
                </div>

                {/* Churches & Non-Profits */}
                <h2 id="accordion-flush-heading-3">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-medium text-left border-b text-zinc-500 border-zinc-200 dark:border-zinc-700 dark:text-zinc-400"
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
                    <p className="mx-16 mb-4 text-xl font-light tracking-widest text-zinc-500 dark:text-zinc-200">
                      Division in{" "}
                      <span className="text-3xl font-light text-violet-500">
                        your congregation
                      </span>{" "}
                      can be difficult to navigate, but{" "}
                      <span className="text-3xl font-light text-violet-500">
                        Rev. Dave
                      </span>{" "}
                      can help you.
                    </p>
                    <p className="mb-2 text-zinc-600 dark:text-zinc-300">
                      For over twenty years Rev. Dave has worked one-on-one with
                      ministers from all over the world and from many different
                      persuasions. His message of peace and his longevity of practical experience
                       have
                      given him an indespensible model for bringing your membership
                      away from division and back to their shared common ground---and your shared values.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Modal footer */}
            <div className="flex items-center justify-end p-6 space-x-2 border-t rounded-b border-zinc-200 dark:border-zinc-600">
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
