import React, { useEffect, useState } from "react";

const useJsonPlaceholderData = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  const UrlUsersApi = `https://jsonplaceholder.typicode.com/users`;
  const UrlPostsApi = `https://jsonplaceholder.typicode.com/posts`;

  const getUsers = async () => {
    const responseData = await fetch(UrlUsersApi);
    const jsonUsers = await responseData.json();
    setUsers(jsonUsers);
  };
  const getPosts = async () => {
    const responseData = await fetch(UrlPostsApi);
    const jsonPosts = await responseData.json();
    setPosts(jsonPosts);
  };

  useEffect(() => {
    getUsers();
    getPosts();
  }, []);

  return { users, posts };
};

export default useJsonPlaceholderData;
