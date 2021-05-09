import { useEffect, useState } from "react";
import SkeletonArticle from "../skeletons/SkeletonArticle";

const Articles = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    let timer = setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className="articles">
      <h2>All Articles</h2>
      {!posts &&
        [1, 2, 3, 4, 5].map((n) => <SkeletonArticle key={n} theme="dark" />)}
      {posts &&
        posts.map((post) => (
          <div className="article" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  );
};

export default Articles;
