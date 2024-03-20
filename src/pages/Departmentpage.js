import React from "react"
import Navbar from "../Components/ShreeyaComponents/Navbar"
import DeptCard from "../Components/ShreeyaComponents/DeptCard"

// import DeptDetail from "./DeptDetail"



export default function Department() {
    return (
        <div>
            <Navbar />
            <div className="MainContent">
                <DeptCard />
                {/* <DeptDetail/>  */}
            </div>
        </div>
    )
}

