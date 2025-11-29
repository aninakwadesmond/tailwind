import { faClose, faNavicon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function RootNavigation() {
  const [nav, setNav] = useState(false);
  return (
    <div className="relative w-screen">
      {nav && (
        <span className="absolute top-0 right-0 bottom-0 left-0 z-30 bg-gray-950/70"></span>
      )}
      <Navigation nav={nav} setNav={setNav} />
      <div className="mt-12">
        <Outlet />
      </div>
    </div>
  );
}

function Navigation({ nav, setNav }) {
  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex w-screen items-center justify-between bg-linear-to-br from-gray-900 to-gray-950 px-10 py-2">
      <p className="flex flex-col items-center justify-center">
        <img
          src="../../public/images/clip/logo.svg"
          alt="image"
          className={`w-[2rem] ${nav ? "z-40" : ""}`}
        />
      </p>
      <div
        className={`hidden items-center justify-start gap-4 md:flex ${nav ? "absolute top-[10rem] left-[50%] z-40 w-[20rem] -translate-x-[50%] flex-col items-center justify-center gap-2 rounded-md bg-cyan-950 py-4" : ""}`}
        style={
          nav
            ? {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "20rem",
              }
            : {}
        }
      >
        <Link
          to="/"
          className={`w-full text-center text-sm font-semibold tracking-normal text-gray-900 text-zinc-300 uppercase ${nav ? "border-b-1 border-zinc-200/60 pb-2" : ""}`}
          onClick={() => setNav(false)}
        >
          fylo
        </Link>
        <Link
          to="/bookmark"
          className={`w-full text-center text-sm font-semibold tracking-normal text-gray-900 text-zinc-300 uppercase ${nav ? "border-b-1 border-zinc-200/60 pb-2" : ""}`}
          onClick={() => setNav(false)}
        >
          Bookmark
        </Link>
        <Link
          to="/clip"
          className={`w-full text-center text-sm font-semibold tracking-normal text-gray-900 text-zinc-300 uppercase ${nav ? "border-b-1 border-zinc-200/60 pb-2" : ""}`}
          onClick={() => setNav(false)}
        >
          clipboard
        </Link>
        <Link
          to="/studio"
          className={`w-full ${nav ? "border-b-1 border-zinc-200/60 pb-2" : ""} text-center text-sm font-semibold tracking-tighter text-gray-900 text-zinc-300 uppercase`}
          onClick={() => setNav(false)}
        >
          studio
        </Link>
        <Link
          to="/shortly"
          className={`w-full ${nav ? "border-b-1 border-zinc-200/60 pb-2" : ""} text-center text-sm font-semibold tracking-normal text-gray-900 text-zinc-300 uppercase`}
          onClick={() => setNav(false)}
        >
          shortly
        </Link>
        <Link
          to="/testimonial"
          className={`w-full ${nav ? "border-b-1 border-zinc-200/60 pb-2" : ""} text-center text-sm font-semibold tracking-normal text-gray-900 text-zinc-300 uppercase`}
          onClick={() => setNav(false)}
        >
          testimonial
        </Link>
        <Link to="/" onClick={() => setNav(false)}>
          <button className="button rounded-md bg-teal-400 px-6 py-2">
            login
          </button>
        </Link>
      </div>
      <p
        className="group flex cursor-pointer items-center justify-center md:hidden"
        onClick={() => setNav((prev) => !prev)}
      >
        <FontAwesomeIcon
          icon={nav ? faClose : faNavicon}
          className={`text-xl text-gray-200 group-hover:text-gray-300 ${nav ? "z-40" : ""}`}
        />
      </p>
    </div>
  );
}

export default RootNavigation;
