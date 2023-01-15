/*
        message-thankyou Component
*/
import localFont from "@next/font/local";
import Header from "../components/Header"
import AnimatedText from "../components/AnimatedText";

const myFont = localFont({ src: "../fonts/Zayne.ttf", preload: true });

export default function messageThankyou() {
    return (
      <>
      <Header />
        {/* Thank you response */}
        <section className="place-content-center pt-36 px-5 lg:px-10 items-center">
          <div className="">
            <h1 className="text-4xl text-violet-500 text-center tracking-widest font-light">
              <AnimatedText
                text="Thank You!"
                textStyles={myFont.className}
                delay="2"
              />
            </h1>
          </div>
          <div className="w-full">
            <p className="text-center p-10 md:mx-[20%]">
              Thank you for reaching out.
              <br />
              <br />
              Your request is very import to us and we will look forward to
              responding as soon as we are able.
            </p>
          </div>
        </section>
      </>
    );
}