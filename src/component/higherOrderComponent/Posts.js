//? this example using higher order component

import React from "react";
import HigherOrderComponent from "./higherOrderComponent/HigherOrderComponent";

const Posts = (props) => {
  const { data } = props;
  return (
    <>
      {data.map((posts) => (
        <p key={posts.id}>{posts.title}</p>
      ))}
    </>
  );
};

const postsComponent = HigherOrderComponent("posts", Posts, "posts");

export default postsComponent;

//? this is the simple example without higher order component
// import React, { useEffect, useState } from "react";

// const Posts = () => {
//   const [postsData, setPostsData] = useState([]);

//   const UrlApi = "https://jsonplaceholder.typicode.com/posts";
//   const fetchData = async () => {
//     try {
//       const responseData = await fetch(UrlApi);
//       const data = await responseData.json();
//       setPostsData(data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <>
//       <h1>posts</h1>
//       {postsData.map((posts) => (
//         <p key={posts.id}>{posts.title}</p>
//       ))}
//     </>
//   );
// };

// export default Posts;
