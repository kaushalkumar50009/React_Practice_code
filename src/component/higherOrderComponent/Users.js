//? this example will use higherOrderComponent and passing my whole component to hoc

import React from "react";
import HigherOrderComponent from "./higherOrderComponent/HigherOrderComponent";

const Users = (props) => {
  const { data } = props;
  return (
    <>
      {data.map((users) => (
        <p key={users.id}>{users.name}</p>
      ))}
    </>
  );
};

//! 1st users is passing as title
//! 2nd Users is passing whole component
//! 3rd users for passing url requests path
const usersComponent = HigherOrderComponent("users", Users, "users");
export default usersComponent;

//? this is the simple code which we used without higherOrder
// import React, { useEffect, useState } from "react";

// const Users = () => {
//   const [usersData, setUsersData] = useState([]);

//   const UrlApi = "https://jsonplaceholder.typicode.com/users";
//   const fetchData = async () => {
//     try {
//       const responseData = await fetch(UrlApi);
//       const data = await responseData.json();
//       setUsersData(data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <>
//       <h1>users</h1>
//       {usersData.map((users) => (
//         <p key={users.id}>{users.name}</p>
//       ))}
//     </>
//   );
// };

// export default Users;
