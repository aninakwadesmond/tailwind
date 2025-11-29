function Email() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-zinc-900">
      <div className="flex h-2/3 w-[20rem] flex-col items-start justify-start gap-1 rounded-md bg-slate-800 p-2 md:h-auto md:w-1/2 md:flex-row md:gap-2">
        {/* <div></div> */}
        <p className="mb-4 h-1/2 w-full md:h-full">
          <img
            src="../../public/images/image.jpg"
            alt="image seed"
            className="h-full w-full rounded-md object-cover md:rounded-br-none md:rounded-bl-none"
          />
        </p>
        <div className="= mx-auto flex w-[100%] flex-col items-center justify-center space-y-1 text-white md:h-full md:space-y-3">
          <h2 className="font-bold tracking-wide">Enter an email message</h2>
          <p className="justify-centeralign-middle mx-auto flex flex-col items-center text-[12px] tracking-tight text-gray-300">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur dignissimos corporis reiciendis{" "}
          </p>
          <div className="md: flex w-full flex-col items-center justify-center gap-2 md:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="shadoe=w mt-4 inline-block w-full rounded-md border border-zinc-500 p-1 text-[13px] tracking-tight text-gray-300 placeholder:text-center placeholder:text-sm focus:outline-none md:w-3/4"
            />
            <button className="translate mt-2 inline-block w-full transform cursor-pointer rounded-md border-0 bg-green-700 py-1 shadow-[10px] shadow-amber-300 hover:bg-green-400/60 hover:duration-1000 md:w-1/4">
              send email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Email;
