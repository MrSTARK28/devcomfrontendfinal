import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function SelectOptions({ dept }) {
    const [course, setCourse] = React.useState("");
    const [openD, setOpenD] = React.useState(false);
    const [openC, setOpenC] = React.useState(false);
    const [department, setDepartment] = React.useState("");
    const [courseItems, setCItems] = React.useState("");
    console.log(dept)

const callCourseList =()=>{
    const TokenData = () => {
        const headers = {
            "Content-Type": "application/json",
        };
        const url = "http://127.0.0.1:8000/dept/" + department;
        axios.get(url, { headers }).then(res => res).then(data => {
            setCItems(data.data.courses);
            console.log(data)
        })
    };
    TokenData()
}

    let navigate = useNavigate();
    const handleDepartmentChange = (event) => {
        event.preventDefault();
        setDepartment(event.target.value);

    };

    const handleCourseChange = (event) => {
        setCourse(event.target.value);
    };
    const handleCloseDepartment = () => {
        setOpenD(false);
    };

    const handleOpenDepartment = () => {
        setOpenD(true);
        setOpenC(false);

    };
    const handleCloseCourse = () => {
        setOpenC(false);

    };

    const handleOpenCourse = () => {
        setOpenC(true);
        setOpenD(false);

    };

    if (department) {
        callCourseList();
    }

    return (

        <div>
            <div>
                <Button className="department" sx={{ display: "block", mt: 2 }} onClick={handleDepartmentChange}>
                    Department
                </Button>
                <FormControl sx={{ m: 1, minWidth: 400 }}>
                    <InputLabel id="demo-controlled-open-select-label">Select The Department</InputLabel>
                    <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={openD}
                        onClose={handleCloseDepartment}
                        onOpen={handleOpenDepartment}
                        value={department}
                        label="Department"
                        onChange={handleDepartmentChange}
                    >
                        {
                            dept.map((dep, index) => {
                                return <MenuItem value={dep.id} >{dep.name}</MenuItem>
                            })
                        }

                    </Select>
                </FormControl>
            </div>

            <div>
                <Button className="course" sx={{ display: "block", mt: 2 }} onChange={handleOpenCourse}>
                    course
                </Button>
                <FormControl sx={{ m: 1, minWidth: 400 }}>
                    <InputLabel id="demo-controlled-open-select-label">Select The Course</InputLabel>
                    <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={openC}
                        onClose={handleCloseCourse}
                        onOpen={handleOpenCourse}
                        value={course}
                        label="Course"
                        onChange={handleCourseChange}
                    >


                        {
                            
                            courseItems ? courseItems.map((c, index) => {
                                return <MenuItem value={c.id}>{(c.code+"")}</MenuItem>
                            }) : <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                        }



                    </Select>
                </FormControl>
            </div>

            <div className="flex gap-5 justify-between mt-12 whitespace-nowrap max-md:mt-10">
                <div className="grow justify-center px-14 py-3 text-black rounded-md border border-solid bg-neutral-200 border-zinc-500 max-md:px-5" onClick={() => { setCourse(""); setDepartment("") }}>
                    Clear
                </div>
                <div className="grow justify-center px-12 py-3.5 text-center text-white bg-cyan-600 rounded-lg max-md:px-5" onClick={() => {
                    console.log(course);
                    navigate('/dept/'+department+'/course/' + course)
                }}>
                    Submit
                </div>
            </div>
        </div>
    );
}
