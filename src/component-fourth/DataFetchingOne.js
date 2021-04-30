import axios from "axios";
import React, { useState, useEffect } from "react";

function DataFetchingOne() {
  const [loading, setLoading] = useState();
  const [error, setError] = useState("");
  const [posts, setPosts] = useState({});

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://v2.jokeapi.dev/joke/any")
      .then((response) => {
        setLoading(false);
        setPosts(response.data);
      })
      .catch((error) => {
        setLoading(false);
        setPosts({});
        setError(error);
      });
    // return () => {
    //   cleanup;
    // };
  }, []);
  return (
    <div>
      {loading ? "loading" : JSON.stringify(posts)}
      {error ? error : null}
    </div>
  );
}

export default DataFetchingOne;
