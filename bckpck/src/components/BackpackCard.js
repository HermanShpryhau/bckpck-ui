import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const BackpackCard = (props) => {
  const [id, setId] = useState(props.id);
  const [name, setName] = useState(props.name);
  const [userId, setUserId] = useState(props.userId);

  return (
    <Card sx={{ mb: 1, mt: 1 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/backpack/${id}`}>
          <Button>View</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default BackpackCard;
