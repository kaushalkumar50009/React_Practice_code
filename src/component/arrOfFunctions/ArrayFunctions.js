import React, { useEffect } from "react";

const ArrayFunctions = () => {
  const fnArray = [
    {
      fn: function add(a, b) {
        return a + b;
      },
    },
    {
      fn: function sub(a, b) {
        return a - b;
      },
    },
    {
      fn: function mul(a, b) {
        return a * b;
      },
    },
    {
      fn: function div(a, b) {
        return a / b;
      },
    },
  ];

  const mainFn = () => {
    const result = fnArray.map((data) => {
      return data.fn(6, 5);
    });
    console.log(result);
  };

  useEffect(() => {
    mainFn();
  }, []);

  return (
    <>
      <h1>
        write a function which takes an array of multiple functions and executes
        them one by one , in left to right manner
      </h1>
    </>
  );
};

export default ArrayFunctions;
