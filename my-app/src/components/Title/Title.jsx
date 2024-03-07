import React from "react";

function Title({ title }) {
    return (<div className="flex items-center justify-center gap-[12px] py-[2rem] bg-white">
        <b className="w-[100%] h-[1.6px] bg-[#970000]"></b>
        <h2 className="text-[22px] whitespace-nowrap font-[600]">{title}</h2>
        <b className="w-[100%] h-[1.6px] bg-[#970000]"></b>
    </div>)
}

export default Title;