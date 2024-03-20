import * as React from "react";
import Selectcourse from "./dropdown2";
import Selectdepartment from "./dropdown1";

export default function Mixed(){
    <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow text-base tracking-normal max-md:mt-10">
            <Selectcourse></Selectcourse>
            <div className="flex gap-5 justify-between mt-12 whitespace-nowrap max-md:mt-10">
            <div className="grow justify-center px-14 py-3 text-black rounded-md border border-solid bg-neutral-200 border-zinc-500 max-md:px-5" onClick={}>
                Clear
            </div>
            <div className="grow justify-center px-12 py-3.5 text-center text-white bg-cyan-600 rounded-lg max-md:px-5" >
                Submit
            </div>
            </div>
        </div>
    </div>
}