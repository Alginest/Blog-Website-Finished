import { Box, makeStyles, TextField, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  textField: {
    width: "100%",
  },
  underline: {
    width: "100%",
    height: "1px",
    backgroundColor: "#e1e6e2",
    margin: "20px 0",
  },
  title: {
    fontSize: "21px",
    textDecoration: "none",
    fontWeight: "bold",
    color: "#222",
    lineHeight: "1.5",
  },
  date: {
    color: "#bcc2be",
    fontSize: 14,
    marginTop: 10,
  },
}));
const RecentPosts = () => {
  const classes = useStyles();
  return (
    <>
      <TextField
        id=""
        label="Type to search ..."
        variant="outlined"
        className={classes.textField}
      />
      <Box className={classes.recentPosts}>
        <Typography
          variant="h6"
          style={{
            fontWeight: "bold",
            marginTop: "50px",
            textTransform: "uppercase",
          }}
        >
          Recent Posts
        </Typography>
        <div className={classes.underline}></div>
        <Box className={classes.post}>
          <Link to="/" className={classes.title}>
            Vestibulum id turpis porttitor sapien facilisis scelerisque
          </Link>
          <Typography className={classes.date}>May 31, 2021</Typography>
        </Box>
        <div className={classes.underline}></div>
        <Box className={classes.post}>
          <Link to="/" className={classes.title}>
            Suspendisse et metus nec libero ultrices varius eget in risus
          </Link>
          <Typography className={classes.date}>May 21, 2021</Typography>
        </Box>
        <div className={classes.underline}></div>
        <Box className={classes.post}>
          <Link to="/" className={classes.title}>
            Swag hella echo park leggings,shaman cornhole ethical coloring
          </Link>
          <Typography className={classes.date}>May 11, 2021</Typography>
        </Box>
      </Box>
    </>
  );
};

export default RecentPosts;
