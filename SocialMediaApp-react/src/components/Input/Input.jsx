import React from "react";
import postsContext from "../../provider/PostsProvider";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import axios from "axios";
import LoadingButton from '@mui/lab/LoadingButton';
import { useState } from "react";
import { useContext } from "react";

function Input() {
  const [postText, setpostText] = useState("");
  const [image, setimage] = useState("");
  const [loading, setLoading] = useState(true);
  const{posts,setPost} = useContext(postsContext);
  
  const handleSubmit = ()=>{
  console.log(typeof(posts));
  setLoading(false);
  const  userData={
    text : postText,
    image : image,
likes : Math.floor(Math.random()*100),
publishDate : new Date(),
owner : "60d0fe4f5311236168a109ca"
}

axios.post("https://dummyapi.io/data/v1/post/create",userData , {headers : {
  'app-id' : import.meta.env.VITE_APP_ID,}
}).then((response)=>{
  console.log(response.data);
  setPost([response.data , ...posts]);
  console.log((posts));
  setLoading(true);
  setpostText("");
  setimage("");
})
}

  return (
    <Box >
      <TextField
        sx={{ mt: "1rem" }}
        fullWidth
        id="standard-basic"
        label="create a new post..."
        variant="standard"
        value={postText}
        onChange={(e)=>setpostText(e.target.value)}
      />
      <TextField
        sx={{ mt: "1rem", mb: "1rem" }}
        fullWidth
        id="standard-basic"
        label="upload image"
        variant="standard"
        value={image}
        onChange={(e)=>setimage(e.target.value)}
      />
      {
        (loading) ?  <Button  variant="outlined"  endIcon={<SendIcon />} onClick={handleSubmit}>Submit</Button> : <LoadingButton loading variant="outlined">Submit</LoadingButton>
      }
    </Box>
  );
}

export default Input;
