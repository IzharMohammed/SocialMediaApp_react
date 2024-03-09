import { useContext, useEffect, useState } from "react";
import PostCard from "../PostCard";
import postsContext from "../../provider/PostsProvider";
import { Link } from "react-router-dom";

function PostCardList() {
  // const [posts, setPost] = useState([]);
const {posts} = useContext(postsContext);

  return (
    <>
      {posts.length == 0
        ? "loading..."
        : posts.map((post) => (
          <Link className="links"  to = {`post/${post.id}`}>
            <PostCard
              key={post.id}
              name={post.owner.firstName}
              image={post.image}
              content={post.text}
              date = {post.publishDate}
              id = {post.id}
            />
            </Link>
          ))}
       
    </>
  );
}

export default PostCardList;
