//! in this code passing the data in createcontext as value

import React, { useState } from "react";
import UserData from "../contextApi/context/CreateContext";
import Profile from "./Profile";
import Update from "./updateData/Update";
import { useGlobalContext } from "./context/CreateContext";
import "./Home.css";

const Home = () => {
  const [name, setName] = useState("kumar");
  const [age, setAge] = useState(20);
  const { openSidebar, openModal } = useGlobalContext();
  return (
    <>
      <UserData.Provider value={{ name, setName, age, setAge }}>
        <h1>home page name : {name}</h1>
        <Profile />
        <Update />
      </UserData.Provider>
      <button onClick={openModal} className="btn">
        show modal
      </button>
    </>
  );
};

export default Home;

//! this is without context api passing data in every single component one by one
// import React, { useState } from "react";
// import Profile from "./Profile";
// import About from "./About";

// const Home = () => {
//   const [name, setName] = useState("kumar");
//   return (
//     <>
//       <h1>home page name : {name}</h1>
//       <Profile name={name} />
//       <About setName={setName} />
//     </>
//   );
// };

// export default Home;
