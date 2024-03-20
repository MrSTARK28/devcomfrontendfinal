

import title from "./Title.png"
import React from 'react'


import { Link } from "react-router-dom"
import './style.css'
export default function Navbar() {
    return (
        <nav>
            <img src={title} className='nav-title' />
            <div className="NavName">

                {/* <Stack direction="row" spacing={2}> 
                <Button href="#text-buttons" className="Home">Home</Button>
                <Button href="#text-buttons" className="Statistics">Statistics</Button>
                <Button href="#text-buttons" className="Department">Department</Button>
              
              
            </Stack>  */}
                <table>
                    <tr>
                        <td><Link to="/" className="Home">Home</Link></td>
                        <td><Link to="/department" className="Department">Departments</Link></td>

                    </tr>
                </table>

                {/* <h3 className="Home">Home</h3>
              
              
              <h3 className="Department">Department</h3>
              <h3 className="Statistics">Statistics</h3> */}

            </div>
        </nav>
    )
}