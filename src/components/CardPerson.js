import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import { useGlobalContext } from "../context";
import { auth } from "../firebase/firebase";
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(5),
    height: 500,
  },
  root: {
    backgroundColor: "white",
    width: 350,
    boxShadow: "2px 5px 10px #888888",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
}));

export default function CardPerson({ post }) {
  const classes = useStyles();
  const { deletePost, user } = useGlobalContext();
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar src={post.author.image} aria-label="recipe"></Avatar>}
        action={
          user &&
          post.author.id === auth.currentUser.uid && (
            <IconButton aria-label="delete" onClick={() => deletePost(post.id)}>
              <DeleteIcon />
            </IconButton>
          )
        }
        title={post.author.name}
        subheader={post.author.date}
      />

      <CardContent>
        <Typography variant="h6" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.postText}
        </Typography>
      </CardContent>

      <Collapse timeout="auto" unmountOnExit></Collapse>
    </Card>
  );
}
