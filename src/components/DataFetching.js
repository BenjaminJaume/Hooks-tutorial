import axios from "axios";
import React, { useEffect, useState } from "react";

function DataFetching() {
  const [post, setPost] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [id, setId] = useState(1);
  const [isClicked, setIsClicked] = useState(false);

  const handleSubmit = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setIsFetching(false);
        setPost(res.data);
      })
      .catch((error) => {
        setIsFetching(false);
        console.log(error);
      });
  };

  return (
    <div>
      <input
        type="number"
        name="id"
        max="100"
        min="1"
        defaultValue={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Submit</button>

      {isFetching ? <p>Fetching...</p> : <div>{post.title}</div>}
    </div>
  );
}

export default DataFetching;
