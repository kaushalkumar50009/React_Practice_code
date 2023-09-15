import React, { useContext } from "react";
import UserData from "../contextApi/context/CreateContext";
import Settting from "./setting/Settting";
import About from "./About";

const Profile = () => {
  //   const { name } = UserData;
  const { name } = useContext(UserData);

  return (
    <>
      <h2>i am from profile page name: {name}</h2>

      <Settting />
      <About />
    </>
  );
};

export default Profile;

//! this is without context api accessing data from component one by one
// import React from "react";

// const Profile = (props) => {
//   const { name } = props;

//   return (
//     <>
//       <h2>i am from profile page name: {name}</h2>
//     </>
//   );
// };

// export default Profile;
