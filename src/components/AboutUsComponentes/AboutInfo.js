import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";
const useStyles = makeStyles((theme) => ({
  twoDiv: {
    width: "100%",
    height: 300,
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexWrap: "wrap",
      height: "auto",
    },
  },
  twoTitle: {
    textAlign: "center",
    fontWeight: "bold",
    marginTop: "10px",
    marginBottom: "20px",
  },
  twoSub: {
    textAlign: "center",
    color: "#7a7a7a",
  },
  underline: {
    width: "95%",
    height: "1px",
    backgroundColor: "#e1e6e2",
    margin: "60px 5px",
  },
  social: {
    width: "100%",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  iconCont: {
    display: "flex",
    justifyContent: "space-around",
    width: "300px",
  },
  iconBtn: {
    backgroundColor: "#20232e",
    color: "white",
    transition: "background-color 0.5s ease",
    "&:hover": {
      backgroundColor: "orange",
    },
  },
}));
const AboutInfo = () => {
  const classes = useStyles();
  return (
    <section>
      <Box className={classes.twoDiv}>
        <Box>
          <Typography variant="h5" className={classes.twoTitle}>
            Two-One Donec poorttitor augue
          </Typography>
          <Typography variant="subtitle1" className={classes.twoSub}>
            Quisque bibendum cursus viverra. Mauris at ex ipsum. Aenean
            condimentum urna nisl, eget interdum ante euismod vel. Aliquam at
            metus sit amet nunc dapibus posuere.
          </Typography>
          <div className={classes.underline}></div>
        </Box>
        <Box>
          <Typography variant="h5" className={classes.twoTitle}>
            Two-One Donec poorttitor augue
          </Typography>
          <Typography variant="subtitle1" className={classes.twoSub}>
            Quisque bibendum cursus viverra. Mauris at ex ipsum. Aenean
            condimentum urna nisl, eget interdum ante euismod vel. Aliquam at
            metus sit amet nunc dapibus posuere.
          </Typography>
          <div className={classes.underline}></div>
        </Box>
      </Box>
      <Grid container spacing={2}>
        <Grid item lg={4}>
          <Typography variant="h5" className={classes.twoTitle}>
            1-03 Donec porttitor augue
          </Typography>
          <Typography variant="subtitle1" className={classes.twoSub}>
            Quisque bibendum cursus viverra. Mauris at ex ipsum. Aenean
            condimentum urna nisl, eget interdum ante euismod vel. Aliquam at
            metus sit amet nunc dapibus posuere.
          </Typography>
          <div className={classes.underline}></div>
        </Grid>
        <Grid item lg={4}>
          <Typography variant="h5" className={classes.twoTitle}>
            2-03 Donec porttitor augue
          </Typography>
          <Typography variant="subtitle1" className={classes.twoSub}>
            Maecenas et metus nisl. Morbi ac interdum metus. Aliquam erat
            volutpat. Donec posuere tortor vel volutpat consequat. Mauris
            sagittis magna vel tellus semper interdum et id sapien.
          </Typography>
          <div className={classes.underline}></div>
        </Grid>
        <Grid item lg={4}>
          <Typography variant="h5" className={classes.twoTitle}>
            3-03 Donec porttitor augue
          </Typography>
          <Typography variant="subtitle1" className={classes.twoSub}>
            Maecenas et metus nisl. Morbi ac interdum metus. Aliquam erat
            volutpat. Donec posuere tortor vel volutpat consequat. Mauris
            sagittis magna vel tellus semper interdum et id sapien.
          </Typography>
          <div className={classes.underline}></div>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item lg={3}>
          <Typography variant="h5" className={classes.twoTitle}>
            01 Four Columns
          </Typography>
          <Typography variant="subtitle1" className={classes.twoSub}>
            Mauris at ex ipsum. Aenean condimentum urna nisl, eget interdum ante
            euismod vel. Aliquam at metus sit amet nunc dapibus posuere
          </Typography>
          <div className={classes.underline}></div>
        </Grid>
        <Grid item lg={3}>
          <Typography variant="h5" className={classes.twoTitle}>
            02 Four Columns
          </Typography>
          <Typography variant="subtitle1" className={classes.twoSub}>
            Aliquam erat volutpat. Donec posuere tortor vel volutpat consequat.
            Mauris sagittis magna vel tellus semper interdum et id sapien.
          </Typography>
          <div className={classes.underline}></div>
        </Grid>
        <Grid item lg={3}>
          <Typography variant="h5" className={classes.twoTitle}>
            03 Four Columns
          </Typography>
          <Typography variant="subtitle1" className={classes.twoSub}>
            Morbi ac interdum metus. Donec posuere tortor vel volutpat
            consequat. Mauris sagittis magna vel tellus semper interdum et id
            sapien.
          </Typography>
          <div className={classes.underline}></div>
        </Grid>
        <Grid item lg={3}>
          <Typography variant="h5" className={classes.twoTitle}>
            04 Four Columns
          </Typography>
          <Typography variant="subtitle1" className={classes.twoSub}>
            Aliquam erat volutpat. Donec posuere tortor vel volutpat consequat.
            Mauris sagittis magna vel tellus semper interdum et id sapien.
          </Typography>
          <div className={classes.underline}></div>
        </Grid>
      </Grid>
      <Box className={classes.social}>
        <Box className={classes.iconCont}>
          <IconButton className={classes.iconBtn}>
            <FacebookIcon />
          </IconButton>
          <IconButton className={classes.iconBtn}>
            <TwitterIcon />
          </IconButton>
          <IconButton className={classes.iconBtn}>
            <LinkedInIcon />
          </IconButton>
          <IconButton className={classes.iconBtn}>
            <GitHubIcon />
          </IconButton>
        </Box>
      </Box>
    </section>
  );
};

export default AboutInfo;
