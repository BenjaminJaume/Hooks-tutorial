import axios from "axios";
import React, { useEffect, useState } from "react";

function DataFetching() {
  const [post, setPost] = useState({});
  const [isFetching, setIsFetching] = useState(true);
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  useEffect(() => {
    setIsFetching(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        setIsFetching(false);
        setPost(res.data);
      })
      .catch((error) => {
        setIsFetching(false);
        console.log(error);
      });
  }, [idFromButtonClick]);

  return (
    <div>
      <input
        type="number"
        name="id"
        max="100"
        min="1"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <button type="button" onClick={handleClick}>
        Submit
      </button>

      {isFetching ? (
        <p>Fetching...</p>
      ) : (
        <div>
          {post.id}: {post.title}
        </div>
      )}
    </div>
  );
}

export default DataFetching;
