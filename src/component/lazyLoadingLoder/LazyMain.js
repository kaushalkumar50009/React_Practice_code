//!loader without lazy and suspense
import React, { useState, useEffect } from "react";
import Loader from "./Loder/Loader";

const LazyMain = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate data fetching delay
    setTimeout(() => {
      // Set data and mark loading as false
      setData("Some data fetched!");
      setIsLoading(false);
    }, 2000); // Simulating a 2-second delay
  }, []);

  return (
    <div>
      <h1>Main Component</h1>
      {isLoading ? <Loader /> : <div>Data: {data}</div>}
    </div>
  );
};

export default LazyMain;

// //! in this code we will use loader
// import React, { lazy, Suspense } from "react";
// import Loader from "./Loder/Loader";

// //! we can not use suspense without lazy
// const Home = lazy(() => import("./Home"));
// const Lorem = lazy(() => {
//   return import("./Lorem");
// });

// const LazyMain = () => {
//   return (
//     <>
//       <h1>suspense take a fallback function to show loader</h1>

//       <Suspense
//         fallback={
//           <div className="loader">
//             <Loader />
//           </div>
//         }
//       >
//         <Home />
//         <Lorem />
//       </Suspense>
//     </>
//   );
// };

// export default LazyMain;

//! this code is without loader
// import React, { lazy } from "react";
// //? before lazy loading
// // import Home from "./Home";
// // import Lorem from "./Lorem";

// //? after lazy loading
// const Home = lazy(() => import("./Home"));
// const Lorem = lazy(() => {
//   return import("./Lorem");
// });

// const LazyMain = () => {
//   return (
//     <>
//       <Home />
//       <Lorem />
//     </>
//   );
// };

// export default LazyMain;

// // before lazy loadin = bundel.js = 426.67 kB (1.97 MB size), waiting time = 8ms, receiving time = 63ms
// // after lazy loadin = bundel.js = 402.90 kB (1.89 MB size), waiting time = 3ms, receiving time = 0ms
