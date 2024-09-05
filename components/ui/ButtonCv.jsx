import React from "react";

function ButtonG({ icon,href }) {
  return (
    <a href={href} className="relative inline-flex bg-white h-9 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className={` inline-flex h-full w-full cursor-pointer items-center gap-2 justify-center rounded-full bg-white-950 px-3 py-1 text-sm font-medium text-black backdrop-blur-3xl`}>
        {icon}
      </span>
    </a>
  );
}

export default ButtonG;
