import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import { Container } from "@mui/material";

const Backpack = () => {
  const { id } = useParams();
  const [items, setItems] = useState();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8080/backpacks/${id}/items`)
      .then((res) => setItems(res.data));
  }, []);

  return (
    <Container maxWidth="sm">
      <div>
        {items &&
          items.map((i) => (
            <div key={i._id}>
              <ItemCard item={i} />
            </div>
          ))}
      </div>
    </Container>
  );
};

export default Backpack;
