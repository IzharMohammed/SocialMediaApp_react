import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { useState } from "react";
export default function PostCard({name , image , content}) {
  const [isLiked, setisLiked] = useState(true);
  return (
    <Card sx={{ maxWidth: 345 , mb : "3rem"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {name.substring(0,1)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
         <IconButton aria-label="add to favorites" onClick={()=>setisLiked(!isLiked)}>
          {
          (isLiked) ?  < FavoriteBorderIcon   />   : < FavoriteOutlinedIcon sx={{color : red[500]}} />
          }
       
        </IconButton>
      </CardActions>
    </Card>
  );
}
