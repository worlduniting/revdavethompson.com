// SpeedDialBtmRt Component
//  with YouTube, Instagram, and Facebook
import Link from "next/link";
import Image from "next/image";
import Facebook from "../public/svgs/facebook.svg";

export default function SpeedDialBtmRt() {
  return (
    <div data-dial-init className="fixed right-6 bottom-6 group">
      <div
        id="speed-dial-menu-vertical"
        className="flex flex-col items-center hidden mb-4 space-y-2"
      >
        {/* YouTube Button */}
        <button
          type="button"
          data-tooltip-target="tooltip-youtube"
          data-tooltip-placement="left"
          className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-violet-500 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-violet-400 dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
        >
          {/* YouTube SVG Graphic */}
          <svg
            aria-hidden="true"
            className="w-6 h-6"
            fill="currentColor"
            id="Layer_1"
            viewBox="0 0 461 461"
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
          >
            <g>
              <path
                fillRule="evenodd"
                fill="currentColor"
                d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728
		c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137
		C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607
		c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"
                clipRule="evenodd"
              ></path>
            </g>
          </svg>

          <span className="sr-only">YouTube</span>
        </button>
        <div
          id="tooltip-youtube"
          role="tooltip"
          className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          YouTube
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>

        {/* Instagram Button */}
        <Link
          href="https://instagram.com/revdavethompson"
          rel="noopener noreferrer"
          title="Instagram"
          target="_blank"
        >
          <button
            type="button"
            data-tooltip-target="tooltip-instagram"
            data-tooltip-placement="left"
            className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-violet-500 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-violet-400 dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
          >
            {/* Instagram SVG Graphic */}
            <svg
              aria-hidden="true"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                fillRule="evenodd"
              />
            </svg>

            <span className="sr-only">Instagram</span>
          </button>
          <div
            id="tooltip-instagram"
            role="tooltip"
            className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Instagram
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </Link>

        {/* Facebook Button */}
        <Link
          href="https://facebook.com/revdavethompson"
          rel="noopener noreferrer"
          target="_blank"
          title="Facebook"
        >
          <button
            type="button"
            data-tooltip-target="tooltip-facebook"
            data-tooltip-placement="left"
            className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-violet-500 bg-white rounded-full border border-gray-200 dark:border-gray-600 dark:hover:text-violet-400 shadow-sm dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
          >

            {/* Facebook SVG Graphic */}
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 310 310"
              xmlSpace="preserve"
              className="w-6 h-6"
            >
              <g id="XMLID_834_">
                <path
                  id="XMLID_835_"
                  d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064
		c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996
		V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545
		C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703
		c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"
                />
              </g>
            </svg>

            <span className="sr-only">Facebook</span>
          </button>
        </Link>
        <div
          id="tooltip-facebook"
          role="tooltip"
          className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Facebook
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>

      {/* Speedial Button */}
      <button
        type="button"
        data-dial-toggle="speed-dial-menu-vertical"
        aria-controls="speed-dial-menu-vertical"
        aria-expanded="false"
        className="flex items-center justify-center text-white bg-violet-700 rounded-full w-14 h-14 hover:bg-violet-800 dark:bg-violet-600 dark:hover:bg-violet-700 focus:ring-4 focus:ring-violet-300 focus:outline-none dark:focus:ring-violet-800"
      >
        <svg
          aria-hidden="true"
          className="w-8 h-8 transition-transform group-hover:rotate-45"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
        <span className="sr-only">Open actions menu</span>
      </button>
    </div>
  );
}
