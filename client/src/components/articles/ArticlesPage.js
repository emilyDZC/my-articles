import React, { useState } from "react";
import Header from "./components/Header";
import Posts from "./components/Posts";
import AddPost from "./components/AddPost";
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
import AddButton from "../shared/AddButton";
import SearchButton from "../shared/SearchButton";

const ArticlesPage = () => {
  const [showAddPost, setShowAddPost] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <div className="page-container">
      <Sidebar handleSearch={(val) => handleSearch(val)} />
      <div className="container">
        <Header />
        <button onClick={() => setShowSearch((current) => !current)}>
          {showSearch ? "Hide" : <SearchButton />}
        </button>
        {showSearch && <Searchbar handleSearch={(val) => handleSearch(val)} />}
        <button onClick={() => setShowAddPost((current) => !current)}>
          {showAddPost ? "Hide" : <AddButton text="Post" />}
        </button>
        {showAddPost && <AddPost setShowAddPost={setShowAddPost} />}
        <Posts searchText={searchText} handleSearch={handleSearch} />
      </div>
    </div>
  );
};

export default ArticlesPage;
