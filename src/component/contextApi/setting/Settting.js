import React, { useContext } from "react";
import UserData from "../context/CreateContext";

const Settting = () => {
  const { age } = useContext(UserData);

  return (
    <>
      <h3>
        hii i am setting component which is going to used in profile component
        and my data will show through the profile componenet
      </h3>
      <p>setting component age is : {age}</p>
    </>
  );
};

export default Settting;
