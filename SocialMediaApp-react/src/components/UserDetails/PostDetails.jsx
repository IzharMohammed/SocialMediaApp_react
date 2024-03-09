import React from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';

function PostDetails() {
    let date = new Date();

  const { postid } = useParams();
  const [post, setPost] = useState({});
  const [isLiked, setisLiked] = useState(true);
  const [loading, setLoading] = useState(true);
  const[update,setUpdate] = useState(true);

  axios
    .get(`https://dummyapi.io/data/v1/post/${postid}`, {
      headers: {
        "app-id": import.meta.env.VITE_APP_ID,
      },
    })
    .then((response) => {
      setPost(response.data);
      setLoading(false);
    });

  const deletepost = (id) => {
    axios
      .delete(`https://dummyapi.io/data/v1/post/${postid}`, {
        headers: {
          "app-id": import.meta.env.VITE_APP_ID,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(`Got error  : ${error}`);
      });
  };

    const updatePost = (id) =>{
        console.log("Mission Successful ....");
        console.log(id);
    }


  if (loading) {
    return <div>Loading ....</div>;
  } else {
    return (
      <Card sx={{ maxWidth: 345, mb: "3rem", mx: "auto", mt: "10rem" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {post.owner.firstName.substring(0, 1)}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={post.owner.firstName + " " + post.owner.lastName}
          //   subheader={date.split("T")[0]}
        />
        <CardMedia
          component="img"
          height="194"
          image={post.image}
          alt="Paella dish"
        />
 
 {/*          {  if(update){
                       <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {post.text}
                </Typography>
                </CardContent>
            }else{
                <TextField id="standard-basic" label="Standard" variant="standard" />
            }} */}


          <Typography variant="body2" color="text.secondary">
            {post.text}
            <TextField id="standard-basic" label="Standard" variant="standard" />
          </Typography> 
        
        <CardActions disableSpacing>

          <IconButton   aria-label="add to favorites"  onClick={() => setisLiked(!isLiked)}  >
            {isLiked ? (<FavoriteBorderIcon />) : ( <FavoriteOutlinedIcon sx={{ color: red[500] }} />)}
          </IconButton>

          <IconButton onClick={() => deletepost(post.id)} aria-label="delete">
            <DeleteIcon />
          </IconButton>

          <IconButton onClick={()=>updatePost(post.id)} aria-label="edit">
          <EditIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

export default PostDetails;
