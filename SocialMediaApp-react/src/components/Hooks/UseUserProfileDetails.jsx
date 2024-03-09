import Avatar from "@mui/material/Avatar";
import { useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function UseUserProfileDetails() {
  const [loading, setLoading] = useState(true);
  const { userid } = useParams();
  const [userDetails, setUserDetails] = useState({});
  axios
    .get(`https://dummyapi.io/data/v1/user/${userid}`, {
      headers: {
        "app-id": import.meta.env.VITE_APP_ID,
      },
    })
    .then((response) => {
      setUserDetails(response.data);
      setLoading(false);
    });
    return [loading,userDetails]
}
