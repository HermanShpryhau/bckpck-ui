import React, { useState, useEffect } from "react";
import axios from "axios";
import BackpackCard from "../components/BackpackCard";
import { Container } from "@mui/material";

const BackpackList = () => {
  const [backpacks, setBackpacks] = useState();

  useEffect(() => {
    axios.get("http://127.0.0.1:8080/backpacks").then((res) => {
      console.log(res.data);
      setBackpacks(res.data);
    });
  }, []);

  return (
    <Container maxWidth="sm">
      <div>
        {backpacks &&
          backpacks.map((b) => (
            <div key={b.id}>
              <BackpackCard backpack={b} />
            </div>
          ))}
      </div>
    </Container>
  );
};

export default BackpackList;
