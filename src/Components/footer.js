import * as React from "react";
import imgl from "../assets/footer.jpg";

export default function Footer() {
    return (
        <div className="flex justify-center items-center self-stretch px-16 py-50 mt-5 w-full text-xl text-white whitespace-nowrap bg-sky-950 max-md:px-5 max-md:max-w-full ">
            <div className="g2">
                <img src={imgl} style={{ width: 300, height: 170 }} />
            </div>
        <div className="mainfooter">
            <div className="IITB">
                IIT BOMBAY
            </div>
                <div className="tangerine-regular flex justify-center items-center self-stretch h-20 px-16 py-50 mt-5 w-full text-xl text-white whitespace-nowrap bg-sky-950 max-md:px-5 max-md:max-w-full scale-9">
                    Thank You for visiting, we value your feedback!
                </div>
        </div>
        </div>
    );
}
