import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Login() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-amber-50">
      <div className="grid md:relative md:max-w-[40rem] md:grid-cols-5">
        <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-slate-50 px-3 py-4 shadow-xl md:col-span-3">
          <div className="flex w-full items-center justify-between">
            <h1 className="text-xl font-bold tracking-wide capitalize">
              Log in
            </h1>
            <FontAwesomeIcon
              icon={faClose}
              className="rounded-full bg-amber-50 p-2 md:absolute md:top-2 md:right-2"
            />
          </div>
          <p className="text-sm font-light tracking-tighter text-gray-500/50">
            Log in to account to upload pictuires, video and images
          </p>
          <input
            type="text"
            className="border-4xl placeholder:text-md placehoder:text-md block w-full rounded-md border-2 border-zinc-500/30 px-3 py-4 shadow-sm placeholder:tracking-tight focus:outline-0"
            placeholder="Enter your email address"
          />
          <div className="flex w-full flex-col gap-3 md:flex-row md:justify-between">
            <p className="text-md border-b-2/100 hover: flex cursor-pointer items-center justify-center py-1 font-normal tracking-tighter text-blue-500">
              Forget password ?
            </p>
            <button className="flex cursor-pointer items-center justify-center gap-2 rounded-md bg-blue-950/50 px-2 py-3 text-xl tracking-wide text-slate-100 capitalize shadow-md transition-all duration-500 hover:bg-blue-950/90">
              Next
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          <div className="mt-4 w-full border-t border-zinc-500/50 p-2 text-center text-sm font-extralight tracking-tighter text-slate-400">
            or log in with
          </div>
          <div className="flex w-full flex-col gap-4 md:flex-row md:justify-between">
            <button className="group text-md flex w-full cursor-pointer items-center justify-center gap-1 rounded-md border border-zinc-300 px-1 py-2 text-sm font-bold tracking-tight capitalize shadow-md">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-xl text-blue-500"
              />
              facebook
            </button>
            <button className="text-md flex w-full cursor-pointer items-center justify-center gap-2 rounded-sm border-2 border-zinc-300 px-1 py-2 text-sm font-bold tracking-tighter capitalize shadow-md">
              <FontAwesomeIcon
                icon={faGoogle}
                className="text-lg text-emerald-400"
              />
              google
            </button>
          </div>
        </div>
        <div className="hidden h-full w-full md:col-span-2 md:block">
          <img
            src="../../public/images/image.jpg "
            alt=""
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
