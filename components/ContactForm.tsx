/*
        ContactForm Component
*/

import Link from "next/link";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";

export default function ContactForm() {

  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-xl font-medium leading-6">
                Contact Rev. Dave
              </h3>
              <p className="mt-3 text-sm">
                All communications will be handled privately with the utmost of
                care. We will never share your information with anyone without
                your expressed permission.
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form
              name="insightly_web_to_lead"
              action="https://crm.na1.insightly.com/WebToLead/Create"
              method="post"
            >
              <input
                type="hidden"
                name="formId"
                value="ySErMBBgL8ZKlRsXYqDaZg=="
              />
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-zinc-200 dark:bg-zinc-500 px-4 py-5 sm:p-6">
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="insightly_private__c"
                          name="private__c"
                          type="checkbox"
                          value="true"
                          className="mt-2 h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500"
                        />
                      </div>
                      <div className="ml-4 w-full">
                        <label
                          htmlFor="insightly_private__c"
                          className="font-medium"
                        >
                          Confidential (seen only by Rev. Dave)
                        </label>
                        <p className="text-sm">
                          This communication will be treated as a penitential
                          communication within the context of "Clergy Penitent
                          Privelege",{" "}
                          <Link
                            className="hover:text-gray-400 underline text-violet-400 dark:text-violet-300"
                            href="https://www.easylawlookup.com/California-Law/Evidence-Code/pg-25/_easylookup.blp?data=EVIDENCE&sidfw=&site=EASY&location=78232&spon=&stype=P&sterm=+&smode=AND&sexact=ON&pgno=25&par=683&dlevel=2#par_683"
                            rel="noopener noreferrer"
                            title="California Clergy Penitent Privelege"
                            target="_blank"
                          >
                            as per California Law
                          </Link>
                          . Rev. Dave will contact you as soon as he is able.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="insightly_firstName"
                        className="block text-sm font-medium"
                      >
                        First name
                      </label>
                      <input
                        id="insightly_firstName"
                        name="FirstName"
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="insightly_lastName"
                        className="block text-sm font-medium"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        name="LastName"
                        id="insightly_lastName"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium"
                      >
                        Email address
                      </label>
                      <input
                        id="insightly_Email"
                        name="email"
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-2">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium"
                      >
                        Phone
                      </label>
                      <input
                        id="insightly_Phone"
                        name="phone"
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-5">
                      <label
                        htmlFor="insightly_organization"
                        className="block text-sm font-medium"
                      >
                        Organization name
                      </label>
                      <input
                        id="insightly_organization"
                        name="OrganizationName"
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6">
                      <label
                        htmlFor="Description"
                        className="block text-sm font-medium"
                      >
                        How can Rev. Dave help?
                      </label>
                      <textarea
                        id="insightly_Description"
                        name="Description"
                        rows={8}
                        className="form-textarea mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  {/* Checkbox Item's */}
                  <div className="mt-10">
                    <fieldset>
                      <legend className="sr-only">
                        Options for more information:
                      </legend>
                      <div
                        className="block text-x font-medium contents"
                        aria-hidden="true"
                      >
                        <span className="text-puple">
                          Please send me info about
                        </span>
                        :
                      </div>

                      {/* News & Info Checkbox */}
                      <div className="space-y-4 mt-3 ml-5">
                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="insightly_news_updates__c"
                              name="news_updates__c"
                              type="checkbox"
                              value="true"
                              className="mt-1 h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500"
                            />
                          </div>
                          <div className="ml-3">
                            <label
                              htmlFor="insightly_news_updates__c"
                              className="font-medium"
                            >
                              News & Info
                            </label>
                            <p className="mt-2 text-sm">
                              Be the first to receive news, upcoming
                              engagements, articles and other useful content
                              from Rev. Dave about{" "}
                              <span className="dark:text-violet-300 text-violet-500">
                                building peace
                              </span>{" "}
                              and{" "}
                              <span className="dark:text-violet-300 text-violet-500">
                                common ground
                              </span>
                              .
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Press & Media Checkbox */}
                      <div className="space-y-4 mt-3 ml-5">
                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <p></p>
                            <input
                              id="insightly_pressMedia__c"
                              name="pressMedia__c"
                              type="checkbox"
                              value="true"
                              className="mt-1 h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500"
                            />
                          </div>
                          <div className="ml-3">
                            <label
                              htmlFor="neinsightly_pressMedia__cws"
                              className="font-medium"
                            >
                              Press & Media Resources
                            </label>
                            <p className="mt-2 text-sm">
                              Requests for press releases, commentary or other
                              items.
                              {/* <br />
                              <Link
                                className="dark:text-green-300 dark:hover:text-zinc-300 hover:text-zinc-400 text-green-500"
                                href="/about-rev-dave-thompson/"
                              >
                                Learn more{" "}
                                <ChevronDoubleRightIcon className="inline-block w-4 h-4" />
                              </Link> */}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Speaking Checkbox */}
                      <div className="space-y-4 mt-3 ml-5">
                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="insightly_engagements__c"
                              name="engagements__c"
                              type="checkbox"
                              value="true"
                              className="mt-1 h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500"
                            />
                          </div>
                          <div className="ml-3">
                            <label
                              htmlFor="insightly_engagements__c"
                              className="font-medium"
                            >
                              Speaking & Presentation Opportunities
                            </label>
                            <p className="mt-2 text-sm">
                              Rev. Dave would be honored to speak or present for
                              your group.
                              {/* <br />
                              <Link
                                className="dark:text-green-300 dark:hover:text-zinc-300 hover:text-zinc-400 text-green-500"
                                href="/about-rev-dave-thompson/"
                              >
                                Learn more{" "}
                                <ChevronDoubleRightIcon className="inline-block w-4 h-4" />
                              </Link> */}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Leadership Confidential Care and Counsel (CCCL) */}
                      <div className="space-y-4 mt-3 ml-5">
                        <div className="flex items-start">
                          <div className="flex h-5 items-center">
                            <input
                              id="insightly_lccc__c"
                              name="lccc__c"
                              type="checkbox"
                              value="true"
                              className="mt-1 h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500"
                            />
                          </div>
                          <div className="ml-3">
                            <label
                              htmlFor="insightly_lccc__c"
                              className="font-medium"
                            >
                              Leadership Confidential Care and Counsel (CCCL)
                            </label>
                            <p className="mt-2 text-sm">
                              For leaders who need to speak confidentially about
                              delicate or divisive issues they are facing.
                              {/* <br />
                              <Link
                                className="dark:text-green-300 dark:hover:text-zinc-300 hover:text-zinc-400 text-green-500"
                                href="/about-rev-dave-thompson/"
                              >
                                Learn more{" "}
                                <ChevronDoubleRightIcon className="inline-block w-4 h-4" />
                              </Link> */}
                            </p>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>

                <input
                  type="hidden"
                  id="insightly_ResponsibleUser"
                  name="ResponsibleUser"
                  value="184235"
                />
                <input
                  type="hidden"
                  id="insightly_LeadSource"
                  name="LeadSource"
                  value="393245"
                />
                <div className="dark:bg-zinc-400 bg-zinc-300 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-violet-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-violet-500 dark:hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}