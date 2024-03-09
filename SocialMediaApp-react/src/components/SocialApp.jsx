import MainContainer from './MainContainer/MainContainer'
import Input from './Input/Input'
import postsContext from '../provider/PostsProvider'
import React from 'react'
import UsePosts from './Hooks/UsePosts'
function SocialApp() {
const [posts,setPost] =  UsePosts();
  return (
    <div>
       <postsContext.Provider value={{posts , setPost}}>
           <Input />
    `     <MainContainer />
       </postsContext.Provider>
    </div>
  )
}

export default SocialApp