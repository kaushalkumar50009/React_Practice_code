//? this file will create context api
//? this file is basically will store  all the state and data which will passed by home component
//! and this file will use everywhere to get passed data

import React, { createContext, useContext, useState } from "react";
const UserData = createContext({});
export default UserData;

//! 2nd method or can be used like this can be used first and second one both this will use custom hook....use appProvide in index file like <React.StrictMode></React.StrictMode>.....and use useGlobalContext this in every file where you want to use this data

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <UserData.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </UserData.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(UserData);
};

export { AppProvider };

//! this code is example how data is comming in createContext
// import React, { useState } from "react";
// import UserData from "../contextApi/context/CreateContext";
// import Profile from "./Profile";
// import About from "./About";

// const Home = () => {
//   const [name, setName] = useState("kumar");
//   return (
//     <>
//       <UserData.Provider value={{ name, setName }}>
//         <h1>home page name : {name}</h1>
//         <Profile />
//         <About />
//       </UserData.Provider>
//     </>
//   );
// };

// export default Home;

//? and this is the example how data is using through context api
// import React, { useContext } from "react";
// import UserData from "../contextApi/context/CreateContext";

// const Profile = () => {
//   //   const { name } = UserData;
//   const { name } = useContext(UserData);

//   return (
//     <>
//       <h2>i am from profile page name: {name}</h2>
//     </>
//   );
// };

// export default Profile;
