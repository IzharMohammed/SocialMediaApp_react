import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { useState ,useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom"

export default function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyapi.io/data/v1/user", {
        headers: {
          "app-id": import.meta.env.VITE_APP_ID,
        },
      })
      .then((resopnse) => {
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
            <Link className="links" to={`user/${user.id}`}>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  src={user.picture}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={user.firstName+"  "+ user.lastName } />
            </ListItemButton>
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
}
