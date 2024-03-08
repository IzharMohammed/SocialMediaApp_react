import { useEffect, useState } from "react";
import PostCard from "../PostCard";
import axios from "axios";

function PostCardList() {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyapi.io/data/v1/post", {
        headers: {
          "app-id": import.meta.env.VITE_APP_ID,
        },
      })
      .then((resopnse) => {
        console.log(resopnse.data);
        console.log(resopnse.data.data);
        setPost(resopnse.data.data);
      });
  }, [posts]);

  return (
    <>
      {posts.length == 0
        ? "loading..."
        : posts.map((post) => (
            <PostCard
              key={post.id}
              name={post.owner.firstName}
              image={post.image}
              content={post.text}
            />
          ))}
    </>
  );
}

export default PostCardList;
