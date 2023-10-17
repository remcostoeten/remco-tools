import React from "react";

export default function CustomComponent() {
  return (
    <div className="items-start shadow-[0px_0px_1px_0px_rgba(0,0,0,0.30),0px_2px_10px_0px_rgba(0,0,0,0.06),0px_0px_5px_0px_rgba(0,0,0,0.02)] bg-zinc-800 flex gap-1 pl-2 pr-1.5 rounded-lg">
      <span className="text-zinc-300 text-center text-sm leading-[142.86%] self-stretch mt-0.5" role="img" aria-label="Command">
        ⌘
      </span>
      <span className="text-zinc-300 text-center text-sm leading-[142.86%] self-stretch mt-0.5" role="img" aria-label="Key">
        K
      </span>
    </div>
  );
}
