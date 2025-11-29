import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowCircleRight,
  faCloudSun,
  faMailForward,
  faMessage,
  faMoon,
  faMountainSun,
  faPhone,
  faSun,
  faVoicemail,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { Form, Link } from "react-router-dom";
import { FyloContext } from "../Context/Fylo";

function Fylo() {
  const [color, setColor] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  function handleSetColor() {
    setColor((prev) => !prev);
  }

  useEffect(() => {
    console.log(localStorage.getItem("name"));
    if (!localStorage.getItem("color")) {
      return localStorage.setItem("color", JSON.stringify(color));
    }
    `    // const navigationEntries = performance.getEntriesByType("navigation");
    // if (navigationEntries.length > 0) {
    //   const navType = navigationEntries[0].type;
    //   if (navType === "reload") {
    //     console.log("page reload");
    //     return;
    //   }
    // }`;

    localStorage.setItem("color", JSON.stringify(JSON.parse(color)));
  }, [color]);

  return (
    <FyloContext value={{ color }}>
      <div
        className={`${color ? "bg-white" : "bg-gray-950"} flex w-screen flex-col items-center justify-center overflow-hidden`}
      >
        {/* section hero */}

        <section
          className="bg- bg-size my-6 mt-8 flex w-screen flex-col items-center justify-center space-y-5 bg-bottom bg-no-repeat pb-50"
          style={{
            backgroundImage: `url("/images/fylo/images/bg-curvy-${color ? "light" : "dark"}-mode.svg")`,
            backgroundSize: "100%",
          }}
        >
          <nav className="flex w-[90%] flex-col items-center justify-center space-y-10 p-2 md:flex-row md:justify-between md:space-y-0">
            <p className="flex items-center justify-start space-x-3">
              <img
                src={`/images/fylo/images/logo-${color ? "light" : "dark"}-mode.svg`}
                alt="logo"
              />
            </p>
            <div
              className={`${color ? "text-zinc-600" : "text-zinc-300"} flex items-center justify-center space-x-5`}
              // style={{ "--x": `${color ? 800 : 300}` }}
            >
              <Link className="text-md tracking-tight capitalize">
                features
              </Link>
              <Link className="text-md tracking-tight capitalize">
                testimonial
              </Link>
              <p
                className="flex items-center justify-center"
                onClick={handleSetColor}
              >
                <FontAwesomeIcon
                  icon={color ? faMoon : faSun}
                  className="cursor-pointer rounded-full p-1 text-zinc-300/70"
                />
              </p>
            </div>
          </nav>
          <main className="flex flex-col items-center justify-center space-y-4">
            <p className="flex items-center justify-center">
              <img
                src="/images/fylo/images/illustration-intro.png"
                alt="illustration-intro"
                className="w-[20rem] md:w-[30rem] lg:w-[35rem]"
              />
            </p>
            <h1
              className={`max-w-[25rem] text-center text-3xl font-bold tracking-wide ${color ? "text-gray-950" : "text-zinc-200"} md:max-w-[29rem]`}
            >
              All your files in on esecure location, assessible anywhere.
            </h1>
            <p
              className={`max-w-[22rem] text-center text-[10px] tracking-tighter ${color ? "text-gray-950/70" : "text-zinc-400"} md:max-w-[30rem]`}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
              quibusdam eius odit accusantium ipsa sed qui, voluptas ratione
              culpa ex autem ad laborum, officia similique consequatur fugiat
              non cumque reiciendis!
            </p>
            <button className="button rounded-full bg-teal-300 px-12 py-3 tracking-tighter text-teal-50">
              Get started
            </button>
          </main>
        </section>

        {/* services */}
        <section className="mx-auto flex max-w-[95%] flex-col flex-wrap items-center justify-center gap-15 px-6 py-10 md:max-w-[60rem] md:justify-between lg:max-w-[65rem]">
          <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:gap-30">
            <Service
              icon="access-anywhere"
              header="Access your file from anywhere"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus quam, tempore a iusto eligendi itaque ad quasi
              consequuntur esse asperiores, in accusamus dolorem dignissimos
              illum eum veritatis repellat sapiente blanditiis.
            </Service>
            <Service icon="security" header="Security you can trust">
              Temporibus quam, tempore a iusto eligendi itaque ad quasi
              consequuntur esse asperiores, in accusamus dolorem dignissimos
              illum eum veritatis repellat sapiente blanditiis.
            </Service>
          </div>
          <div className="flex flex-col items-center justify-center gap-15 md:flex-row md:gap-30">
            <Service
              icon="collaboration"
              header="Access your file from anywhere"
            >
              Quam, tempore a iusto eligendi itaque ad quasi consequuntur esse
              asperiores, in accusamus dolorem dignissimos illum eum veritatis
              repellat sapiente blanditiis.
            </Service>
            <Service icon="any-file" header="Security you can trust">
              Minus quae fuga eius recusandae voluptates nulla quod animi iusto
              maxime doloribus laborum nihil, enim adipisci perspiciatis
              repudiandae delectus ipsam alias! Magni reprehenderit repudiandae
              quam est ab, tempore eum illo.
            </Service>
          </div>
        </section>

        {/* stay Productive */}

        <section className="mx-auto mt-20 mb-6 flex max-w-[95%] flex-col items-center justify-center space-y-20 md:w-[50rem] md:flex-row md:justify-start md:space-x-20 md:px-10 lg:w-[66rem]">
          <div className="col flex items-start justify-center space-y-20 md:flex-row md:justify-between">
            <p className="flex items-center justify-start">
              <img
                src="/images/fylo/images/illustration-stay-productive.png"
                alt="productive-images"
                className="max-w-[90%] sm:max-w-[25rem] md:max-w-[22rem]"
              />
            </p>
          </div>
          <div className="mx-auto flex max-w-[20rem] flex-col items-start justify-center space-y-4">
            <h2 className="w-full text-center text-xl font-bold tracking-tight text-zinc-300 md:w-2/3 md:text-start md:text-2xl">
              Stay productive, wherever you are
            </h2>
            <p className="text-sm font-bold tracking-tight text-zinc-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              fuga commodi qui sapiente praesentium dolorum tenetur modi
            </p>
            <p className="text-sm font-bold tracking-tight text-zinc-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              fuga commodi qui sapiente praesentium dolorum tenetur modi porro
            </p>
            <Link className="flex items-center justify-start space-x-2 border-b-2 text-teal-600/50 underline-offset-8">
              <span> see how flyo works</span>
              <FontAwesomeIcon
                icon={faArrowCircleRight}
                className="text-teal-600"
              />
            </Link>
          </div>
        </section>

        {/* testimonial */}
        <section
          className="auto mt-40 mb-10 flex max-w-[95%] flex-col items-center justify-center space-y-6 bg-top-left px-4 md:mx-auto md:w-[90%] md:flex-row md:gap-10 md:space-y-0"
          // style={{
          //   backgroundImage: "url(/images/fylo/images/bg-quotes.png)",
          //   backgroundSize: "4rem",
          //   backgroundColor: "red",
          // }}
        >
          <Testimonial
            name="Satish Petel"
            position=" Founder & CEO.Huddle"
            image={1}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe odio
            itaque laborum nulla optio. Soluta velit, excepturi vitae itaque
            laborum nulla optio. Soluta velit, excepturi vitae
          </Testimonial>
          <Testimonial
            name="Bruce McKenzie"
            position=" Founder & CEO.Huddle.2"
            image={2}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe odio
            itaque laborum nulla optio. Soluta velit, excepturi vitae itaque
            laborum nulla optio. Soluta velit, excepturi vitae
          </Testimonial>
          <Testimonial
            name="Eva Boyd"
            position=" Founder & CEO.Huddle.3"
            image={3}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe odio
            itaque laborum nulla optio. Soluta velit, excepturi vitae itaque
            laborum nulla optio. Soluta velit, excepturi vitae
          </Testimonial>
        </section>

        {/* form submission */}
        <Form className="mx-auto mt-30 mb-10 flex max-w-[90%] flex-col items-center justify-center space-y-3 rounded-md bg-gray-800 px-5 py-7 sm:w-[30rem] md:w-[35rem]">
          <div className="flex w-full flex-col items-center justify-center gap-4">
            <h2 className="text-center text-xl font-bold tracking-normal text-zinc-300">
              Get early access today
            </h2>
            <p className="text-center text-sm tracking-tighter text-zinc-500 md:w-[20rem]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis laudantium quo inventore quasi nisi
            </p>
            <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
              <input
                type="text"
                className="text-md inline-block w-full rounded-full border-0 bg-zinc-50 px-8 py-2 tracking-wide text-zinc-700 outline-0 placeholder:text-sm placeholder:text-amber-700/50 md:w-2/3"
                placeholder="email@example.com"
              />
              <button className="button w-full rounded-full bg-teal-600 py-2 text-teal-100 md:w-1/3">
                Get started for free
              </button>
            </div>
          </div>
        </Form>

        {/* footer */}
        <section className="mx-auto mt-20 flex w-[95%] flex-col items-start justify-center gap-8 bg-slate-950 px-6 py-10 text-zinc-400 md:flex-row md:justify-between">
          <div className="flex flex-col items-start justify-center gap-1 text-sm">
            <p className="flex items-center justify-start space-x-3">
              <FontAwesomeIcon icon={faPhone} className="text-zinc-400" />
              <span>+233 849 0032</span>
            </p>
            <p className="line-clamp-1 flex flex-wrap items-center justify-start space-x-3">
              <FontAwesomeIcon icon={faMessage} />
              <span>aninakwahdesmond3@gmail.com</span>
            </p>
          </div>
          <div className="text-md flex flex-col gap-1 font-bold tracking-normal capitalize">
            <span>About</span>
            <span>Job</span>
            <span>Press</span>
            <span>Block</span>
          </div>
          <div className="text-md flex flex-col gap-1 font-bold tracking-normal capitalize">
            <span>Contact us</span>
            <span>Terms</span>
            <span>Privacy</span>
          </div>
          <div className="flex w-full items-center justify-center space-x-3 md:w-auto">
            <FontAwesomeIcon icon={faFacebook} className="text-lg" />
            <FontAwesomeIcon icon={faTwitter} className="text-lg" />
            <FontAwesomeIcon icon={faInstagram} className="text-lg" />
          </div>
        </section>
      </div>
    </FyloContext>
  );
}

function Testimonial({ children, name, image, position }) {
  return (
    <div className="relative mx-auto flex max-w-[28.5rem] flex-col space-y-4 rounded-md bg-gray-800 px-6 py-5 shadow-xl shadow-gray-800/20">
      {image === 1 && (
        <img
          src="/images/fylo/images/bg-quotes.png"
          alt=""
          className="absolute -top-10 left-0 -z-10"
        />
      )}
      <p className="text-md tracking-tighter text-zinc-400">{children}</p>
      <div className="flex items-center justify-start space-x-2">
        <p>
          <img
            src={`/images/fylo/images/profile-${image}.jpg`}
            alt="image Sarish"
            className="w-[3rem] rounded-full"
          />
        </p>
        <div className="flex flex-col space-y-0.5 font-bold text-zinc-300 capitalize">
          <h3 className="text-sm font-bold tracking-tighter">{name}</h3>
          <span className="text-[10px] tracking-tighter text-zinc-500/70">
            {position}
          </span>
        </div>
      </div>
    </div>
  );
}

function Service({ icon, header, children }) {
  const { color } = useContext(FyloContext);
  return (
    <div className="flex flex-col items-center justify-center space-y-2 md:w-1/2">
      <p className="flex items-center justify-center">
        <img
          src={`/images/fylo/images/icon-${icon}.svg`}
          alt="image access anywhere"
        />
      </p>
      <h2
        className={`text-center text-lg font-bold tracking-tight ${color ? "text-gray-900" : "text-zinc-100"}`}
      >
        {header}
      </h2>
      <p className="text-center text-[12px] font-bold tracking-tighter text-zinc-500">
        {children}
      </p>
    </div>
  );
}
export default Fylo;
