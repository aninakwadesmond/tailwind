import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

function Clipboard() {
  const logos = ["google", "ibm", "microsoft", "hp", "vector-graphics"];
  const footerActions = [
    "FAQ's",
    "Privacy Policy",
    "Install Guide",
    "Contact Us",
    "Press Kit",
  ];

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const Icons = ["faFacebookSquare", "faInstagram", "faTwitter"];
  return (
    <div className="flex flex-col items-start justify-center overflow-x-hidden">
      <div className="mb-0 flex flex-col gap-6 bg-white">
        <div
          className="relative flex h-screen w-screen flex-col items-center justify-center space-y-4 bg-cover bg-center bg-no-repeat md:mx-auto md:mb-20 md:h-auto md:pt-20"
          style={{
            backgroundImage: `url(/images/clip/bg-header-mobile.png) `,
          }}
        >
          <span className="absolute top-0 right-0 bottom-0 left-0 -z-10 h-screen w-screen bg-linear-to-b from-sky-50/60 to-white"></span>
          <h1 className="">
            <img
              src="/images/clip/logo.svg "
              alt="logo image"
              className="w-[80%]"
            />
          </h1>
          <h2 className="flex w-[80%] max-w-md items-center justify-center text-center text-4xl font-bold tracking-wider text-slate-800/80">
            A history of everything you copy
          </h2>
          <p className="text-md z-40 mx-auto w-[90%] text-center font-semibold tracking-normal text-zinc-700/60 font-stretch-50% md:mx-auto md:w-[70%] lg:w-[55%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Temporibus, maiores provident? Consequuntur, doloremque dolorem.
            Excepturi sed ex nisi voluptatem. Vero inventore aliquam sunt animi
            totam. Eius tenetur architecto deleniti
          </p>
          <div className="flex w-full flex-col items-center justify-center space-y-5 md:flex-row md:justify-center md:gap-8 md:space-x-4 md:p-2">
            <button className="mx-auto flex w-[70%] cursor-pointer items-center justify-center rounded-full bg-blue-600/70 px-1 py-2 text-center text-lg tracking-wider text-blue-100 shadow-xl shadow-blue-600/30 duration-500 hover:bg-blue-600/90 md:m-0 md:w-auto md:px-6 md:align-middle">
              Download for ios
            </button>
            <button className="flex w-[70%] cursor-pointer items-center justify-center rounded-full bg-emerald-500/75 p-2 text-lg text-zinc-100 shadow-xl shadow-emerald-500/30 hover:bg-emerald-500/90 md:w-auto md:px-6">
              Download for mac
            </button>
          </div>
        </div>
        <div className="flex w-screen flex-col space-y-7 px-4">
          <div className="mx-auto flex w-[90%] flex-col space-y-2">
            <h2 className="mx-auto w-[80%] text-center text-3xl font-bold tracking-tight text-gray-600">
              Keep track of your snippets
            </h2>
            <p className="text-md mx-auto w-[99%] text-center font-normal tracking-normal text-gray-400 md:w-[65%] lg:w-[55%]">
              clipboard instantly store any items you copy in the cloud, meaning
              you can access your snippets immediately on all your devices. Our
              Mac and IOS apps will help you organize everything
            </p>
          </div>
          <div className="mb-20 flex flex-col items-center justify-center space-y-8 md:mx-auto md:w-[45rem] md:flex-row md:items-start md:space-x-5 lg:w-[55rem]">
            <div className="mt-4 flex items-center justify-center md:w-[70%]">
              <img
                src="/images/clip/image-computer.png"
                alt="computer"
                className="w-[70%] md:w-full"
              />
            </div>
            <div className="flex flex-col items-center justify-center space-y-7 md:space-y-4 md:pt-6">
              <div className="flex flex-col items-center justify-center space-y-1">
                <h className="lg:text-md text-center text-xl font-bold tracking-wide text-gray-500 capitalize md:text-sm">
                  Quick search
                </h>
                <p className="tracking normal text-md font-semi-bold mx-auto w-[70%] text-center text-gray-400 md:text-[12px] lg:text-sm">
                  Easily search your snippet by content ,category, web addres,
                  imaages, application and more
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-1">
                <h2 className="lg:text-md text-xl font-bold tracking-wide text-gray-500 md:text-sm">
                  iCloud Sync
                </h2>
                <p className="text-md text-center tracking-normal text-gray-400 md:text-[12px] lg:text-sm">
                  Instantly save and sync devices across all networks
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-1">
                <h2 className="md:text-md lg:text-md text-lg font-bold tracking-normal text-gray-500 md:text-sm">
                  Completely Free
                </h2>
                <p className="text-md w-[70%] text-center font-normal tracking-normal text-gray-400 md:text-[12px] lg:text-sm">
                  Retrieve every lost snippet from the first day you use this
                  app
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-6 flex w-[90%] flex-col space-y-2">
          <h2 className="text-normal text-center text-3xl font-bold tracking-tight text-gray-600 capitalize">
            access clipboard anywhere
          </h2>
          <p className="text-md mx-auto w-[90%] text-center tracking-normal text-gray-400 md:w-[60%]">
            Whether you're on the go, or at your computer, you can access all
            your Clipboard snippets in a feq simple clicks
          </p>
          <div className="mt-10 flex items-center justify-center">
            <img
              src="/images/clip/image-devices.png"
              alt=""
              className="w-[70%] md:w-[60%]"
            />
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-center space-y-3">
          <div className="flex flex-col gap-3">
            <h2 className="text-center text-3xl font-bold tracking-tighter text-gray-600">
              Supercharge your workflow
            </h2>
            <p className="text-md text-center tracking-normal text-gray-400">
              We've got the tools to boost your productivity
            </p>
            <div className="flex flex-col items-center justify-center space-y-8 md:mx-auto md:w-[95%] md:flex-row md:items-start md:justify-between">
              <div className="mt-7 flex flex-col items-center justify-center gap-2">
                <div className="flex items-center justify-center">
                  <img
                    src="/images/clip/icon-blacklist.svg"
                    alt=""
                    className="w-[70%]"
                  />
                </div>
                <h3 className="text-md text-center font-bold tracking-tight text-gray-600">
                  Create Blacklist
                </h3>
                <p className="mx-auto w-[70%] text-center text-sm tracking-normal text-gray-400">
                  Easily search your snippets through category, content, web
                  application and more
                </p>
              </div>
              <div className="mt-7 flex flex-col items-center justify-center gap-2">
                <p className="flex items-center justify-center">
                  <img src="/images/clip/icon-text.svg" alt="" />
                </p>
                <h3 className="text-md font-bold tracking-tight text-gray-500">
                  Plain Texts Snippests
                </h3>
                <p className="text-normal tracking tight w-[70%] text-center text-sm text-gray-400">
                  Remove unwanted formatting from copied text for a consistent
                  look
                </p>
              </div>
              <div className="mt-7 flex flex-col items-center justify-center gap-3">
                <p className="flex items-center justify-center">
                  <img
                    src="/images/clip/icon-preview.svg"
                    alt="preview icon"
                    className="w-[70%]"
                  />
                </p>
                <h3 className="text:md text-center font-bold tracking-tight text-gray-500">
                  Sneak Preview
                </h3>
                <p className="mx-auto w-[70%] text-center text-sm text-gray-400">
                  Quick preview of all snippet on your Clipboard
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-30 mb-30 flex flex-col items-center justify-center space-y-12 md:mx-auto md:w-[70%] md:flex-row md:items-start md:justify-between md:space-x-4">
          {logos.map((brand) => (
            <p className="">
              <img
                src={`/images/clip/logo-${brand}.png`}
                alt={`${brand} logo`}
                className="md:w-[70%]"
              />
            </p>
          ))}
        </div>
        <div className="flex w-[90%] flex-col space-y-3 text-center md:mx-auto md:w-[60%] lg:w-[50%]">
          <h3 className="text-3xl font-bold tracking-tight text-gray-600">
            Clipboard for iOS and Mac
          </h3>
          <p className="mx-auto w-[70%] text-center text-sm font-normal tracking-normal text-gray-400">
            Available for free on the App Store.Download for Mac or iOS, sync
            with the iCloud and you are ready to start adding to your clipboard
          </p>
          <div className="mt-8 flex w-full flex-col items-center justify-center gap-7 md:flex-row md:space-x-4">
            <button className="mx-auto flex w-[70%] cursor-pointer items-center justify-center rounded-full bg-emerald-500 p-2 text-center text-lg text-emerald-50 shadow-xl shadow-emerald-500/30 duration-500 hover:bg-emerald-600/70 active:-translate-y-0.5">
              Download for iOS
            </button>
            <button className="to-sky-400/0.4 mx-auto flex w-[70%] cursor-pointer items-center justify-center rounded-full bg-sky-500 from-sky-200/50 to-sky-300/50 p-2 text-lg text-sky-100 shadow-xl shadow-sky-500/30 duration-500 hover:bg-linear-to-r active:-translate-y-0.5">
              Download for Mac
            </button>
          </div>
        </div>
        <div className="md:w-[90%]md:space-x-0 mt-10 flex flex-col items-center justify-center gap-4 bg-amber-50/40 px-7 py-5 sm:flex-row sm:justify-between md:mx-auto">
          <div className="flex items-center justify-center gap-4">
            <p className="flex items-center justify-between">
              <img
                src="/images/clip/logo.svg"
                alt="logo-image"
                className="w-10 sm:w-8"
              />
            </p>
            <div className="flex flex-wrap items-center justify-start space-x-4 sm:w-[30rem]">
              {footerActions.map((foot) => (
                <span className="text-sm font-semibold text-gray-300">
                  {foot}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-start gap-1">
            {/* {Icons.map((icon) => (
              <FontAwesomeIcon icon={`${icon}`} />
            ))} */}
            <FontAwesomeIcon
              icon={faFacebookSquare}
              className="cursor-pointer text-2xl text-zinc-600 hover:text-sky-300"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className="cursor-pointer text-2xl text-zinc-600 hover:text-sky-300"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="cursor-pointer text-2xl text-zinc-600 hover:text-sky-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clipboard;
