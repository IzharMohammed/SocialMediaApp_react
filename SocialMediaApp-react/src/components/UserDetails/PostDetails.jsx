import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import { Typography } from "@mui/material";


function PostDetails() {
    let date = new Date();
  const { postid } = useParams();
  const [post, setPost] = useState({});
  const [isLiked, setisLiked] = useState(true);
  const [loading, setLoading] = useState(true);
  const[update,setUpdate] = useState(true);
  const[updatedText , setupdatedText] = useState('');

  axios .get(`https://dummyapi.io/data/v1/post/${postid}`, {
      headers: {
        "app-id": import.meta.env.VITE_APP_ID,
      },
    }).then((response) => {
      setPost(response.data);
      setLoading(false);
      console.log('Bug detected !!!');
    });

  const deletepost = (id) => {
    axios
      .delete(`https://dummyapi.io/data/v1/post/${id}`, {
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
    setLoading(true);
    console.log(id);
    console.log(updatedText);
    axios.put(`https://dummyapi.io/data/v1/post/${id}`, 
    { 'text' : updatedText  } ,
    {
        headers: {
            "app-id": import.meta.env.VITE_APP_ID,
        }
    }).then(response=>{
        console.log("Mission Successful ....");
        console.log(response);
        setUpdate(true);
        setLoading(false);
      })
}

const handleTextChange = (e)=>{
    e.preventDefault();
    setupdatedText(e.target.value);
    console.log(updatedText);
}

    const toggleChange = () =>{
    setUpdate(false);
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
        />
        <CardMedia
          component="img"
          height="394"
          image={post.image}
          alt="Paella dish"
        />
        {
            update ? <Typography sx={{mx : '6rem' , mt : '1rem' , fontSize : '1.5rem'}}>{post.text}</Typography>    :    <TextField sx={{width : '20rem',mt: "1rem",ml:"1rem"}} value={updatedText} onChange={handleTextChange} id="standard-basic" label="Standard" variant="standard" />
        }
        
        <CardActions disableSpacing sx={{mx : '4rem'}}>

          <IconButton   aria-label="add to favorites"  onClick={() => setisLiked(!isLiked)}  >
            {isLiked ? (<FavoriteBorderIcon />) : ( <FavoriteOutlinedIcon sx={{ color: red[500] }} />)}
          </IconButton>

          <IconButton onClick={() => deletepost(post.id)} aria-label="delete">
            <DeleteIcon />
          </IconButton>

          <IconButton onClick={toggleChange} aria-label="edit">
          <EditIcon />
          </IconButton>

          <IconButton onClick={()=>updatePost(post.id)} aria-label="save">
              Save
            </IconButton>
        </CardActions>
      </Card>
    );
  }
}

export default PostDetails;
