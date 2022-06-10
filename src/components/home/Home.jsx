import { useEffect, useState } from "react";
import axios from "axios";
import Blog from "../cards";
import getNoOfpages from "./home.utils";
export default function Home() {
  const [posts, SetPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState([]);
  const [pageDetail, setPageDeatail] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        SetPosts(response.data);
      });
  });

  useEffect(() => {
    if (posts.length !== 0) {
      const pages = getNoOfpages(posts.length, 10);
    }
  }, [posts]);

  return (
    <div className="home">
      {posts.map((post, index) => (
        <div key={index}>{<Blog title={post.title} body={post.body} />}</div>
      ))}
    </div>
  );
}
