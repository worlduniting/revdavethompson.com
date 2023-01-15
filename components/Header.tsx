import Navigation from "./Navigation";
import Image from "next/image";
import rdtMast from "../public/rdt-mast.jpg";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="">
      <Navigation />

      {/* RDT Mast */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative backdrop-blur"
      >
        <Image
          className="backdrop-blur"
          alt="Rev. Dave Thompson with hand making love sign."
          src={rdtMast}
          placeholder="blur"
          quality={100}
          style={{
            objectFit: "cover",
          }}
        />
      </motion.div>
    </header>
  );
}
