import { faBookmark, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Gallery() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-300">
      <div className="mt-4 mb-4 flex w-[90%] flex-col items-start justify-center gap-2 rounded-xl bg-zinc-200 px-2 py-4 shadow-2xl">
        <div className="flex w-full items-center justify-end gap-2">
          {Array.from({ length: 4 }, (_, i) => i).map((el) => (
            <span className="border-t00 inline-block cursor-pointer border-2 border-t-0 border-r-0 border-l-0 border-b-amber-200/0 px-1 py-2 capitalize hover:border-b-black">
              hello
            </span>
          ))}
        </div>
        <div className="relative flex items-center justify-center gap-2">
          <input
            type="text"
            placeholder="search"
            className="text-md shadow-8xl w-60 cursor-pointer rounded-xl border border-3 border-t-0 border-r-0 border-l-0 border-gray-500/30 px-2 py-2 font-light tracking-wide shadow-gray-600 transition-all duration-500 placeholder:tracking-tighter placeholder:capitalize focus:w-100 focus:outline-0"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="text-md absolute top-[50%] right-2 translate-y-[-50%] cursor-pointer opacity-50"
          />
        </div>
        <div className="flex w-full items-center justify-end">
          <button className="flex w-[20%] cursor-pointer items-center justify-center rounded-xl bg-black p-2 text-center tracking-wider text-white shadow-xl">
            upload
          </button>
        </div>
        <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3">
          {Array.from({ length: 6 }, (_, i) => i + 1).map((num) => (
            <ImageContainer image={num} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ImageContainer({ image }) {
  return (
    <div className="group relative">
      <img
        src={`../../public/images/image${image}.jpg`}
        alt="image snaps  "
        className="cursor-pointer rounded-sm duration-500 group-hover:scale-102"
      />
      <p className="absolute bottom-0 left-0 flex w-full items-center justify-start rounded-sm bg-gray-600/70 opacity-0 duration-500 group-hover:scale-102 group-hover:opacity-100 hover:bottom-0">
        <span className="text-md w-[90%] cursor-pointer overflow-hidden px-1 text-sm font-light">
          Lorem ipsum dolor sit amet consectetur
        </span>
        <FontAwesomeIcon
          icon={faBookmark}
          className="text-sm text-gray-950/90"
        />
      </p>
    </div>
  );
}
export default Gallery;
