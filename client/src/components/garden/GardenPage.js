import React from "react";
import TodoList from "./components/TodoList";
import Flowers from "./components/Flowers";

const GardenPage = () => {
  return (
    <div className="music-page-container">
      <h2>My Garden</h2>
      <div className="widgets-container">
        <TodoList />
        <Flowers />
      </div>
    </div>
  );
};

export default GardenPage;
