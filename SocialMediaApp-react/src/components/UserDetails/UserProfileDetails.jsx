import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import UseUserProfileDetails from '../Hooks/UseUserProfileDetails';

export default function UserProfileDetails() {
 const[loading,userDetails] = UseUserProfileDetails();

        if(loading){
        return    <div>Loading ....</div>
        }else{
          return (
            <>
        <Card sx={{ display: 'flex' , width:"30rem" , height:"15rem" , justifyContent : 'space-around' , mx: 'auto' , mt: "10rem" }}>
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
         <Typography variant="subtitle1" color="text.secondary" component="div">
                  Country : {userDetails.location.country}
                  </Typography> 
          <Typography variant="subtitle1" color="text.secondary" component="div">
                  State : {userDetails.location.state}
                  </Typography>  
                      <Typography variant="subtitle1" color="text.secondary" component="div">
                      City : {userDetails.location.city}
                  </Typography>   
                     <Typography variant="subtitle1" color="text.secondary" component="div">
                     Street : {userDetails.location.street}
                  </Typography> 
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

}
