import React, { useState, useEffect } from "react";
import "./SearchFilter.css";

const SearchFilter = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searched, setSearched] = useState([]);

  const UrlUsersApi = `https://jsonplaceholder.typicode.com/users`;

  const getUsers = async () => {
    const responseData = await fetch(UrlUsersApi);
    const jsonUsers = await responseData.json();
    setUsers(jsonUsers);
  };

  const searchAndFilter = () => {
    let filteredUsers = users.filter((data) => {
      return Object.values(data)
        .join("")
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    });

    setSearched(filteredUsers);
  };

  useEffect(() => {
    getUsers();
    if (searchQuery) {
      const debouncingSearch = setTimeout(() => {
        searchAndFilter();
      }, 1000);

      return () => {
        clearTimeout(debouncingSearch);
      };
    }
  }, [searchQuery]);

  return (
    <>
      <input
        className="mapping_box grid_main"
        type="text"
        name="search"
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />

      <h1>Users</h1>
      <div className="grid_main">
        {searchQuery.length > 0
          ? searched.map((searchItems, index) => (
              <div className="mapping_box" key={index}>
                <h1>{searchItems.name}</h1>
                <p>{searchItems.username}</p>
              </div>
            ))
          : users.map((usersData, index) => (
              <div className="mapping_box" key={index}>
                <h1>{usersData.name}</h1>
                <p>{usersData.username}</p>
              </div>
            ))}
      </div>
    </>
  );
};

export default SearchFilter;
