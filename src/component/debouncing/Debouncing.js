import React, { useEffect, useState, useCallback } from "react";

const Debouncing = () => {
  const url = `https://api.postalpincode.in/pincode/`;
  const [pin, setPin] = useState("");

  const getUrlData = useCallback(async () => {
    const res = await fetch(url + pin);
    const data = await res.json();
    console.log(data[0]);
  }, [url, pin]);

  useEffect(() => {
    const debouncing = setTimeout(() => {
      getUrlData();
    }, 2000);

    return () => {
      clearTimeout(debouncing);
    };
  }, [getUrlData]);

  return (
    <>
      <input
        type="text"
        name="pincode"
        id=""
        onChange={(e) => {
          setPin(e.target.value);
        }}
      />
      <h1>hii</h1>
    </>
  );
};

export default Debouncing;

// //! 2. to fix this issue we use debouncing

// import React, { useEffect, useState } from "react";

// const Debouncing = () => {
//   const url = `https://api.postalpincode.in/pincode/`;

//   const [pin, setPin] = useState("");

//   const getUrlData = async () => {
//     const res = await fetch(url + pin);
//     const data = await res.json();
//     console.log(data[0]);
//   };

//   useEffect(() => {
//     //! whenever pin will change this state will run
//     const debouncing = setTimeout(() => {
//       getUrlData();
//     }, 2000);

//     return () => {
//       clearTimeout(debouncing);
//     };
//   }, [url, pin]);

//   return (
//     <>
//       <input
//         type="text"
//         name="pincode"
//         id=""
//         onChange={(e) => {
//           setPin(e.target.value);
//         }}
//       />
//       <h1>hii</h1>
//     </>
//   );
// };

// export default Debouncing;

//! 1. api is calling on every single click which is not good for browser performance
// import React from "react";

// const Debouncing = () => {
//   const url = `https://api.postalpincode.in/pincode/`;
//   const getUrlData = async (value) => {
//     const res = await fetch(url + value);
//     const data = await res.json();
//     console.log(data);
//   };

//   return (
//     <>
//       <input
//         type="text"
//         name="pincode"
//         id=""
//         onChange={(e) => {
//           getUrlData(e.target.value);
//         }}
//       />

//       <h1>hii</h1>
//     </>
//   );
// };

// export default Debouncing;
