import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import CreatePost from "./pages/CreatePost";

import Login from "./pages/Login";
import Error from "./pages/Error";
import Post from "./components/Post";
import MobileNav from "./components/MobileNav";
import { useGlobalContext } from "./context";
import Footer from "./components/Footer/Footer";
import { Fab, makeStyles } from "@material-ui/core";
import NavigationIcon from "@mui/icons-material/Navigation";
const useStyles = makeStyles((theme) => ({
  navigate: {
    display: "flex",
    position: "fixed",
    bottom: 30,
    right: 30,
  },
}));
function App() {
  const { menu } = useGlobalContext();
  const classes = useStyles();
  const scrollTop = () => {
    document.documentElement.scrollTop = 0;
  };
  return (
    <Router>
      <Navbar />
      {menu && <MobileNav />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/posts" element={<Post />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      <Fab variant="extended" className={classes.navigate} onClick={scrollTop}>
        <NavigationIcon />
        Navigate
      </Fab>
    </Router>
  );
}

export default App;
