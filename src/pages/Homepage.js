import * as React from "react";
import CourseList from "../Components/HomepageCourseList";
import logo from "../assets/Title.png"
import Footer from "../Components/footer";
import SelectOptions from "../Components/dropdown2";
import { Link } from "react-router-dom";
import axios from "axios";

function Home(props) {
  const [dept, setDept] = React.useState();
  const [topCourses, setTopCourses] = React.useState([]);
  React.useEffect(() => {
    const TokenData = () => {
      const headers = {
        "Content-Type": "application/json",
      };
      axios.get('http://127.0.0.1:8000/dept/', { headers }).then(res => res).then(data => {
        setDept(data.data.departments);
        console.log(data.data.departments)
      });
    };

    // const TokenData2 = () => {
    //   const headers = {
    //     "Content-Type": "application/json",
    //   };
    //   axios.get('http://127.0.0.1:8000/dept/158/top_courses', { headers }).then(res => res).then(data => {
    //     setTopCourses(data.data.top_courses);
    //     console.log(data.data.top_courses)
    //   });
    // };
    TokenData();
   // TokenData2();
  }, []);

  return (
    <div className="flex flex-col items-center bg-white">
      <div className="flex justify-center items-center self-stretch px-16 py-5 w-full text-xl text-white whitespace-nowrap bg-sky-950 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between w-full max-w-[1200px] max-md:flex-wrap max-md:max-w-full">
          <Link to="../"><img
            loading="lazy"
            src={logo}
            className="my-auto  w-[500px] max-md:max-w-full"
          />
          </Link>
          <div className="flex gap-5 justify-between items-center max-md:flex-wrap max-md:max-w-full">
            <div className="self-stretch my-auto" >
              <Link to="../">
                <div>Home</div>
              </Link>
            </div>
            <div className="flex-auto self-stretch my-auto">
              <Link to="../department">
                <div>Department</div>
              </Link>
            </div>
            <div className="self-stretch my-auto">Statistics</div>
          </div>
        </div>
      </div>
      <div className="justify-center self-start py-3 mt-20 ml-32 text-4xl font-bold text-black whitespace-nowrap max-md:mt-10 max-md:ml-2.5">
        Review
      </div>
      <div className="justify-center mt-12 max-w-full w-[1200px] max-md:pr-5 max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-base tracking-normal max-md:mt-10">

              {dept && <SelectOptions dept={dept} />}


            </div>
          </div>
          <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-center text-base tracking-normal text-center text-black max-md:mt-10 max-md:max-w-full">
              <div className="leading-6 max-md:max-w-full">
                “The instructor's clear explanations and practical examples
                helped me grasp complex concepts easily. The hands-on approach,
                with coding exercises and projects, solidified my understanding
                and boosted my confidence in implementing these concepts. I
                highly recommend this course to anyone looking to strengthen
                their programming skills.&quot;
              </div>
              <div className="mt-5 font-light leading-[156%] max-md:max-w-full">
                Course: Data structure and algorithms
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="justify-center self-start py-3 mt-28 ml-32 text-4xl font-bold text-black whitespace-nowrap max-md:mt-10 max-md:ml-2.5">
        Top rated courses
      </div>
      <div class="flex flex-col justify-center p-5 mt-6 w-full text-black rounded-none shadow-sm  max-w-[1200px] max-md:max-w-full border-l-4 border-sky-950">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead class="text-xs text-gray-700 uppercase bg-gray dark:bg-sky-950 dark:text-gray-100" >
            <tr>
              <th scope="col" class="px-6 py-3">
                Rank
              </th>
              <th scope="col" class="px-6 py-3">
                Course
              </th>
              <th scope="col" class="px-6 py-3">
                Type
              </th>
              <th scope="col" class="px-6 py-3">
                Credits
              </th>
              <th scope="col" class="px-6 py-3">
                Instructor
              </th>
              <th scope="col" class="px-6 py-3">
                Rating
              </th>
            </tr>
          </thead>
        </table>


        {
          topCourses ? topCourses.map((c, index) => {
            return <CourseList Num={index + 1} Name={c.code} Dept={c.department} Credit="6" Rating={c.average_rating} Prof="Animesh" Type="Theory" />
          }) : ""
        }

      </div> */}
      <Footer class="max-w-[1920px]" ></Footer>
    </div>

  );
}

export default Home;