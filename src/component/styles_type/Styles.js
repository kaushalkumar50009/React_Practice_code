import React, { useState } from "react";

//! internal styling
const styles = {
  internal: {
    color: "red",
  },

  toogle_dark: {
    color: "white",
    backgroundColor: "black",
  },
  toogle_light: {
    color: "black",
    backgroundColor: "white",
  },
};

const Styles = () => {
  const [theme, setTheme] = useState(false);
  const themeChanged = () => {
    setTheme(!theme);
  };

  //   dangerouslySetInnerHTML
  let data = `<p  style="font-size: 50px; color: red"> this is my home </p>`;

  return (
    <>
      <h1 style={styles.internal}>internal styling</h1>

      <div
        className=""
        style={theme ? styles.toogle_light : styles.toogle_dark}
      >
        <h1>i am dark</h1>
        <p>i am light</p>
        <h3>we all are dark and light</h3>
      </div>

      <button onClick={themeChanged}>change theme</button>

      <div className="">
        <h1 style={{ color: "greenyellow" }}>
          you are internal nad i am inline
        </h1>
        <div
          className=""
          style={
            theme
              ? { backgroundColor: "white", color: "green" }
              : { backgroundColor: "black", color: "tomato" }
          }
        >
          <h1>i am dark</h1>
          <p>i am light</p>
          <h3>we all are dark and light</h3>
          <button onClick={themeChanged}>inline change</button>
        </div>
      </div>

      <div className="">{data}</div>
      <div dangerouslySetInnerHTML={{ __html: data }}></div>
    </>
  );
};

export default Styles;
