import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  underline: {
    width: "100%",
    height: "1px",
    backgroundColor: "#e1e6e2",
    margin: "20px 0",
  },
  tagBtn: {
    color: "#bcc2be",
    transition: "all 0.5s ease-in",
    "&:hover": {
      backgroundColor: "orange",
      color: "white",
    },
  },
}));
const TagClouds = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        variant="h6"
        style={{
          fontWeight: "bold",
          marginTop: "50px",
          textTransform: "uppercase",
        }}
      >
        Tag Clouds
      </Typography>
      <div className={classes.underline}></div>
      <Grid container spacing={2}>
        <Grid item>
          <Button variant="outlined" className={classes.tagBtn}>
            LifeStyle
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" className={classes.tagBtn}>
            Inspiration
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" className={classes.tagBtn}>
            Motivation
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" className={classes.tagBtn}>
            Creation
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" className={classes.tagBtn}>
            PSD
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" className={classes.tagBtn}>
            Responsive
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" className={classes.tagBtn}>
            Nature
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" className={classes.tagBtn}>
            BeatRoot
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default TagClouds;
