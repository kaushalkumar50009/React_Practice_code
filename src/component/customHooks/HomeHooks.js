import React from "react";
import useJsonPlaceholderData from "./hooks/useJsonPlaceholder";

const HomeHooks = () => {
  const { users, posts } = useJsonPlaceholderData();

  return (
    <>
      <div className="">
        <h1>Users</h1>
        {users.map((usersData, index) => (
          <p key={index}>{usersData.name}</p>
        ))}
      </div>
      <div className="">
        <h1>posts</h1>
        {posts.map((postsData, index) => (
          <p key={index}>{postsData.title}</p>
        ))}
      </div>
    </>
  );
};

export default HomeHooks;
