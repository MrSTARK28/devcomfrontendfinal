import * as React from "react";

function CourseList(props) {
  return (
    <div className="flex flex-col justify-center p-5 mt-6 w-full text-black rounded-none shadow-sm bg-neutral-200 max-w-[1200px] max-md:max-w-full">
      <div className="flex gap-5 justify-between items-start px-2.5 w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-5 justify-between items-start self-stretch py-px pl-4 text-black">
          <div className="grow text-xl text-center">{props.Num}</div>
          <div className="flex flex-col grow shrink-0 justify-center basis-0 w-fit">
            <div className="text-xl whitespace-nowrap">
              {props.Name}
            </div>
            <div className="mt-2.5 text-sm font-light">{props.Dept}</div>
          </div>
        </div>
        <div className="text-lg font-light">&#160;&#160;&#160;&#160;{props.Type}</div>
        <div className="text-lg font-light">&#160;&#160;&#160;
          &#160;&#160;&#160;&#160;&#160;&#160;
          &#160;&#160;
          &#160;&#160;
          &#160;&#160;
          &#160;&#160;
          &#160;&#160;
          &#160;&#160;
          {props.Credit}</div>
        <div className="flex-auto text-lg font-light">
          &#160;&#160;&#160;&#160;&#160;&#160;
          &#160;&#160;
          &#160;&#160;
          &#160;&#160;
          &#160;&#160;
          &#160;&#160;&#160;&#160;&#160;&#160;
          &#160;&#160;
          &#160;&#160;
          &#160;&#160;
          &#160;&#160;
          {props.Prof}</div>
        <div className="text-lg font-light">{props.Rating}</div>
        <svg width="14" height="36" viewBox="0 0 14 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.79346 2L11.9999 18.5L1.79346 34" stroke="#A4A2A7" stroke-width="2" stroke-linecap="square" />
        </svg>
      </div>
    </div>
  );
}

export default CourseList;