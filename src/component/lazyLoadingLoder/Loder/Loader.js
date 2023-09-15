import React from "react";
import { RingLoader } from "react-spinners";

const Loader = () => {
  return (
    <>
      <RingLoader
        color="#006455"
        cssOverride={{}}
        loading
        size={327}
        speedMultiplier={2}
      />
    </>
  );
};

export default Loader;
