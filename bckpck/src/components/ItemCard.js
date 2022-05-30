import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { BASE_URL } from "../api/api";

const ItemCard = (props) => {
  const [item, setItem] = useState(props.item);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
    }
  }, [item]);

  const inc = () => {
    item.amount += 1;
    axios.put(`${BASE_URL}/items`, item).then((res) => setItem(res.data));
  };

  const dec = () => {
    item.amount -= 1;
    axios.put(`${BASE_URL}/items`, item).then((res) => setItem(res.data));
  };

  return (
    <Card sx={{ mb: 1, mt: 1 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item.title}
      />
      <CardContent>
        <Typography variant="body" component="div">
          {item.description}
        </Typography>
        <CardActions sx={{ justifyContent: "center" }} disableSpacing>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton size="large" sx={{ m: 1 }} onClick={dec}>
              <RemoveCircleOutlineIcon />
            </IconButton>

            <Typography variant="body" fontSize={18} align="center">
              {item.amount}
            </Typography>

            <IconButton fontSize="large" sx={{ m: 1 }} onClick={inc}>
              <AddCircleOutlineIcon />
            </IconButton>
          </Box>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
