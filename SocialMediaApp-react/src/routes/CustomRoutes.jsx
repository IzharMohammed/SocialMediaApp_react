import { Routes, Route } from 'react-router-dom';
import React from 'react'
import SocialApp from '../components/SocialApp';
import UserProfileDetails from '../components/UserDetails/UserProfileDetails';
import PostDetails from '../components/UserDetails/PostDetails';

function CustonRoutes() {
  return (
   <Routes >
    <Route  path='/' element={<SocialApp />}  />
    <Route path='/user/:userid'  element ={ <UserProfileDetails/> }/>
    <Route path='/post/:postid' element = {<PostDetails /> } />
   </Routes>
  )
}

export default CustonRoutes