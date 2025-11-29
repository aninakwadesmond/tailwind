function Pricing() {
  return (
    <div className="flex w-screen flex-col items-center justify-center bg-zinc-100">
      <div className="flex h-auto w-80 flex-col items-start justify-center gap-4 bg-white p-4 md:w-150 md:flex-row">
        <div className="h-full w-full bg-amber-500">
          <img
            src="/images/headphone.png
          "
            className="w-full transform object-contain duration-1000 hover:scale-105 hover:cursor-pointer"
            alt=""
          />
        </div>
        <div className="flex w-full flex-col items-center justify-center space-y-2">
          <p className="rounded-md bg-black p-1 text-[10px] tracking-wider text-green-50/70">
            Free shipping
          </p>
          <h2 className="mx-auto w-[88%] text-xl font-medium tracking-tight">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h2>
          <p className="mt-6 flex flex-col items-center justify-center gap-2">
            <span className="text-sm text-zinc-400 line-through">$799</span>
            <span className="text-2xl font-bold tracking-wider">$ 599</span>
            <span className="w-full text-[12px] tracking-tighter text-zinc-300">
              The discount is valid till April 03 as long as its in stock
            </span>
          </p>
          <button className="mt-6 w-full cursor-pointer rounded-md bg-blue-500 px-2 py-2 tracking-tighter text-neutral-50 capitalize shadow-xl">
            Add to cart
          </button>
          <p className="justify- mt-2 flex w-full items-center space-x-2">
            <span className="animate h-3 w-3 animate-bounce rounded-full bg-green-400"></span>
            <span className="text-sm text-zinc-400">50+ items in stock</span>
          </p>
          <button className="r flex w-full cursor-pointer items-center justify-center gap-2 rounded-md border-2 border-zinc-300 py-2 tracking-tighter text-gray-500 capitalize shadow-xl">
            <span className="inline-block h-5 w-5">
              <img src="/images/weight.png" alt="" className="h-full w-full" />
            </span>
            add chart
          </button>
          <button className="flex w-full items-center justify-center gap-2 rounded-md border-2 border-zinc-300 py-2 tracking-tighter text-gray-500 capitalize shadow-xl">
            <p className="h-5 w-5">
              <img
                src="/images/heart.png"
                alt=" image"
                className="h-full w-full"
              />
            </p>
            add to wishlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
