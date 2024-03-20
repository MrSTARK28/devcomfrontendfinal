import React from "react"
import topimg from "./top10.png"
import { Table } from "@mui/material"

export default function DeptDetail(){
    return(
        <div className="department-detail">
            
            <div className="top10course">
                <img src={topimg} className="topimg" />
                
                    <Table className="table">
                        <tr className="heading-table"> 
                            <th>Rank</th>
                            <th>Course</th>
                            <th>Type</th>
                            <th>Credits</th>
                            <th>Instructor</th>
                            <th>Rating</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>DSA</td>
                            <td>Theory</td>
                            <td>6</td>
                            <td>Professor Name</td>
                            <td>4.5</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>DSA</td>
                            <td>Theory</td>
                            <td>6</td>
                            <td>Professor Name</td>
                            <td>4.5</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>DSA</td>
                            <td>Theory</td>
                            <td>6</td>
                            <td>Professor Name</td>
                            <td>4.5</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>DSA</td>
                            <td>Theory</td>
                            <td>6</td>
                            <td>Professor Name</td>
                            <td>4.5</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>DSA</td>
                            <td>Theory</td>
                            <td>6</td>
                            <td>Professor Name</td>
                            <td>4.5</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>DSA</td>
                            <td>Theory</td>
                            <td>6</td>
                            <td>Professor Name</td>
                            <td>4.5</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>DSA</td>
                            <td>Theory</td>
                            <td>6</td>
                            <td>Professor Name</td>
                            <td>4.5</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>DSA</td>
                            <td>Theory</td>
                            <td>6</td>
                            <td>Professor Name</td>
                            <td>4.5</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>DSA</td>
                            <td>Theory</td>
                            <td>6</td>
                            <td>Professor Name</td>
                            <td>4.5</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>DSA</td>
                            <td>Theory</td>
                            <td>6</td>
                            <td>Professor Name</td>
                            <td>4.5</td>
                        </tr>
                    </Table>
                    
                
            </div>

        </div>
    )
}