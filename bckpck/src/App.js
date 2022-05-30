import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BackpackList from "./pages/BackpackList";
import Backpack from "./pages/Backpack";
import { Box, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState();
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Router>
        <Routes>
          <Route path="/" element={<BackpackList setTitle={setTitle} />} />
          <Route
            path="/backpack/:id"
            element={<Backpack setTitle={setTitle} />}
          />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
