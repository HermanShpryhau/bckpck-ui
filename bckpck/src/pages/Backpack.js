import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import { Container, Fab, Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import { BASE_URL } from "../api/api";

const Backpack = (props) => {
  const { id } = useParams();
  const setTitle = props.setTitle;

  const [items, setItems] = useState();
  const [backpack, setBackpack] = useState();
  const [addDialogOpen, setAddDialogOpen] = useState(false);

  useEffect(() => {
    axios.get(`${BASE_URL}/backpacks/${id}`).then((res) => {
      setBackpack(res.data);
      setTitle(backpack.name);
    });
    axios
      .get(`${BASE_URL}/backpacks/${id}/items`)
      .then((res) => setItems(res.data));
  }, []);

  const onAddDialogOpen = () => {
    setAddDialogOpen(true);
  };

  const onAddDialogClose = () => {
    setAddDialogOpen(false);
  };

  const onAddNewItem = () => {
    setAddDialogOpen(false);
  };

  return (
    <Box>
      <Container maxWidth="sm">
        <div>
          {items &&
            items.map((i) => (
              <div key={i._id}>
                <ItemCard item={i} />
              </div>
            ))}
        </div>
        <Dialog
          open={addDialogOpen}
          onClose={onAddDialogClose}
          fullWidth="true"
        >
          <DialogTitle>New Item</DialogTitle>
          <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
            <TextField
              required
              margin="dense"
              id="item-name"
              label="Item Name"
              helperText="Item Name"
              variant="standard"
            />
            <TextField
              margin="dense"
              id="item-description"
              label="Item Description"
              multiline
              variant="standard"
              helperText="Item Description"
            />
            <TextField
              margin="dense"
              id="item-amount"
              label="Amount"
              type="number"
              variant="standard"
              defaultValue="0"
              required
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={onAddDialogClose}>Cancel</Button>
            <Button onClick={onAddNewItem}>Add Item</Button>
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

export default Backpack;
