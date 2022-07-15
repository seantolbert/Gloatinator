export default function Nav() {
  return (
    <div className="flex flex-col justify-center items-center group pt-2 pr-2 pb-10 pl-10">
      <div className="flex gap-3 w-full items-center">
        <span className="transition-all duration-700 rounded-full border border-teal-400  w-8 h-8 group-hover:bg-teal-400 group-hover:w-10 group-hover:h-10 group-hover:rounded-md group-hover:transform-none translate-x-[108px]"></span>
        <span className="transition-all duration-700 rounded-full border border-amber-400  w-12 h-12 group-hover:bg-amber-400 group-hover:w-10 group-hover:h-10 group-hover:rounded-md group-hover:transform-none translate-x-[56.5px]"></span>
        <span className="transition-all duration-700 rounded-full border border-cyan-400  w-10 h-10 group-hover:bg-cyan-400 group-hover:w-10 group-hover:h-10 group-hover:rounded-md"></span>
        <span className="transition-all duration-700 rounded-full border border-indigo-400  w-14 h-14 group-hover:bg-indigo-400 group-hover:w-10 group-hover:h-10 group-hover:rounded-md group-hover:transform-none -translate-x-[59.5px]"></span>
        <span className="transition-all duration-700 rounded-full group-hover:rounded-md border border-rose-400  w-6 h-6 group-hover:bg-rose-400 group-hover:w-10 group-hover:h-10 group-hover:transform-none -translate-x-[111.5px]"></span>
      </div>

      <div className="m-3 w-4 h-4 -translate-y-[52px] group-hover:w-36 group-hover:h-10 group-hover:transform-none group-hover:rounded-md transition-all duration-700">
        <input type="text" className="p-1 rounded-full group-hover:rounded-md h-full w-full" />
      </div>
    </div>
  );
}
