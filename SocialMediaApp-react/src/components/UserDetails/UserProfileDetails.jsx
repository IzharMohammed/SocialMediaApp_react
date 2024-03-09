import Avatar from "@mui/material/Avatar";
import { useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function UserProfileDetails() {
 /*    const {posts} = useContext(postsContext);
    console.log(posts); */
    const{userid} = useParams();
    const[userDetails,setUserDetails] = useState({});
    axios.get(`https://dummyapi.io/data/v1/user/${userid}` , {
        headers: {
          "app-id": import.meta.env.VITE_APP_ID,
        },
      }).then((response)=>{
        console.log(response.data.location);
        setUserDetails(response.data);
      })
  return (
    <>
    user id : {userid} <br />

  {/*   Location  Details : <br />
    Country : {userDetails.location.country}<br />
    State : {userDetails.location.state}<br />
    City : {userDetails.location.city}<br />
    Street : {userDetails.location.street}<br /> */}
    <Avatar
      alt="Remy Sharp"
      src="https://randomuser.me/api/portraits/med/women/89.jpg"
      sx={{ width: 100, height: 100 }}
    />

<Card sx={{ display: 'flex' , width:"50rem" , height:"10rem" }}>
      <Box sx={{ display: 'flex', flexDirection: 'column'  }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          {userDetails.firstName + " " + userDetails.lastName}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          Email : {userDetails.email}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          Phone : {userDetails.phone}
          </Typography>
{/*           <Typography variant="subtitle1" color="text.secondary" component="div">
          Country : {userDetails.location.country}
          </Typography> */}
  {/*         <Typography variant="subtitle1" color="text.secondary" component="div">
          State : {userDetails.location.state}
          </Typography>  
              <Typography variant="subtitle1" color="text.secondary" component="div">
              City : {userDetails.location.city}
          </Typography>   
             <Typography variant="subtitle1" color="text.secondary" component="div">
             Street : {userDetails.location.street}
          </Typography> */}
        </CardContent>

      </Box>
      <CardMedia
        component="img"
        sx={{ width: 100 , height: 100 }}
        image={userDetails.picture}
        alt="Live from space album cover"
      />
    </Card>
    </>
  );
}
