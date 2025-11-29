import {
  faInstagram,
  faPinterest,
  faSquareFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faNavicon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Link } from "react-router-dom";
import { ShortlyContext } from "../Context/Shortly";
import { useEffect, useState } from "react";

const Icons = [faSquareFacebook, faTwitter, faPinterest, faInstagram];

function Shortly() {
  const [menu, setMenu] = useState(false);
  const [size, setSize] = useState(0);
  function handleOpenMenu() {
    setMenu((prev) => !prev);
  }

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    function currentSize() {
      const width = window.innerWidth;
      setSize(width);
    }
    currentSize();
    window.addEventListener("resize", currentSize);

    return function () {
      window.removeEventListener("rezise", currentSize);
    };
  }, []);
  return (
    <ShortlyContext value={{ setMenu, menu }}>
      <div className="relative flex flex-col items-center justify-center">
        {/* hero */}
        <section className="flex w-screen flex-col items-center justify-center p-4 md:mx-auto md:w-[95%] lg:w-[90%]">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center justify-start space-x-6">
              <p>
                <img src="/images/shortly/logo.svg" alt="logo image" />
              </p>
              <div className="hidden items-center justify-start space-x-4 md:flex">
                <a
                  className="text-sm font-bold tracking-tighter text-blue-950/50 capitalize"
                  href="#features"
                >
                  Features
                </a>
                <a
                  href="#stat"
                  className="text-sm font-bold tracking-tighter text-blue-950/50 capitalize"
                >
                  Pricing
                </a>
                <a
                  className="text-sm font-bold tracking-tighter text-blue-950/50 capitalize"
                  href="#booster"
                >
                  Resources
                </a>
              </div>
            </div>

            <p className="flex items-center justify-center md:hidden">
              <FontAwesomeIcon
                icon={faNavicon}
                className="cursor-pointer text-xl font-bold text-zinc-500"
                onClick={handleOpenMenu}
              />
            </p>
            <div className="hidden items-center justify-center space-x-6 md:flex">
              <a
                className="text-md tracking-noemal font-bold text-indigo-950/60"
                href="#footer"
              >
                login
              </a>
              <button className="button rounded-full bg-teal-500 px-3 py-2 text-sm font-normal tracking-tighter capitalize">
                sign up
              </button>
            </div>
          </div>

          <div className="flex w-full flex-col space-y-8 md:mt-5 md:flex-row md:justify-between">
            <div className="mx-auto flex w-full flex-col items-center justify-center md:justify-end">
              <img
                src="/images/shortly/illustration-working.svg"
                alt="working"
                className="max-w-[28rem] md:max-w-[18rem] md:self-end lg:max-w-[22rem]"
              />
            </div>
            <div className="flex flex-col items-center justify-center space-y-3 md:-order-1 md:w-[40rem] md:items-start md:space-y-4">
              <h1 className="tracing-wide flex w-full items-center justify-center text-3xl font-extrabold text-zinc-700">
                More than just shorter links
              </h1>
              <p className="flex max-w-[25rem] items-center justify-center font-bold tracking-normal text-zinc-400">
                Build your brand's recognition and get setailed insights on how
                your links are performing
              </p>
              <button className="button rounded-full bg-teal-400 px-6 py-3 text-xl shadow-xl md:py-1">
                Get started
              </button>
            </div>
          </div>
        </section>

        {/* section-nav */}
        {menu && (
          <section className="absolute top-[2%] left-[50%] flex w-[23rem] -translate-x-[50%] flex-col items-center justify-center rounded-md bg-indigo-950 p-3 shadow-lg shadow-indigo-950/30">
            <div className="flex flex-col items-center justify-center space-y-2">
              <a
                className="hover:text-inidgo-50/60 text-center text-sm font-bold tracking-tighter text-indigo-50/90 capitalize duration-500 hover:text-indigo-50"
                onClick={() => setMenu(false)}
                href="#features"
              >
                Features
              </a>
              <a
                className="text-center text-sm font-bold tracking-tighter text-indigo-50/90 capitalize duration-500 hover:text-indigo-50"
                onClick={() => setMenu(false)}
                href="#stat"
              >
                pricing
              </a>
              <a
                href="#booster"
                className="hover:text-inidgo-50 text-center text-sm font-bold tracking-tighter text-indigo-50/90 capitalize duration-500"
                onClick={() => setMenu(false)}
              >
                Resources
              </a>
            </div>
            <div className="mt-3 flex w-full flex-col items-center justify-center space-y-4 border-t border-zinc-400/60 py-5">
              <a
                href="#footer"
                className="text hover:text-inidgo-50/90 text-sm font-bold tracking-tighter text-zinc-300 capitalize"
                onClick={() => setMenu(false)}
              >
                Login
              </a>
              <a
                href="#footer"
                onClick={() => setMenu(false)}
                className="w-full"
              >
                <button className="button w-full rounded-full bg-teal-500 p-2 text-sm tracking-tighter">
                  sign up
                </button>
              </a>
            </div>
          </section>
        )}

        {/* inputs */}
        <section
          className="mt-10 flex flex-col items-center justify-center space-y-5 pt-15"
          id="features"
        >
          <Form
            action=""
            className="flex w-[25rem] flex-col space-y-4 rounded-md bg-indigo-950 px-8 py-10 md:w-[37rem] md:flex-row md:justify-between md:gap-4 md:space-x-4 lg:w-[44rem]"
          >
            <input
              type="text"
              placeholder="eg:http://localhost.com"
              className="md text-md flex w-full items-center justify-start rounded border-0 bg-blue-100 p-2 tracking-normal text-gray-900 placeholder:text-sm placeholder:text-zinc-400 focus:outline-none md:m-0 md:w-[20rem]"
            />
            <button className="button rounded bg-teal-600/90 p-2 text-sm shadow-sm md:w-auto md:self-center md:px-4 md:py-2">
              Shorten it!
            </button>
          </Form>

          <div className="flex flex-col items-center justify-center space-y-8 md:w-full">
            <ShortlyLinks
              longName="http://frontendmentor.io"
              shortName="https://rel.ink/dK.yk"
              buttonColor="bg-teal-500"
            />
            <div className="flex flex-col items-center justify-center space-y-8">
              <ShortlyLinks
                longName="http://twitter.com/frontendmentor"
                shortName="https://rel.ink/gxOXp9"
                buttonColor="bg-indigo-950"
              />
              <ShortlyLinks
                longName="http://linkedin.com/frontendmentor"
                shortName="https://rel.ink/gob3X9"
                buttonColor="bg-teal-500"
              />
            </div>
          </div>
        </section>

        {/* advanced statistics */}
        <section
          className="item-center mt-20 flex flex-col justify-center pt-15"
          id="stat"
        >
          <div className="mt-6 flex flex-col items-center justify-center space-y-3">
            <h2 className="flex items-center justify-center text-center text-3xl font-bold tracking-wide text-gray-900/90 capitalize">
              Advanced statistics
            </h2>
            <p className="text-md item-center mt-0 flex w-[16.3rem] justify-center text-center tracking-normal text-zinc-400 md:w-[20rem]">
              Track how your links are performing across the web with our
              advanced statistics
            </p>
          </div>
          <div className="relative mx-auto mt-20 flex w-[90%] flex-col items-center justify-center space-y-20 md:flex-row md:flex-wrap md:justify-center lg:flex-nowrap lg:gap-6 lg:space-y-0">
            <span className="absolute top-[0%] bottom-0 left-[50%] -z-40 h-full w-[10px] -translate-x-[50%] bg-teal-300 font-bold md:top-[10%] md:bottom-[10%] md:h-[80%] md:gap-2 lg:top-[35%] lg:right-0 lg:left-0 lg:h-[10px] lg:w-full lg:-translate-x-0 lg:-translate-y-[50%] lg:items-start"></span>

            <Statistics
              icon="icon-brand-recognition.svg"
              header="Brand recognition"
              translate={0}
              size={size}
              // "translate-y-0"
            />

            <Statistics
              icon="icon-detailed-records.svg"
              header="Detailed records"
              translate={20}
              size={size}
              // "translate-y-5"
            />

            <Statistics
              icon="icon-fully-customizable.svg"
              header="fully customizable"
              translate={40}
              size={size}
              // "translate-y-10"
            />
          </div>
        </section>

        {/* booster */}
        <section
          className="mt-20 flex h-70 w-screen flex-col items-center justify-center bg-indigo-950 bg-cover bg-center bg-no-repeat pt-15"
          id="booster"
          style={{
            backgroundImage:
              size >= 1024
                ? "url(/images/shortly/bg-boost-desktop.svg)"
                : "url(/images/shortly/bg-boost-mobile.svg)",
          }}
        >
          <div className="mb-5 flex flex-col items-center justify-center space-y-5">
            <h1 className="text-center text-4xl font-bold tracking-normal text-teal-50">
              Boost your links today
            </h1>
            <button className="button shadow-gl rounded-full bg-teal-500 px-6 py-4 text-xl text-teal-50 shadow-indigo-900">
              Get started
            </button>
          </div>
        </section>

        {/* footer */}
        <section
          className="mt-0 flex w-screen flex-col items-center justify-center space-y-7 bg-slate-800 pt-15 pb-4 md:flex-row md:items-start md:justify-between md:px-10 md:pt-5 lg:px-20"
          id="footer"
        >
          <div className="flex-center flex items-center justify-center space-y-10 pt-10 md:pt-0">
            <p className="flex items-center justify-center">
              <img src="/images/shortly/logo.svg" alt="logo" />
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-6 md:flex-row md:justify-start md:space-x-6">
            <About
              header="Features"
              container={["Link shortening", "Branded Links", "Analytics"]}
            />
            <About
              header="resources"
              container={["blog", "developer", "support"]}
            />
            <About
              header="company"
              container={["About", "our team", "careers", "contact"]}
            />
          </div>
          <div className="flex items-center justify-center space-x-3">
            {Icons.map((icon) => (
              <FontAwesomeIcon icon={icon} className="text-lg text-zinc-200" />
            ))}
          </div>
        </section>
      </div>
    </ShortlyContext>
  );
}

function About({ header, container }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-1">
      <h3 className="text-md text-center font-bold tracking-tighter text-neutral-100 capitalize">
        {header}
      </h3>
      <div className="flex flex-col items-center justify-center space-y-1">
        {container.map((label) => (
          <p className="text-zinc-550 text-center text-sm tracking-tighter text-zinc-400/90 capitalize">
            {label}
          </p>
        ))}
      </div>
    </div>
  );
}

function Statistics({ icon, header, translate, size }) {
  console.log(translate);
  return (
    <div
      className={`relative flex w-[22rem] flex-col items-center justify-center space-y-3 rounded-md bg-white px-8 py-3 pt-15 shadow-xl shadow-teal-100`}
      style={{
        transform: size >= 1024 ? `translateY(${translate}px)` : "",
      }}
    >
      {/* <p className="left:[50%] absolute top-[0%] translate-y-[-50%] rounded-full bg-blue-950 p-3"> */}
      <img
        src={`/images/shortly/${icon}`}
        alt=""
        className="left:[50%] absolute top-[0%] translate-y-[-50%] rounded-full bg-blue-950 p-5"
      />
      {/* </p> */}
      <h3 className="text-md text-center font-bold text-gray-900 capitalize">
        {header}
      </h3>

      <div className="tracking-lighter text-center text-sm text-zinc-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iusto,
        magnam dolorum dignissimos exercitationem aliquam voluptatum ad{" "}
      </div>
    </div>
  );
}

function ShortlyLinks({ longName, shortName, buttonColor }) {
  return (
    <div className="mb-4 flex w-[25rem] flex-col items-center justify-center rounded-md bg-cyan-50 px-7 py-4 text-center shadow-xl shadow-zinc-300/50 md:w-[37rem] md:flex-row md:justify-between lg:w-[44rem]">
      <p className="text-center text-sm font-bold tracking-tight text-gray-950/80">
        {longName}
      </p>
      <div className="flex flex-col items-center justify-center space-x-5 md:flex-row">
        <Link className="text-tight text-md font-bold text-teal-500">
          {shortName}
        </Link>
        <button
          className={`py2 button mt-2 rounded-md px-4 capitalize ${buttonColor} md:mt-0`}
        >
          copy
        </button>
      </div>
    </div>
  );
}

export default Shortly;
