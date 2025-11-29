import {
  faArrowCircleDown,
  faArrowDown,
  faClose,
  faNavicon,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { BookmarkContext } from "../Context/Bookmark";
import {
  faFacebookSquare,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function BookMark() {
  const [cur, setCur] = useState(1);
  const [value, setValue] = useState("");
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <BookmarkContext value={{ cur, setCur }}>
      <div
        className={`relative flex w-screen flex-col items-center justify-center overflow-x-hidden`}
      >
        {/* hero section */}
        <section className="mx-auto flex max-w-[95%] flex-col items-center justify-center space-y-10">
          <nav className="flex w-full items-center justify-between p-3">
            {menu && (
              <span className="buttom-[0%] absolute top-[0%] right-[0%] left-[0%] z-10 h-full w-screen bg-gray-950/70"></span>
            )}

            <div className="flex w-full items-center justify-start space-x-3">
              <img
                src="/images/bookmark/images/logo-bookmark.svg"
                alt="bookmark"
                className={`${menu ? "z-20" : ""} max-w-[90%] sm:max-w-[30rem]`}
              />
              {/* <h2 className="text-xl font-semibold tracking-wide text-gray-800 uppercase">
              Bookmark
            </h2> */}
            </div>
            <div
              className={`flex items-center justify-center text-xl text-gray-900`}
            >
              <div
                className={`hidden items-center justify-start space-y-3 space-x-4 md:flex md:space-y-0`}
                style={
                  menu
                    ? {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        zIndex: "30",
                        position: "absolute",
                        top: "5rem",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100vw",
                        textAlign: "center",
                      }
                    : {}
                }
              >
                <a
                  href="#features"
                  className={`cursor-pointer text-sm tracking-wide text-gray-400 uppercase`}
                  style={
                    menu
                      ? {
                          color: "white",
                          borderBottom: "1px solid gray",
                          width: "400px",
                        }
                      : {}
                  }
                  onClick={() => setMenu(false)}
                >
                  features
                </a>
                <a
                  href="#download"
                  className="cursor-pointer text-sm tracking-wide text-gray-400 uppercase"
                  style={
                    menu
                      ? {
                          color: "white",
                          borderBottom: "1px solid gray",
                          width: "400px",
                        }
                      : {}
                  }
                  onClick={() => setMenu(false)}
                >
                  download
                </a>
                <a
                  href="#faq"
                  className="cursor-pointer text-sm tracking-wide text-gray-400 uppercase"
                  style={
                    menu
                      ? {
                          color: "white",
                          borderBottom: "1px solid gray",
                          width: "400px",
                        }
                      : {}
                  }
                  onClick={() => setMenu(false)}
                >
                  faq
                </a>
                <a href="#footer" onClick={() => setMenu(false)}>
                  <button className="button rounded-md bg-red-400 px-5 py-2 text-sm tracking-tighter text-red-50 uppercase">
                    login
                  </button>
                </a>
              </div>
              <span
                className={`flex cursor-pointer items-center justify-center md:hidden ${menu ? "z-20" : ""}`}
                onClick={() => setMenu((prev) => !prev)}
              >
                <FontAwesomeIcon
                  icon={menu ? faClose : faNavicon}
                  style={{ color: menu ? "white" : "" }}
                />
              </span>
            </div>
          </nav>
          <main className="relative flex w-full flex-col items-center justify-center md:mx-auto md:max-w-[50rem] md:flex-row md:gap-6 lg:max-w-[60rem]">
            <span className="top-[50%] -right-200 -bottom-10 left-[70%] -z-10 rounded-full bg-blue-700/80 md:absolute"></span>
            <img
              src="/images/bookmark/images/illustration-hero.svg"
              alt="illratiion-Image"
              className="max-w-[23rem] md:order-2 md:max-w-[25rem] lg:max-w-[30rem]"
            />
            <div className="relative flex w-full flex-col items-center justify-center gap-5">
              <h1 className="flex max-w-1/2 items-center justify-start text-center text-2xl font-bold tracking-wide text-gray-900 capitalize md:max-w-full md:text-start md:text-3xl lg:text-start">
                A simple Bookmark Manager
              </h1>
              <p className="max-w-[37rem] text-center text-sm font-semibold text-gray-400 md:text-start">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex est
                consequatur magni iure harum voluptatibus suscipit consequuntur
                culpa eum delectus non magnam deserunt, blanditiis excepturi.
                Optio alias eius minima consequatur!
              </p>
              <div className="flex items-center justify-center space-x-10 md:w-full md:justify-start">
                <button className="button rounded-md bg-blue-500 px-2 py-4 text-center tracking-tighter text-blue-50">
                  Get it on Chrome
                </button>
                <button
                  className="button rounded-md bg-zinc-300 px-2 py-4 text-center tracking-tighter text-amber-200"
                  style={{ color: "gray" }}
                >
                  Get it on Chrome
                </button>
              </div>
            </div>
          </main>
        </section>

        {/* features section */}
        <section
          className="mx-auto my-20 flex w-[95%] flex-col items-center justify-center gap-4 pt-15"
          id="features"
        >
          <div className="flex flex-col items-center justify-center space-y-3">
            <h2 className="text-center text-3xl font-bold tracking-wide text-gray-950">
              Features
            </h2>
            <p className="sm:sm-w-[30rem] mx-auto max-w-[95%] text-center text-sm font-semibold tracking-tight text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus accusantium illum nesciunt! Non alias nihil ipsam
              voluptate enim ab sit exercitationem deleniti placeat dolorum,
            </p>
          </div>
          <div className="group flex items-center justify-center space-x-10 border-b-2 border-b-gray-300 group-hover:border-b-gray-800">
            <NavigationHead nav={1}>simple bookmarking</NavigationHead>
            <NavigationHead nav={2}>speedy searching</NavigationHead>
            <NavigationHead nav={3}> Easy sharing</NavigationHead>
          </div>
          <SearchContent header="Bookmark in one click" image={1} />
          <SearchContent header="Intelligence search" image={2} />
          <SearchContent header="Share your bookmarks" image={3} />
        </section>

        {/* extensiions */}
        <section
          className="mt-10 flex flex-col items-center justify-center gap-4 pt-15"
          id="download"
        >
          <div className="flex max-w-[30rem] flex-col items-center justify-center space-y-2">
            <h2 className="text-bg-gray-950 text-center text-3xl font-bold tracking-tight capitalize">
              Download the extension
            </h2>
            <p className="flex items-center justify-center text-center text-[12px] text-zinc-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              excepturi illo placeat deleniti harum officiis accusamus quibusdam
              iure laudantium, sed voluptatem, magni aperiam. Facere adipisci
              voluptates quaerat error, ea eum?
            </p>
          </div>
          {/* <div className="container my-10 flex flex-col items-center justify-center space-y-6 rounded-md px-6 py-5 shadow-xl shadow-gray-400/40">
              
              </div> */}
          <div className="flex w-full flex-col items-center justify-center space-y-5 md:mx-auto md:w-[95%] md:flex-row md:space-x-6">
            <Extension logo="chrome" translateY={0} />
            <Extension logo="firefox" translateY={10} />
            <Extension logo="opera" translateY={25} />
          </div>
        </section>

        {/* frequnetly askesd questions */}
        <section
          className="mx-auto my-10 flex w-[95%] flex-col items-center justify-center space-y-5 pt-15 sm:w-[27rem]"
          id="faq"
        >
          <div className="flex flex-col items-center justify-center gap-1">
            <h2 className="text-center text-xl font-bold text-gray-950 capitalize">
              Frequently asked questions
            </h2>
            <p className="text-center text-[12px] text-zinc-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
              perspiciatis repellendus ipsa quas, laborum corporis soluta, quasi
            </p>
          </div>
          <div className="group mx-auto flex w-full flex-col items-start justify-center space-y-2">
            <Bookmark title="What is Bookmark ?" />
            <Bookmark title="How can I request a new browser ?" />
            <Bookmark title="Is there a mobile app ?" />
            <Bookmark title="What about other chronium browsers ?" />
          </div>
          <button className="button mt-5 flex items-center justify-center rounded-md bg-blue-500 px-6 py-2 text-sm tracking-tighter text-blue-100">
            More Info
          </button>
        </section>

        {/* footer */}
        <section
          className="flex w-full flex-col items-center justify-center space-y-0 bg-blue-500"
          id="footer"
        >
          <div className="mx-auto flex w-[95%] flex-col items-center justify-center space-y-4 py-10 pb-15 text-blue-50 sm:w-full md:pb-24">
            <p className="tracking wide text-center text-sm uppercase">
              35,000+ already joined
            </p>
            <h2 className="max-w-[25rem] text-center text-3xl font-bold text-blue-50">
              Stay up-to-date with what we're doing
            </h2>

            <div className="flex w-full flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-6">
              <div className="relative w-full sm:w-[25rem]">
                <input
                  type="text"
                  placeholder=""
                  value={value}
                  className="peer w-full rounded-md bg-blue-50 px-6 py-2 text-gray-400 outline-0"
                  onChange={(e) => setValue(e.target.value)}
                />
                <label
                  htmlFor=""
                  className="ease absolute top-[50%] left-5 -translate-y-[50%] rounded-sm px-2 text-blue-950/50 duration-500 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:-top-[0.5px] peer-focus:bg-blue-50 peer-focus:text-[12px]"
                  style={{
                    top: value.length > 0 ? "-0.5px" : "",
                    fontSize: value.length > 0 ? "12px" : "",
                    backgroundColor: value.length > 0 ? "white" : "",
                  }}
                >
                  Enter your email or number
                </label>
              </div>
              <button className="button text-md rounded-md-text-center text-md rounded-md bg-rose-500 px-6 py-2 text-red-50 uppercase">
                contact us
              </button>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center space-y-5 bg-gray-950 px-4 py-6 sm:w-full md:flex-row md:justify-between md:px-10">
            <div className="flex flex-col items-center justify-center gap-3 md:flex-row md:justify-start">
              <img
                src="/images/bookmark/images/logo-bookmark.svg"
                alt="Bookmark"
              />
              <a
                href="#features"
                className="text-[15px] font-semibold text-zinc-400 uppercase"
              >
                Features
              </a>
              <a
                href="#download"
                className="text-[15px] font-semibold text-zinc-400 uppercase"
              >
                Download
              </a>
              <a
                href="#faq"
                className="text-[15px] font-semibold text-zinc-400 uppercase"
              >
                FAQ
              </a>
            </div>
            <div className="flex items-center justify-center gap-4">
              <FontAwesomeIcon
                icon={faFacebookSquare}
                className="cursor-pointer text-xl text-zinc-300"
              />
              <FontAwesomeIcon
                icon={faTwitter}
                className="cursor-pointer text-xl text-zinc-300"
              />
            </div>
          </div>
        </section>
      </div>
    </BookmarkContext>
  );
}

function Bookmark({ title }) {
  return (
    <div
      className="group flex w-full cursor-pointer flex-col items-start justify-center space-y-2 border-b-2 border-b-zinc-300 pb-3"
      tabIndex={1}
    >
      <div className="group flex w-full items-center justify-between">
        <p className="text-md cursor-pointer text-start font-semibold text-zinc-500 duration-500">
          {title}
        </p>
        <FontAwesomeIcon
          icon={faArrowDown}
          className="text-md cursor-pointer duration-500 group-focus:-rotate-180"
        />
      </div>
      <div className="group ease flex max-h-0 items-center justify-start overflow-hidden group-focus:max-h-screen">
        <p className="px-4 py-6 text-sm tracking-tight text-zinc-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
          corporis assumenda est repellendus ipsa quas laborum qui earum
          voluptatibus impedit expedita, cum velit minima rem nostrum doloremque
          nam totam ad!
        </p>
      </div>
    </div>
  );
}

function Extension({ logo, translateY }) {
  return (
    <div
      className="container my-10 flex translate-y-[var(--x)] flex-col items-center justify-center space-y-6 rounded-md px-6 py-5 shadow-xl shadow-gray-400/40"
      style={{ "--x": `${translateY}px` }}
    >
      <div className="flex w-full flex-col items-center justify-center space-y-2 border-b-2 border-dashed border-b-zinc-200 pb-4">
        <img
          src={`/images/bookmark/images/logo-${logo}.svg`}
          alt="chrome"
          className="max-w-[10rem]"
        />
        <p className="text-lg font-bold tracking-tight text-gray-950 capitalize">
          {`Add to ${logo}`}
        </p>
        <p className="text-center font-semibold text-zinc-400">
          Minimum Version 66
        </p>
      </div>
      <button className="button flex items-center justify-center rounded-md bg-blue-500 px-6 py-3 text-center text-blue-100 md:px-2 md:text-[12px]">
        Add & Install Extension
      </button>
    </div>
  );
}

function SearchContent({ header, image }) {
  const { cur } = useContext(BookmarkContext);

  if (image !== cur) return;
  return (
    <div className="relative mx-auto flex max-w-[95%] items-center justify-center gap-6 sm:max-w-[35rem] md:max-w-[42rem] md:items-start md:gap-10 lg:items-start">
      <span className="right-[60%] -bottom-15 -left-100 -z-10 h-[10rem] rounded-full bg-blue-500 md:absolute"></span>
      <img
        src={`/images/bookmark/images/illustration-features-tab-${image}.svg`}
        alt="image profile"
        className="max-w-[50%] sm:max-w-[15rem] md:max-w-[20rem]"
      />
      <div className="flex flex-col items-start justify-center gap-4">
        <h2 className="text-start text-xl font-bold tracking-wide text-gray-950">
          {header}
        </h2>
        <p className="text-start text-[11px] tracking-tight text-zinc-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
          aliquid consectetur fugiat corrupti molestiae reprehenderit inventore,
          cum officiis
        </p>
        <button className="button rounded-md bg-blue-500 px-4 py-2">
          More Info
        </button>
      </div>
    </div>
  );
}

function NavigationHead({ children, nav }) {
  const { setCur } = useContext(BookmarkContext);
  function handleSetCur() {
    setCur(nav);
  }
  return (
    <p
      className="cursor-pointer items-center justify-center border-b-2 border-b-zinc-50 p-3 text-[12px] font-semibold text-zinc-500 capitalize hover:border-b-zinc-500"
      onClick={handleSetCur}
    >
      {children}
    </p>
  );
}

export default BookMark;
