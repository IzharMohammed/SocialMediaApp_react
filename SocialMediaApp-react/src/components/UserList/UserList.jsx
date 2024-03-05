import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { useState ,useEffect} from "react";
import axios from "axios";

export default function CheckboxListSecondary() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyapi.io/data/v1/user", {
        headers: {
          "app-id": import.meta.env.VITE_APP_ID,
        },
      })
      .then((resopnse) => {
        
        console.log(resopnse.data.data);

        setUsers(resopnse.data.data);
      });
  }, []);


  return (
    <List
      dense
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
    >
      {users.map((user) => {
        const labelId = `checkbox-list-secondary-label-${user.id}`;
        return (
          <ListItem key={user.id} disablePadding>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  src={user.picture}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={user.firstName+"  "+ user.lastName } />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}