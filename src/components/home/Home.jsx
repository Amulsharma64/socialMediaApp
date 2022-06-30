import { useEffect, useState } from "react";
import axios from "axios";
import Blog from "../cards";
import noOfpages from "./home";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
export default function Home() {
  const [posts, SetPosts] = useState([]);
  const [pageDetail, setPageDeatail] = useState({ currentPage: 1 });
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        SetPosts(response.data);
      });
  }, []);

  useEffect(() => {
    if (posts.length !== 0) {
      const pages = noOfpages(posts.length);
      // console.log(pages);
      setPageDeatail((prev) => ({ ...prev, noOfpages: pages }));
    }
  }, [posts]);

  return (
    <>
      <div className="home">
        {posts
          .slice((pageDetail.currentPage - 1) * 10, pageDetail.currentPage * 10)
          .map((post, index) => (
            <div key={index}>
              {<Blog title={post.title} body={post.body} />}
            </div>
          ))}
      </div>
      <Stack spacing={2} className="paging">
        <Typography>Page: {pageDetail.currentPage}</Typography>
        <Pagination
          count={10}
          page={pageDetail.currentPage}
          onChange={(event, value) => {
            setPageDeatail((oldState) => ({ ...oldState, currentPage: value }));
          }}
        />
      </Stack>
    </>
  );
}
