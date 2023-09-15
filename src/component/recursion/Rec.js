import React, { useState } from "react";

const Rec = ({ familyTree }) => {
  // Accept familyTree as a prop
  const [isVisible, setIsVisible] = useState(false);
  const expand = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="">
        <span onClick={expand}>{familyTree.name}</span>

        {isVisible && familyTree.children !== undefined
          ? familyTree.children.map((child, index) => {
              return (
                <div className="" key={index}>
                  <span>{child.age}</span>
                  <Rec familyTree={child} />
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};

export default Rec;

//! without recursion
// import React, { useState } from "react";
// import { familyTree } from "./data";

// const Rec = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const expand = () => {
//     setIsVisible(!isVisible);
//   };

//   return (
//     <>
//       <div className="">
//         <span onClick={expand}>{familyTree.name}</span>

//         {isVisible
//           ? familyTree.children.map((child, index) => {
//               return (
//                 <div className="" key={index}>
//                   <span>{child.name}</span>
//                 </div>
//               );
//             })
//           : null}
//       </div>
//     </>
//   );
// };

// export default Rec;
