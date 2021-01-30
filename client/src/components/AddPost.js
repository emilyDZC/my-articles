import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddPost = ({ setShowAddPost }) => {
  const { addPost } = useContext(GlobalContext);

  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [topic, setTopic] = useState();
  const [tags, setTags] = useState();
  const [source, setSource] = useState();

  const onSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      title,
      body,
      topic,
      tags,
      source,
    };

    addPost(newPost);
    setShowAddPost(false);
  };

  return (
    <div>
      <h3>Add new post</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Title</label>
          <input
            type="text"
            placeholder="Enter title..."
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="text">Topic</label>
          <input
            type="text"
            placeholder="Enter topic..."
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="text">Source</label>
          <input
            type="text"
            placeholder="Enter source..."
            onChange={(e) => setSource(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="text">Tags</label>
          <input
            type="text"
            placeholder="Enter tags, separated by a comma"
            onChange={(e) => setTags([e.target.value])}
          />
        </div>
        <button className="btn">Add post</button>
      </form>
    </div>
  );
};

export default AddPost;
