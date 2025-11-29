import { faClose, faNavicon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setMemu, setScreen } from "../store/StoreItems/Studio";
import {
  faFacebookSquare,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Studio() {
  const [width, setWidth] = useState(0);
  const dispatch = useDispatch();
  const { menu } = useSelector((state) => state.studio);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    function updateWidth() {
      dispatch(setScreen(window.innerWidth));
      setWidth(window.innerWidth);
      console.log(width);
    }

    updateWidth();

    window.addEventListener("resize", updateWidth);
    console.log("rezise");
    return function () {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  function handleOpenMenu() {
    dispatch(setMemu());
  }

  return (
    <div className="relative container flex w-screen flex-col">
      {/* <h1>{width}</h1> */}
      {/* hero-section */}
      {menu && (
        <span className="absolute top-0 right-0 bottom-[0%] left-0 z-30 h-full w-full bg-linear-to-tr from-black to-gray-950"></span>
      )}
      <section
        className={`relative flex ${!menu ? "h-100" : "h-screen"} w-screen flex-col items-center justify-start space-y-20 overflow-x-hidden bg-cover bg-center bg-no-repeat pt-5`}
        style={{
          backgroundImage:
            "url(../../public/images/images/desktop/image-hero.jpg",
        }}
        id="about"
      >
        {!menu && (
          <span className="absolute top-0 right-0 bottom-[0%] left-0 z-0 h-full w-full bg-linear-to-b from-fuchsia-500/10 to-fuchsia-950/60"></span>
        )}

        <div className="z-50 mt-10 flex w-[80%] items-center justify-between lg:w-[60%]">
          <h1
            className={`text-3xl font-bold tracking-tighter text-white ${menu ? "hidden" : ""}`}
          >
            loopStudio
          </h1>
          <div
            className={`items-center justify-center gap-2 text-lg text-fuchsia-200 md:block ${menu ? `text-md absolute top-[20%] flex flex-col space-y-2 space-x-0` : "hidden"}`}
          >
            <a
              href="#about"
              className="tracking-tighter capitalize duration-500 hover:text-red-400 hover:underline hover:underline-offset-6"
              onClick={handleOpenMenu}
            >
              About
            </a>
            <a
              href="#career"
              className="tracking-tighter capitalize duration-500 hover:text-red-400 hover:underline hover:underline-offset-6"
              onClick={handleOpenMenu}
            >
              Careers
            </a>
            <a
              href="#event"
              className="tracking-tighter capitalize duration-500 hover:text-red-400 hover:underline hover:underline-offset-6"
              onClick={handleOpenMenu}
            >
              Creation
            </a>
            <a
              href="#contact"
              className="hover: tracking-tighter capitalize duration-500 hover:text-red-400 hover:underline hover:underline-offset-6"
              onClick={handleOpenMenu}
            >
              Contact
            </a>
            {/* <Link
              href="#support"
              className="hover: tracking-tighter capitalize hover:text-red-400 hover:underline hover:underline-offset-6"
            >
              Support
            </Link> */}
          </div>
          <span
            className={`md:hidden ${menu ? "flex w-full justify-end" : ""}`}
            onClick={handleOpenMenu}
          >
            {!menu ? (
              <FontAwesomeIcon
                icon={faNavicon}
                className="z-40 cursor-pointer text-xl tracking-tighter text-fuchsia-200"
              />
            ) : (
              <FontAwesomeIcon
                icon={faClose}
                className={`z-40 cursor-pointer text-xl tracking-tighter text-fuchsia-200`}
              />
            )}
          </span>
        </div>
        <div className="flex w-full items-center justify-center md:w-[80%] md:justify-start lg:w-[60%]">
          <div className="z-10 flex max-w-[24rem] items-center justify-start rounded border-2 border-zinc-200 px-3 py-2 text-3xl font-normal tracking-normal text-fuchsia-50/80 uppercase">
            impressive experiences that deliver
          </div>
        </div>
      </section>

      {/* about VAR section */}
      <section
        className="relative mx-auto mt-25 mb-10 flex w-screen flex-col space-y-10 pt-15 lg:mx-auto lg:w-[60%]"
        id="career"
      >
        <div className="flex w-screen flex-col space-y-10 md:relative md:w-[70%] md:justify-center">
          <div className="mx-auto flex w-[90%] items-center justify-center md:justify-start">
            <img
              src="../public/images/images/desktop/image-interactive.jpg"
              alt="interrractive image"
              className="w-100"
            />
          </div>
          <div className="-bottom-2 left-90 mx-auto flex w-[80%] flex-col items-center justify-center space-y-2 rounded md:absolute md:w-[25rem] md:bg-white md:p-2">
            <h2 className="text-center text-3xl font-bold tracking-normal text-slate-600 uppercase">
              The leader in interactive vr
            </h2>
            <p className="text-center text-sm tracking-tighter text-slate-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsum
              qui enim molestias, cum maiores suscipit veniam perferendis
              incidunt earum id debitis quibusdam doloremque numquam reiciendis
              ad cupiditate inventore accusamus?
            </p>
          </div>
        </div>
      </section>

      {/* our creation */}
      <section
        className="mb-6 flex w-screen flex-col items-center justify-center space-y-10 pt-15 md:mx-auto"
        id="event"
      >
        <div className="flex flex-col items-center justify-center space-y-10 md:relative md:max-w-[45rem] lg:max-w-[60rem]">
          <div className="flex w-full items-center justify-center md:justify-start">
            <h1 className="mt-10 flex items-center justify-center text-center text-3xl font-bold tracking-normal text-gray-600 uppercase md:justify-start">
              our creation
            </h1>
          </div>
          <div className="mx-auto grid space-y-5 md:grid-cols-2 md:space-x-3 lg:grid-cols-4">
            <Creation image="deep-earth" name="deep earth" />
            <Creation image="night-arcade" name="night arcade" />
            <Creation image="soccer-team" name="soccer team vr" />
            <Creation image="grid" name="the grid" />
            <Creation image="from-above" name="from up above vr" />
            <Creation image="pocket-borealis" name="pocket borealis" />
            <Creation image="curiosity" name="the curiosity" />
            <Creation image="fisheye" name="make it fisheye" />
          </div>
          <button className="text-md hover te flex w-full cursor-pointer items-center justify-center rounded border-1 border-s-black p-2 tracking-wide uppercase hover:bg-black hover:text-white md:absolute md:top-8 md:right-3 md:w-auto">
            see all
          </button>
        </div>
      </section>
      <section
        className="mt-10 flex w-screen flex-col items-center justify-center bg-black py-6 md:flex-row md:justify-between md:space-y-0 md:px-20"
        id="contact"
      >
        <div className="flex flex-col items-center justify-start space-y-0">
          <h1 className="text-center text-3xl font-bold tracking-tight text-gray-100">
            loopstudios
          </h1>
          <div className="item-center justify center mt-5 flex flex-col space-y-4 text-center text-sm font-light tracking-tighter capitalize md:mt-2 md:flex-row md:space-x-3">
            <a href="#about" className="text-zinc-400">
              About
            </a>
            <a href="#career" className="text-zinc-400">
              Careers
            </a>
            <a href="#event" className="text-zinc-400">
              Creation
            </a>
            <a href="#contact" className="text-zinc-400">
              Contact
            </a>
            {/* <a href="" className="text-zinc-400">
              Support
            </a> */}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-0">
          <div className="mt-6 flex items-center justify-center space-x-3">
            <FontAwesomeIcon
              icon={faFacebookSquare}
              className="text-lg text-zinc-100"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-lg text-zinc-100"
            />
            <FontAwesomeIcon
              icon={faPinterest}
              className="text-lg text-zinc-100"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-lg text-zinc-100"
            />
          </div>
          <p className="my-3 flex flex-col items-center justify-center text-[10px] tracking-tighter text-gray-300/50 capitalize">
            &copy; 2022 loopstudio. All rights reserved
          </p>
        </div>
      </section>
    </div>
  );

  function Creation({ image, name }) {
    const { screen } = useSelector((state) => state.studio);

    return (
      <div className="group relative cursor-pointer self-baseline rounded">
        <span className="absolute top-0 right-0 bottom-0 left-0 w-full rounded bg-linear-to-br from-gray-950/10 to-gray-950/70 transition-all duration-5000 group-hover:to-gray-300/70"></span>
        <img
          src={`../../public/images/images/${screen > 1024 ? "desktop" : "mobile"}/image-${image}.jpg `}
          alt="earth-image"
          className="duration:500 w-[348px] transform rounded object-cover object-center group-hover:scale-103"
        />
        <span className="absolute bottom-4 left-4 p-1 text-2xl font-light tracking-tight text-gray-200 uppercase group-hover:text-gray-400">
          {name}
        </span>
      </div>
    );
  }
}

export default Studio;
