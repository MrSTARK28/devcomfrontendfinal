import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useState, useEffect } from 'react';
import logo from "../assets/Title.png";
import axios from 'axios';
import img1 from "../Components/images/Department-card1.svg" // aex 
import img2 from "../Components/images/Department-card7.svg" // me 
import img3 from "../Components/images/Department-card5.svg" //ee
import img4 from "../Components/images/Department-card4.svg" //cs 
import img5 from "../Components/images/Department-card6.svg" //ma 
import img6 from "../Components/images/Department-card3.svg" // civil
import img7 from "../Components/images/Department-card.svg" // chea 
import img8 from "../Components/images/DepartmentCard8.svg" // phy 
import { Link } from 'react-router-dom';

// import DeptCard from "./Components/DeptCard"
//  import DeptDetail from "./Components/DeptDetail"



const columns = [
  // { id: 'rank', label: 'Rank', minWidth: 170 },
  { id: 'name', label: 'Course', minWidth: 170 },
  { id: 'average_rating', label: 'Average Rating', minWidth: 170 },
];



function createData(name, average_rating) {
  return { name, average_rating };
}

export default function Department(){

    const [rows, setRows] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [filteredRows, setFilteredRows] = useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState("");
  
    useEffect(() => {
      fetchDepartments();
    }, []);
  
    const fetchDepartments = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/dept/");
        const departmentData = response.data.departments; // this is now an array 
        const rowData = departmentData.map(item => createData(item.id, item.name, "", "", "", ""));
        setRows(rowData);
      } catch (error) {
        console.log("Error fetching department data: ", error);
      }
    };
  
    
    const fetchCourses = async (departmentId) => {
      try {
        const coursesResponse = await axios.get(`http://127.0.0.1:8000/dept/${departmentId}/top_courses/`);
        console.log("Courses fetched successfully ", coursesResponse.data);
        return coursesResponse.data.top_courses; // now this is an array 
      } catch (error) {
        console.log("Error fetching courses ", error);
        return [];
      }
    };
  
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  
    const handleDepartment = async (departmentId) => {
      setSelectedDepartment(departmentId.toLowerCase());
      const courses = await fetchCourses(departmentId);
      console.log("hello")
      console.log(courses)
      console.log(Array.isArray(courses)); // Check if courses is an array
      setFilteredRows(courses.map(item => createData(item.name, item.average_rating)));
    };
  return(
    <div>
         <div className="flex flex-col items-center bg-white">
      <div className="flex justify-center items-center self-stretch px-16 py-5 w-full text-xl text-white whitespace-nowrap bg-sky-950 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between w-full max-w-[100px] max-md:flex-wrap max-md:max-w-full"></div>
         <Link to="../"><img
            loading="lazy"
            src={logo}
            className="my-auto  w-[500px] max-md:max-w-full"
          />
          </Link>
          <div className="flex gap-5 justify-between items-center max-md:flex-wrap max-md:max-w-full">
            <div className="self-stretch my-auto">
              <Link to="../">
                <div>Home</div>
              </Link>
            </div>
            <div className="flex-auto self-stretch my-auto">
              <Link to="../department">
                <div>Department</div>
              </Link>
            </div>
            
          </div>
        </div>
      </div>    
        <>
      <div>
        <table style={{ height: 200, marginTop: -10 }}>
          <tr>
            <th><button style={{border:'none'}} onClick={() => handleDepartment('158')}><img src={img1}></img></button></th>
            <th><button style={{border:'none'}} onClick={() => handleDepartment('159')}><img src={img6}></img></button></th>
            <th><button style={{border:'none'}} onClick={() => handleDepartment('160')}><img src={img5}></img></button></th>
            <th><button style={{border:'none'}} onClick={() => handleDepartment('161')}><img src={img2}></img></button></th>
            <th><button style={{border:'none'}} onClick={() => handleDepartment('162')}><img src={img3}></img></button></th>
            <th><button style={{border:'none'}} onClick={() => handleDepartment('163')}><img src={img4}></img></button></th>
            <th><button style={{border:'none'}} onClick={() => handleDepartment('164')}><img src={img7}></img></button></th>
            <th><button style={{border:'none'}} onClick={() => handleDepartment('165')}><img src={img8}></img></button></th>
            </tr>
        </table>
      </div>

      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, color:'white' ,  backgroundColor: " #023047" }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
  {filteredRows.length > 0 ? (
    filteredRows
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((row, index) => (
        <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
          {columns.map((column) => (
            <TableCell key={column.id} align={column.align}>
              {column.format && typeof row[column.id] === 'number'
                ? column.format(row[column.id])
                : row[column.id]}
            </TableCell>
          ))}
        </TableRow>
      ))
  ) : (
    <TableRow>
      <TableCell colSpan={columns.length + 1} align="center"> {/* Adjusting colspan for serial number */}
        No data available
      </TableCell>
    </TableRow>
  )}
</TableBody>

          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25]}
          component="div"
          count={filteredRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
    </div>
  )
}


