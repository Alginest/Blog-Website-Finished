import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  underline: {
    width: "100%",
    height: "1px",
    backgroundColor: "#e1e6e2",
    margin: "20px 0",
  },
  categories: {
    display: "flex",
    width: "100%",
    height: "250px",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  category: {
    textDecoration: "none",
    fontWeight: "bold",
    color: "#222",
    fontSize: "18px",
    transition: "color 0.3s ease-in",
    "&:hover": {
      color: "orange",
    },
  },
}));
const Categories = () => {
  const classes = useStyles();
  return (
    <Box>
      <Typography
        variant="h6"
        style={{
          fontWeight: "bold",
          marginTop: "50px",
          textTransform: "uppercase",
        }}
      >
        Categories
      </Typography>
      <div className={classes.underline}></div>
      <Box className={classes.categories}>
        <Link to="/" className={classes.category}>
          - Nature LifeStyle
        </Link>
        <Link to="/" className={classes.category}>
          - Awesome Layouts
        </Link>
        <Link to="/" className={classes.category}>
          - Creative Ideas
        </Link>
        <Link to="/" className={classes.category}>
          - Healthy Food
        </Link>
        <Link to="/" className={classes.category}>
          - American Pie's
        </Link>
        <Link to="/" className={classes.category}>
          - Vegan Food
        </Link>
      </Box>
    </Box>
  );
};

export default Categories;
