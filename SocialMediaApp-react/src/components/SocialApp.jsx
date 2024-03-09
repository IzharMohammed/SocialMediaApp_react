import React, {  useState ,useEffect} from 'react'
import Navbar from './Navbar/Navbar'
import MainContainer from './MainContainer/MainContainer'
import Input from './Input/Input'
import postsContext from '../provider/PostsProvider'
import axios from "axios";

function SocialApp() {
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

  return (
    <div>
       <postsContext.Provider value={{posts , setPost}}>
           <Navbar />
           <Input />
    `     <MainContainer />
       </postsContext.Provider>
    </div>
  )
}

export default SocialApp