import { useEffect, useState } from "react";
import PostCard from "../PostCard";
import axios from "axios";
let array = [
  {
    id: "60d21b4667d0d8992e610c85",
    image: "https://img.dummyapi.io/photo-1564694202779-bc908c327862.jpg",
    likes: 43,
    tags: ["animal", "dog", "golden retriever"],
    text: "adult Labrador retriever",
    publishDate: "2020-05-24T14:53:17.598Z",
    owner: {
      id: "60d0fe4f5311236168a109ca",
      title: "ms",
      firstName: "Sara",
      lastName: "Andersen",
      picture: "https://randomuser.me/api/portraits/women/58.jpg",
    },
  },
  {
    id: "60d21b4967d0d8992e610c90",
    image: "https://img.dummyapi.io/photo-1510414696678-2415ad8474aa.jpg",
    likes: 31,
    tags: ["snow", "ice", "mountain"],
    text: "ice caves in the wild landscape photo of ice near ...",
    publishDate: "2020-05-24T07:44:17.738Z",
    owner: {
      id: "60d0fe4f5311236168a10a0b",
      title: "miss",
      firstName: "Margarita",
      lastName: "Vicente",
      picture: "https://randomuser.me/api/portraits/med/women/5.jpg",
    },
  },
];

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
  }, []);

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
