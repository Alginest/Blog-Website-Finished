import React from "react";
import { Typography, makeStyles, Box } from "@material-ui/core";
import backgroundImg from "../img/blog.jpg.jpg";
import GoogleButton from "../buttons/GoogleButton";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/firebase";
import { useGlobalContext } from "../context";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  background: {
    maxWidth: "100%",
    height: "800px",
    backgroundImage: `url(${backgroundImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  middleText: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  login: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#fff",
    textShadow: "2px 2px #222",
    marginBottom: 30,
  },
  subtitle: {
    color: "white",
    fontSize: 28,
    textShadow: "2px 2px #222",
    marginBottom: 30,
  },
}));
const Login = () => {
  const classes = useStyles();
  const { setUser } = useGlobalContext();
  const navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("user", true);
      setUser(true);
      navigate("/");
    });
  };
  return (
    <Box className={classes.background}>
      <Box className={classes.middleText}>
        <Box className={classes.login}>
          <Typography variant="h1" className={classes.title}>
            Latos
          </Typography>
          <Typography variant="h4" className={classes.subtitle} gutterBottom>
            Make stuff,look at stuff, talk <br />
            about stuff, find your people.
          </Typography>
          <GoogleButton signInWithGoogle={signInWithGoogle} />
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
