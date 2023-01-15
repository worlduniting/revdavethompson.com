/*
    About Rev Dave Thompson
*/

import AboutRDT from "../../components/AboutRDTTimeline"
import Header from "../../components/Header";


export default function Home() {
  return (
    <>
      <Header />
      <section className="mx-auto py-20 px-6 p-10 dark:bg-zinc-700">
        <h1 className="text-5xl tracking-tight font-medium text-zinc-900 dark:text-white">
          A CIVIL HUMAN Servant
        </h1>
        <h2 className="mb-10 text-3xl tracking-tight font-extralight text-zinc-900 dark:text-white">
          Building Peace & Common Ground
        </h2>
        <p className="mb-3">
          For over two decades, author and speaker Rev. Dave Thompson has
          continued his work building peace and common ground among our most
          divided social groups, organizations and politics.
        </p>
        <p className="mb-3">
          Rev Dave&rsquo;s long career of bringing people together has helped him develop a real-world
          method for building common ground. His CIVIL HUMAN™ Ethic provides a
          standard of best-practices and rules for avoiding many of the road
          blocks that can derail the process.
        </p>
        <p>Placing himself at the epicenter
          of some of today&rsquo;s most divisive issues, Rev. Dave has become an
          invaluable resource for leaders hoping to better understand the
          issues, the people and the culture surrounding our divisions. Rev.
          Dave’s disarming and engaging personality continues to leave his
          audience with expanded horizons and a renewed hope for peace.
        </p>
      </section>

      <AboutRDT />
    </>
  );
}
