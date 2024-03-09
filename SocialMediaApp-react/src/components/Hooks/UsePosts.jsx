
import axios from "axios";
import React, {  useState ,useEffect} from 'react'

export default function UsePosts() {
    const[posts,setPost]=useState([]);
    useEffect(() => {
      axios.get("https://dummyapi.io/data/v1/post?limit=30", {
          headers: {
            "app-id": import.meta.env.VITE_APP_ID,
          },
        })
        .then((resopnse) => {
          setPost(resopnse.data.data);
        });
    }, []);
    return [posts,setPost];
}
