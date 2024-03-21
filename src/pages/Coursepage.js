import * as React from "react";
import HoverRating from "../Components/rating";
import logo from "../assets/Title.png"
import Footer from "../Components/footer";
import { Link } from "react-router-dom";
import axios from 'axios';
import Rating from '@mui/material/Rating';
import img10 from "../Components/images/footer.jpg"
import img11 from "../Components/images/feedback.jpg"
function Coursepage() {

  const [code, setCode] = React.useState(0);
  const [dept, setDept] = React.useState([]);
  const [deptCode, setDeptCode] = React.useState(0);
  const [deptName, setDeptName] = React.useState("AE");
  const [deptInfo, setDeptInfo] = React.useState("AE");
  const [avgRating, setAvgRating] = React.useState(0);
  const [courseName, setCourseName] = React.useState("");
  const [topCourses, setTopCourses] = React.useState([]);
  const [myRating,setMyRating]=React.useState(0);

  const setR = (value)=>{setMyRating(value);
  console.log(value)};

  const onSubmit = ()=>{
    const headers = {
      "Content-Type": "application/json",
    };
    const url = window.location.href;
    axios.put('http://127.0.0.1:8000/' + url.substring(22), { headers }).then(res => res).then(data => {
      console.log(data);
      alert("Rated");
    })
  }


  React.useEffect(() => {
    const url = window.location.href;
    console.log(dept)

    const TokenData = () => {
      const headers = {
        "Content-Type": "application/json",
      };

      axios.get('http://127.0.0.1:8000/dept/', { headers }).then(res => res).then(data => {
        setDept(data.data.departments);
        console.log(data.data.departments);
        axios.get('http://127.0.0.1:8000/' + url.substring(22), { headers }).then(res => {
          console.log(res.data);
          let d = res.data;
          setCode(d.code);
          setDeptCode(d.department);
          setAvgRating(d.average_rating);
          setCourseName(d.name);
          setDeptInfo(d.info);


          [...dept].forEach((element) => {
            if (element.id == deptCode)
              setDeptName(element.name);
          });

          axios.get('http://127.0.0.1:8000/' + url.substring(22, 31)+'top_courses', { headers }).then(res => {
            setTopCourses([res.data.top_courses[1], res.data.top_courses[2], res.data.top_courses[3]])
          })

        }
        );
      });
    };


    TokenData();
  }, [])


  return (
    <div className="flex flex-col items-center bg-white">
      <div className="flex justify-center items-center self-stretch px-16 py-5 w-full text-xl text-white whitespace-nowrap bg-sky-950 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between w-full max-w-[1200px] max-md:flex-wrap max-md:max-w-full">
          <Link to="../"><img
            loading="lazy"
            src={logo}
         //   className="my-auto  w-[500px] max-md:max-w-full"
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
      <div className="px-0.5 mt-24 w-full max-w-[1200px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center text-white max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col items-start px-16 py-6 bg-sky-950 max-md:px-5 max-md:max-w-full">
                <div className="text-4xl font-bold leading-[50px]">
                  {courseName}
                </div>
                <div className="flex gap-2.5 justify-center mt-4 text-2xl tracking-normal leading-8 whitespace-nowrap">

                <Rating name="read-only" value={avgRating} readOnly />


                  <div className="flex-auto my-auto">{avgRating}</div>
                </div>
                <div className="mt-4 text-base tracking-normal leading-8">
                  <span className="font-bold text-white">Course code:</span> {deptName + " "}
                  {code}
                  <br />
                  <span className="font-bold text-white">Department:</span>{" "}
                  {deptName}
                  <br />
                  <span className="font-bold text-white">Info:</span>{" "}
                  {deptInfo}
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-14 py-11 w-full text-base leading-8 text-white border border-solid bg-sky-950 border-black border-opacity-30 max-md:px-5 max-md:mt-10">
              <div className="justify-center items-center px-16 py-12 text-4xl text-black whitespace-nowrap bg-blue-300 border border-black border-solid max-md:px-5">
                CSE
              </div>
              <div className="mt-9 tracking-normal">
                <span className="font-bold text-white">Address: </span>
                <br />
                Kanwal Rekhi Building, Department of Computer Science and
                Engineering, Indian Institute of Technology (IIT) Bombay, Powai,
                Mumbai 400 076.
              </div>
              <div className="mt-9 tracking-normal">
                <span className="font-bold text-white">Contact details:</span>
                <br />
                Phone no. : +91-22-2576 7901/02
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-28 mb-10 text-4xl font-bold text-black max-md:mt-10 max-md:max-w-full">
        Your rating
      </div>

      <div class="scale-150 mt-0.5">
        <HoverRating setR={setR}></HoverRating>
      </div>

      <div className="flex gap-5 justify-between mt-8 max-w-full text-base tracking-normal whitespace-nowrap w-[375px]">
    
        <div className="flex-1 justify-center px-12 py-3 text-center text-white bg-cyan-600 rounded-lg max-md:px-5" onClick={onSubmit}>
          Submit
        </div>
      </div>
      <div className="mt-28 text-4xl font-bold text-black max-md:mt-10 max-md:max-w-full">
        Other Courses
      </div>


      <div className="flex gap-5 justify-between px-5 mt-20 w-full text-white max-w-[1200px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">


        {
          topCourses ? topCourses.map((c, index) => {
            return <div className="flex flex-col flex-1 justify-center">
              <div className="flex flex-col pb-12 pl-7 bg-sky-950 max-md:pl-5">
                <div className="mt-0 text-3xl font-bold">
                  Robotics and Simulation
                </div>
                <div className="mt-5 text-base leading-6">
                  Rating: {c.average_rating}
                  <br />
                  Credit: 6<br />
                  Course Code: {deptName + " " + c.code}
                  <br />
                  Slot: 3
                </div>
              </div>
            </div>
          }) : ""
        }

<br/>
      </div>
      <br/>
      <div className='f1' style={{
  maxWidth: 10000,
  height: 0,
  color: 'white',
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: '#023047'
}}>
        
        <div className='g2'>
        <img src={img10} style={{width:300 , height:170}}/>
        </div>
        <div className='g4'>
        <img src={img11} style={{width:910 , height:170}}/>
        </div>
       </div>
    </div>
  );
}


export default Coursepage; 