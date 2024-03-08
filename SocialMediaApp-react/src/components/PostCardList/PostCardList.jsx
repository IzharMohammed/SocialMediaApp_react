import { useContext, useEffect, useState } from "react";
import PostCard from "../PostCard";
import axios from "axios";
import postsContext from "../../provider/PostsProvider";
function PostCardList() {
  // const [posts, setPost] = useState([]);
const {posts , setPost} = useContext(postsContext);

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
              date = {post.publishDate}
            />
          ))}
       
    </>
  );
}

export default PostCardList;
