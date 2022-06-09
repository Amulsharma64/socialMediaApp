import { useEffect, useState } from "react";
import axios from "axios";
import Blog from "../cards";
export default function Home() {
  const [posts, SetPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        SetPosts(response.data);
      });
  });
  return (
    <div className="home">
      {posts.map((post, index) => (
        <div key={index}>{<Blog title={post.title} body={post.body} />}</div>
      ))}
    </div>
  );
}
