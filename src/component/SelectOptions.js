// import React, { useState } from "react";

// const stateCity = [
//   {
//     name: "india",
//     value: "IN",
//     cities: ["delhi", "mumbai"],
//   },
//   {
//     name: "pa",
//     value: "paas",
//     cities: ["par", "sar"],
//   },
//   {
//     name: "ka",
//     value: "KAas",
//     cities: ["kar", "tar"],
//   },
// ];

// const First = () => {
//   const [country, setCountry] = useState({ name: "", value: "", cities: [] });

//   const fin = (e) => {
//     const value = e.target.value;
//     setCountry(value);
//   };

//   return (
//     <>
//       <select
//         name=""
//         id=""
//         value={country}
//         onChange={(e) => {
//           fin(e);
//         }}
//       >
//         {stateCity.map((item, index) => {
//           return (
//             <option value={index} key={index}>
//               {item.name}
//             </option>
//           );
//         })}
//       </select>

//       <select name="" id="" value={country}>
//         {stateCity.map((items, index) => (
//           <option value={index} key={index}>
//             {items}
//           </option>
//         ))}
//       </select>
//     </>
//   );
// };

// export default First;

import React, { useState } from "react";

const stateCity = [
  {
    name: "india",
    value: "IN",
    cities: ["delhi", "mumbai"],
  },
  {
    name: "pa",
    value: "paas",
    cities: ["par", "sar"],
  },
  {
    name: "ka",
    value: "KAas",
    cities: ["kar", "tar"],
  },
];

const SelectOptions = () => {
  const [selectedCountryIndex, setSelectedCountryIndex] = useState(0); // Default to the first country

  const handleCountryChange = (e) => {
    console.log(e.target.value);
    const value = parseInt(e.target.value); // Convert the selected value to an integer
    setSelectedCountryIndex(value);
  };

  return (
    <>
      <select value={selectedCountryIndex} onChange={handleCountryChange}>
        {stateCity.map((item, index) => (
          <option value={index} key={index}>
            {item.name}
          </option>
        ))}
      </select>

      <select>
        {stateCity[selectedCountryIndex].cities.map((city, index) => (
          <option value={city} key={index}>
            {city}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectOptions;
