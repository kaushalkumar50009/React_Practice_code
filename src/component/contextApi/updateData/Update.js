import React, { useContext } from "react";
import UserData from "../context/CreateContext";

const Update = () => {
  const { setName, setAge } = useContext(UserData);

  return (
    <>
      <button
        onClick={() => {
          setName("kaushla_kumar");
          setAge(50);
        }}
      >
        i can modify name and all others data
      </button>
    </>
  );
};

export default Update;
