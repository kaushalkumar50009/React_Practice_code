//? here we can use any component and return those component

import React, { useEffect, useState } from "react";

const HigherOrderComponent = (title, Component, requestsPath) => {
  return function HOC() {
    const [data, setData] = useState([]);

    const UrlApi = `https://jsonplaceholder.typicode.com/${requestsPath} `;
    const fetchData = async () => {
      try {
        const responseData = await fetch(UrlApi);
        const jsonData = await responseData.json();
        setData(jsonData);
      } catch (err) {
        console.log(err);
      }
    };

    useEffect(() => {
      fetchData();
    }, []);
    return (
      <>
        <h1>{title}</h1>
        <Component data={data} />
      </>
    );
  };
};

export default HigherOrderComponent;

//? here we can use any component and return those component and data small example

// import Reactfrom "react";

// const HigherOrderComponent = (title) => {
//   return function HOC() {
//     return (
//       <>
//         <h1>{title}</h1>
//       </>
//     );
//   };
// };

// export default HigherOrderComponent;
