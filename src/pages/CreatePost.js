import {
  Box,
  Button,
  Container,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import postbg from "../img/poster.jpg";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useGlobalContext } from "../context";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  postContainer: {
    maxWidth: "100%",
    height: "800px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${postbg})`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  formCont: {
    width: 1000,
    height: 600,
    backgroundColor: "#fff",
    borderRadius: 20,
    [theme.breakpoints.up("xs")]: {
      width: 300,
    },
    [theme.breakpoints.up("sm")]: {
      width: 600,
    },
    [theme.breakpoints.up("md")]: {
      width: 900,
    },
    [theme.breakpoints.up("lg")]: {
      width: 1100,
    },
  },
  input: {
    width: "90%",
    margin: "0 30px",
  },
  message: {
    width: "90%",
    margin: "0 30px",
    marginTop: theme.spacing(5),
  },
  subBtn: {
    width: "90%",
    marginTop: 50,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "orange",
    transition: " all 0.3s ease-in 0s",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#222",
      color: "orange",
    },
  },
}));
const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const { user, person } = useGlobalContext();

  const today = new Date();
  const date =
    today.getFullYear() + "-0" + (today.getMonth() + 1) + "-" + today.getDate();

  const classes = useStyles();
  const postsCollectionRef = collection(db, "posts");
  const navigate = useNavigate();
  const createPost = async (e) => {
    e.preventDefault();
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: {
        name: person.name,
        id: person.id,
        image: person.image,
        date: date,
      },
    });
    navigate("/posts");
  };
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Box className={classes.postContainer}>
        <Box className={classes.formCont}>
          <Container>
            <Typography
              variant="h5"
              gutterBottom
              style={{ marginTop: 20, marginLeft: 30 }}
            >
              Add a new Post
            </Typography>
            <form className={classes.form} autoComplete="off">
              <TextField
                id="standard-basic"
                label="Title"
                className={classes.input}
                onChange={(e) => setTitle(e.target.value)}
              />

              <Typography
                variant="h5"
                gutterBottom
                style={{ marginTop: 30, marginLeft: 30 }}
              >
                Write Your Message
              </Typography>
              <TextField
                id="Message"
                label="Message"
                variant="outlined"
                minRows={10}
                maxRows={12}
                multiline
                fullWidth
                className={classes.message}
                onChange={(e) => setPostText(e.target.value)}
              />
              <Button
                type="submit"
                className={classes.subBtn}
                onClick={createPost}
              >
                Create Post
              </Button>
            </form>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default CreatePost;
