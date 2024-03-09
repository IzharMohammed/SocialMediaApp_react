import { Routes, Route } from 'react-router-dom';
import React from 'react'
import SocialApp from '../components/SocialApp';
import UserProfileDetails from '../components/UserDetails/UserProfileDetails';

function CustonRoutes() {
  return (
   <Routes >
    <Route  path='/' element={<SocialApp />}  />
    <Route path='/user/:userid'  element ={ <UserProfileDetails/> }/>
   </Routes>
  )
}

export default CustonRoutes