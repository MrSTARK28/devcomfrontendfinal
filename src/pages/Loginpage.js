import * as React from "react";
import { useNavigate } from "react-router-dom";
import asset1 from '../assets/asset1.svg'
import asset2 from '../assets/asset2.svg'
import axios from "axios";

export default function LoginPage() {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();

    const handlename = (event) => {
        setEmail(event.target.value);
    }
    const handlepassword = (event) => {
        setPassword(event.target.value);
    }
    const handleLogin = (e) => {
        e.preventDefault();
        axios
          .post("http://127.0.0.1:8000/users/login/", {
            email,
            password,
          })
          .then((res) => {
            navigate("/homepage");
          })
          .catch((error) => {
            console.log("Login failed:", error);
          });
        console.log(email);
        console.log(password);
        setEmail("");
        setPassword("");
      };

    return (
        <div className="login-scroll flex flex-col justify-center bg-white">
            <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 w-full fill-sky-950 min-h-[1024px] max-md:px-5 max-md:max-w-full">
                <img
                    loading="lazy"
                    src={asset1}
                    className="object-cover absolute inset-0 size-full"
                />
                <div className="flex relative flex-col mb-56 w-full max-w-[1165px] max-md:mb-10 max-md:max-w-full">
                    <div className="self-center text-4xl font-bold text-sky-950 max-md:max-w-full">
                        COURSE REVIEW SYSTEM
                    </div>
                    <div className="mt-20 max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
                                <img
                                    loading="lazy"
                                    src={asset2}
                                    className="w-full aspect-[1.37] max-md:mt-10 max-md:max-w-full"
                                />
                            </div>
                            <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow px-12 py-12 mt-2 w-full text-lg text-black bg-white rounded-lg border border-solid shadow-sm border-neutral-200 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                                    <div>LDAP Id</div>
                                    <input
                                        id="email"
                                        type="text"
                                        value={email}
                                        onChange={handlename}
                                        name="email"
                                        placeholder="Enter your LDAP ID"
                                        className="justify-center px-4 py-3.5 mt-2 rounded-md border border-solid border-zinc-400 text-zinc-500"
                                    />
                                    <div className="mt-5">Password</div>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={password}
                                        onChange={handlepassword}
                                        placeholder="Enter your password"
                                        className="justify-center px-4 py-3 mt-2 rounded-md border border-solid border-zinc-400 text-zinc-500"
                                    />


                                    <div className="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" className="shrink-0 w-3.5 h-3.5 rounded-sm border border-solid border-zinc-400"/>
                                        <div className="flex-auto">Remember me on this device</div>
                                    </div>

                                    <button type="submit" className="justify-center items-center px-16 py-3.5 mt-10 text-center text-white bg-cyan-600 rounded-md max-md:px-5" onSubmit={handleLogin}>
                                        Log in
                                    </button>
                                    
                                    <div className="self-center mt-14 text-sm max-md:mt-10" onClick={() => {
                                        alert("Forgot Password")
                                    }}>
                                        Forgot password?
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

