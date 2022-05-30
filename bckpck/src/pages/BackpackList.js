import React, { useState, useEffect } from "react";
import axios from "axios";
import BackpackCard from "../components/BackpackCard";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { BASE_URL } from "../api/api";

const BackpackList = (props) => {
  const setTitle = props.setTitle;

  const [backpacks, setBackpacks] = useState();
  const [addDialogOpen, setAddDialogOpen] = useState(false);

  useEffect(() => {
    axios.get(`${BASE_URL}/backpacks`).then((res) => {
      setBackpacks(res.data);
    });
  }, []);

  const onAddDialogOpen = () => {
    setAddDialogOpen(true);
  };

  const onAddDialogClose = () => {
    setAddDialogOpen(false);
  };

  const onAddNewBackpack = () => {
    setAddDialogOpen(false);
  };

  return (
    <Box>
      <Container maxWidth="sm">
        <div>
          {backpacks &&
            backpacks.map((b) => (
              <div key={b._id}>
                <BackpackCard backpack={b} />
              </div>
            ))}
        </div>
        <Dialog
          open={addDialogOpen}
          onClose={onAddDialogClose}
          fullWidth="true"
        >
          <DialogTitle>New Backpack</DialogTitle>
          <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
            <TextField
              required
              margin="dense"
              id="backpack-name"
              label="Backpack Name"
              helperText="Backpack Name"
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={onAddDialogClose}>Cancel</Button>
            <Button onClick={onAddNewBackpack}>Add Backpack</Button>
          </DialogActions>
        </Dialog>
      </Container>
      <Fab
        color="primary"
        aria-label="add"
        onClick={onAddDialogOpen}
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
        }}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
};

export default BackpackList;
