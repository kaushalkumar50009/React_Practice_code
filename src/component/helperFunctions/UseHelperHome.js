//! this is with  helper function
import React, { useEffect, useState } from "react";
import HelpersToGetData from "./helpers/HelpersToGetData";
import { addNums } from "./helpers/HelpersForCalculations";

const UseHelperHome = () => {
  const [data, setData] = useState([]);

  const fetchedData = async () => {
    try {
      const jsonData = await HelpersToGetData("users");
      console.log(jsonData);
      setData(jsonData);
    } catch (err) {
      console.log(err);
    }
  };

  const addNumbers = () => {
    let a = 50;
    let b = 20;
    const add = addNums(a, b);
    console.log(`Addition of ${add}`);
  };

  useEffect(() => {
    fetchedData();
  }, []);

  return (
    <>
      <div className="">
        <h1>i am showing data users data using helper function</h1>

        {data.map((data) => (
          <h1 key={data.id}>
            name :: {data.name} ::: username :: <span>{data.username}</span>
          </h1>
        ))}
      </div>

      <div>
        <button onClick={() => addNumbers()}>Add Numbers</button>
      </div>
    </>
  );
};

export default UseHelperHome;

//! before helper function
// import React, { useEffect, useState } from "react";
// const UseHelperHome = () => {
//   const [data, setData] = useState([]);

//   const UrlApi = `https://jsonplaceholder.typicode.com/users`;

//   const fetchedData = async () => {
//     try {
//       const responseData = await fetch(UrlApi);
//       const jsonData = await responseData.json();
//       setData(jsonData);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchedData();
//   }, []);

//   return <div>UseHelperFunPosts</div>;
// };

// export default UseHelperHome;
