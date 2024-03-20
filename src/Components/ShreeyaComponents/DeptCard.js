import React from "react"
import card from "./Department-card.svg"
import card1 from "./Department-card1.svg"
import card2 from "./DepartmentCard8.svg"
import card3 from "./Department-card3.svg"
import card4 from "./Department-card4.svg"
import card5 from "./Department-card5.svg"
import card6 from "./Department-card6.svg"
import card7 from "./Department-card7.svg"
import DeptDetail from "./DeptDetail"
// import Data from "./Data"
import { useState } from 'react';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Route, Routes, Link } from 'react-router-dom';

// export default function DeptCard(props){
//     return(
//         <div className="deptCard">
//             <img src={DeptHeader} alt="Department list"  className="deptHeader"/>
//             {/* <link to="/Dept-title-view.js"> */}
//             <section className="DeptCards">
//                 <div className="first4">
                    
//                     <Link to="/data"><img src={card1} /></Link>
//                     <Link to="/data"><img src={card} /></Link>
                    
//                     <Link to="/data"><img src={card3} /></Link>
//                     <Link to="/data"><img src={card4} /></Link>
//                 </div>
//                 <div className="last4">
                    
//                 <Link to="/data"><img src={card5} /></Link>
//                 <Link to="/data"><img src={card6} /></Link>
//                 <Link to="/data"><img src={card7} /></Link>
//                 <Link to="/data"><img src={card2} /></Link>
//                 </div>
//                 <Routes>
//                 <Route path="/data" element={<Data />} />
//                 </Routes>

//             </section>
//             {/* </link> */}


//         </div>
//     )

// }
// import React, { useState } from 'react';

const DeptCard = () => {
  // Sample image data
  const imageData = [
    { id: 1, src: card1, data: DeptDetail  },
    { id: 2, src: card, data: DeptDetail  },
    { id: 3, src: card3, data: DeptDetail  },
    { id: 4, src: card4, data: DeptDetail  },
    { id: 5, src: card5, data: DeptDetail  },
    { id: 6, src: card6, data: DeptDetail  },
    { id: 7, src: card7, data: DeptDetail  },
    { id: 8, src: card2, data: DeptDetail  }
    // Add more image data as needed
  ];
  const displayedImages1 = imageData.slice(0, 4);
  const displayedImages2 = imageData.slice(4, 8);


  const [selectedData, setSelectedData] = useState(null);

  // Function to handle image click
  const handleImageClick = (data) => {
    setSelectedData(data);
  };

  return (
    <div>
      {selectedData && <div>{selectedData}</div>}
      <div className="deptCard">
        {displayedImages1.map((image) => (
          <img
            className="first4"
            key={image.id} 
            src={image.src}
            alt={`Image ${image.id}`}
            onClick={() => handleImageClick(image.data)}
          />
        ))}
        {displayedImages2.map((image) => (
          <img
            className="last4"
            key={image.id} 
            src={image.src}
            alt={`Image ${image.id}`}
            onClick={() => handleImageClick(image.data)}
          />
          
        ))}
      </div>
    </div>
  );
};

export default DeptCard;