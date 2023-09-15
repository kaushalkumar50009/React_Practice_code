import React, { useContext } from "react";
import UserData from "../contextApi/context/CreateContext";

const About = () => {
  const { name, age } = useContext(UserData);

  return (
    <>
      <h1>i am about my data will show through profile component</h1>
      <p>name of user: {name}</p>

      <p>age of component : {age}</p>
    </>
  );
};

export default About;

//! before context api
// import React from "react";

// const About = (props) => {
//   const { setName } = props;
//   console.log(setName);

//   return (
//     <>
//       <button
//         onClick={() => {
//           setName("kaushla_kumar");
//         }}
//       >
//         i can modify name
//       </button>
//     </>
//   );
// };

// export default About;
