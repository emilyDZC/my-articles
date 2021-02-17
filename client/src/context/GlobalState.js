import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

const initialState = {
  posts: [],
  error: null,
  loading: true,
  topics: [],
  searchText: "",
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getPosts() {
    try {
      const res = await axios.get("/api/posts");

      dispatch({
        type: "GET_POSTS",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "POST_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  async function deletePost(id) {
    try {
      await axios.delete(`/api/posts/${id}`);

      dispatch({
        type: "DELETE_POST",
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: "POST_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  async function addPost(post) {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/posts", post, config);

      dispatch({
        type: "ADD_POST",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "POST_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  async function updatePost(post) {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.patch(`/api/posts/${post.id}`, post, config);

      dispatch({
        type: "UPDATE_POST",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "POST_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  async function getTopics() {
    try {
      const res = await axios.get("/api/posts");

      dispatch({
        type: "GET_TOPICS",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "TOPIC_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        posts: state.posts,
        error: state.error,
        loading: state.loading,
        topics: state.topics,
        deletePost,
        addPost,
        getPosts,
        updatePost,
        getTopics,
        // filterPosts,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
