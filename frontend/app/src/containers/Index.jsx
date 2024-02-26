import React, { Fragment, useEffect, useState } from "react";
import fetchPosts from '../apis/blogsAPI.js';

const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts()
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []); // 第二引数が空の場合、一度だけ実行される

  return (
    <Fragment>
      {posts.map((post) => (
        <div key={post.id}>{post.title} {post.content}</div>
      ))}
    </Fragment>
  );
};

export default Index;
