function Card() {
  return (
    <div className="flex h-full w-screen flex-col items-center justify-center gap-3 bg-cyan-950/20 p-4 md:flex-row md:flex-wrap">
      <Carding />
      <Carding bg="border-blue-700" buttom="bg-blue-800" />
      <Carding />
    </div>
  );
}

function Carding({ bg = "border-gray-700", buttom }) {
  return (
    <div
      className={`flex flex-col items-start justify-center gap-4 rounded-md border-6 bg-sky-950 py-4 ${bg} bg-blue`}
    >
      <div className="flex w-[20rem] flex-col items-start justify-center gap-2 px-4">
        <h2 className="text-md w-full text-center text-gray-500 uppercase">
          Basic
        </h2>
        <div className="flex w-full flex-col gap-1 text-center">
          <p className="text-sm text-gray-300">
            100 <span className="text-xl">GB</span>
          </p>
          <p className="w-full text-center text-sm text-gray-300/85">
            $ 1.999 month
          </p>
        </div>
        <button
          className={`border-sm w-full cursor-pointer rounded-md border border-blue-600 p-2 text-center tracking-wider text-green-50 shadow-2xs shadow-gray-600 outline-0 ${buttom}`}
        >
          Purchase
        </button>
      </div>
      <div className="mt-6 flex w-full flex-col gap-1 border-t border-zinc-400/30 pt-2 text-center">
        <p className="flex w-full items-center justify-center">
          <span> ✔</span>
          <span className="text-sm text-gray-500">10 GB storage</span>
        </p>
        <p className="flex w-full flex-row items-center justify-center">
          <span> ✔</span>
          <span className="text-sm text-gray-500">
            optimize to add moderate
          </span>
        </p>
        <p className="flex w-full flex-row items-center justify-center">
          <span> ✔</span>
          <span className="text-sm text-gray-500">
            Extra member benefit for you
          </span>
        </p>
      </div>
    </div>
  );
}

export default Card;
