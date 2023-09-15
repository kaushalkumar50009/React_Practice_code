//! this is with  helper function
import React, { useEffect, useState } from "react";
import HelpersToGetData from "./helpers/HelpersToGetData";
import { multiplyNums } from "./helpers/HelpersForCalculations";

const UseHelperFunPosts = () => {
  const [data, setData] = useState([]);

  const fetchedData = async () => {
    try {
      const jsonData = await HelpersToGetData("posts");
      console.log(jsonData);
      setData(jsonData);
    } catch (err) {
      console.log(err);
    }
  };

  const multiplyNumbers = () => {
    let a = 50;
    let b = 20;
    const mul = multiplyNums(a, b);
    console.log(`Addition of ${mul}`);
  };

  useEffect(() => {
    fetchedData();
  }, []);

  return (
    <>
      <div className="">
        <h1>i am showing data posts data using helper function</h1>

        {data.map((data) => (
          <h1 key={data.id}>
            title::{data.title} ::: id :: <span>{data.id}</span>
          </h1>
        ))}
      </div>

      <button
        onClick={() => {
          multiplyNumbers();
        }}
      >
        multiply
      </button>
    </>
  );
};

export default UseHelperFunPosts;

//! this is without helper function
// const UseHelperFunPosts = () => {
//   const [data, setData] = useState([]);

//   const UrlApi = `https://jsonplaceholder.typicode.com/posts`;

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

// export default UseHelperFunPosts;
