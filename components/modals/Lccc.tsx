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
              <p className="text-base leading-relaxed">
                Leadership can often be a lonely place. It can be tough to find
                help with delicate matters. These difficult issues, whether organizational or
                personal, can often carry drastic consequences, just by talking
                about them. Rev. Dave, however, has served as a confidential resource
                for leaders in these circumstances, providing a safe space to
                talk openly and comfortably about subjects that can have
                serious, embarrassing, or potentially incriminating
                consequences.
              </p>
              <p className="text-base leading-relaxed">
                As a licensed and ordained minister in the State of California,
                your conversations with Rev. Dave can remain
                private, under the protection of Clergy Privelege.
              </p>
              <p className="text-base leading-relaxed">
                If you need help with a difficult or delicate issue you (or your
                organization) are wrestling with, please contact Rev. Dave on
                his Contact Page. Be sure to select "Private" so your message
                will only be seen by Rev. Dave himself.
              </p>
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
