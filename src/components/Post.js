import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import { db } from "../firebase/firebase";
import CardPerson from "./CardPerson";
const useStyles = makeStyles((theme) => ({
  mainBox: {
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  container: {
    marginTop: theme.spacing(5),
    height: 600,
    overflowY: "auto",
  },
  postTitle: {
    margin: "50px 0",
  },
}));

const Post = () => {
  const classes = useStyles();
  const { postList, setPostList, deletePost } = useGlobalContext();
  const postsCollectionRef = collection(db, "posts");
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, [deletePost]);

  return (
    <Box>
      <Typography
        align="center"
        variant="h2"
        gutterBottom
        className={classes.postTitle}
      >
        Posts
      </Typography>
      <Container className={classes.container}>
        <Grid container spacing={2} className={classes.mainBox}>
          {postList.map((post, index) => {
            return (
              <Grid item md={6} lg={4} key={index}>
                <CardPerson post={post} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Post;
