//! 5.
import React, { useEffect, useState } from "react";
//! performing some operation using filter and map with each other on click
const MapAndFilter = () => {
  const [number, setNumber] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

  //! reverse the function
  const handleOnClick = () => {
    let handleFilterData = number
      .map((dta) => {
        return dta * dta;
      })
      .filter((square) => {
        return square < 50;
      });

    setNumber(handleFilterData);
  };

  //   const handleOnClick = () => {
  //     let handleFilterData = number
  //       .filter((dta) => {
  //         return dta < 8;
  //       })
  //       .map((filtered) => {
  //         return filtered * filtered;
  //       });

  //     setNumber(handleFilterData);
  //   };
  return (
    <>
      <div className="container">
        <div
          className=""
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(8, 1fr)",
            padding: "10px",
            border: "2px solid red",
            gap: "10px",
          }}
        >
          {number.map((items, index) => {
            return (
              <h5
                key={index}
                style={{
                  border: "2px solid red",
                  padding: "20px",
                }}
              >
                {items}
              </h5>
            );
          })}
        </div>
        <button
          onClick={() => {
            handleOnClick();
          }}
        >
          handle Map with filter event
        </button>
      </div>
    </>
  );
};

export default MapAndFilter;

// //! 4.

// import React, { useEffect, useState } from "react";
// //! performing some operation using filter and map on click
// const MapAndFilter = () => {
//   let apiUrl = "https://dummyjson.com/users";
//   //   const [datas, setData] = useState([]);
//   const [number, setNumber] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

//   const handleMapOnClick = () => {
//     let square = number.map((num) => {
//       return num * num;
//     });
//     setNumber(square);
//   };

//   const handleFilterOnClick = () => {
//     let handleFilterData = number.filter((dta) => {
//       //   return dta.id > 10;
//       return dta < 5;
//       //   return dta.firstName.includes("a");
//     });
//     setNumber(handleFilterData);
//   };
//   return (
//     <>
//       <div className="container">
//         <div
//           className=""
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(8, 1fr)",
//             padding: "10px",
//             border: "2px solid red",
//             gap: "10px",
//           }}
//         >
//           {number.map((items, index) => {
//             return (
//               <h5
//                 key={index}
//                 style={{
//                   border: "2px solid red",
//                   padding: "20px",
//                 }}
//               >
//                 {items}
//               </h5>
//             );
//           })}
//         </div>
//         <button
//           onClick={() => {
//             handleMapOnClick();
//           }}
//         >
//           handle Map event
//         </button>
//         <button
//           onClick={() => {
//             handleFilterOnClick();
//           }}
//         >
//           handle filter event
//         </button>
//       </div>
//     </>
//   );
// };

// export default MapAndFilter;

// //! 3.

// import React, { useEffect, useState } from "react";
// //! performing some operation using filter on click
// const MapAndFilter = () => {
//   let apiUrl = "https://dummyjson.com/users";
//   const [datas, setData] = useState([]);

//   useEffect(() => {
//     fetch(apiUrl)
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         setData(data.users);
//       });
//   }, []);

//   const handleFilterOnClick = () => {
//     let handleMapData = datas.filter((dta) => {
//       //   return dta.id > 10;
//       return dta.id < 5;
//       //   return dta.firstName.includes("a");
//     });

//     console.log(handleMapData);
//     setData(handleMapData);
//   };

//   return (
//     <>
//       <div className="container">
//         <div
//           className=""
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(8, 1fr)",
//             padding: "10px",
//             border: "2px solid red",
//             gap: "10px",
//           }}
//         >
//           {datas.map((items, index) => {
//             return (
//               <h5
//                 key={index}
//                 style={{
//                   border: "2px solid red",
//                   padding: "20px",
//                 }}
//               >
//                 <h2>id : {items.id}</h2>
//                 first_name: {items.firstName}
//               </h5>
//             );
//           })}
//         </div>
//         <button
//           onClick={() => {
//             handleFilterOnClick();
//           }}
//         >
//           handle filter event
//         </button>
//       </div>
//     </>
//   );
// };

// export default MapAndFilter;

// //! 2.

// import React, { useEffect, useState } from "react";
// //! performing some operation using map on click
// const MapAndFilter = () => {
//   let apiUrl = "https://dummyjson.com/users";
//   const [datas, setData] = useState([]);

//   useEffect(() => {
//     fetch(apiUrl)
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         setData(data.users);
//       });
//   }, []);

//   const handleMapOnClick = () => {
//     let handleMapData = datas.map((dta) => {
//       return dta.id * 2;
//     });

//     console.log(handleMapData);
//   };

//   return (
//     <>
//       <div className="container">
//         <div
//           className=""
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(8, 1fr)",
//             padding: "10px",
//             border: "2px solid red",
//             gap: "10px",
//           }}
//         >
//           {datas.map((items, index) => {
//             return (
//               <h5
//                 key={index}
//                 style={{
//                   border: "2px solid red",
//                   padding: "20px",
//                 }}
//               >
//                 <h2>{items.id}</h2>
//                 {items.firstName}
//               </h5>
//             );
//           })}
//         </div>
//         <button
//           onClick={() => {
//             handleMapOnClick();
//           }}
//         >
//           handle event
//         </button>
//       </div>
//     </>
//   );
// };

// export default MapAndFilter;

//! 1.
// import React, { useEffect, useState } from "react";

// //! showing data using map
// const MapAndFilter = () => {
//   let apiUrl = "https://dummyjson.com/users";
//   const [datas, setData] = useState([]);

//   useEffect(() => {
//     fetch(apiUrl)
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         setData(data.users);
//       });
//   }, []);

//   return (
//     <>
//       <div className="container">
//         <div
//           className=""
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(8, 1fr)",
//             padding: "10px",
//             border: "2px solid red",
//             gap: "10px",
//           }}
//         >
//           {datas.map((items, index) => {
//             return (
//               <h5
//                 key={index}
//                 style={{
//                   border: "2px solid red",
//                   padding: "20px",
//                 }}
//               >
//                 <h2>{items.id}</h2>
//                 {items.firstName}
//               </h5>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default MapAndFilter;
