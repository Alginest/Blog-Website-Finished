import { Button, makeStyles } from "@material-ui/core";

import React from "react";
const useStyles = makeStyles((theme) => ({
  btn: {
    backgroundColor: "orange",
    color: "white",
    width: 200,
    height: 50,
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      color: "orange",
      backgroundColor: "white",
      transform: "scale(1.1)",
    },
  },
}));
const MainButton = () => {
  const classes = useStyles();
  return <Button className={classes.btn}>Read More</Button>;
};

export default MainButton;
