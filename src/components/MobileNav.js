import { Box, Button, List, ListItem, makeStyles } from "@material-ui/core";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useGlobalContext } from "../context";
const useStyles = makeStyles((theme) => ({
  mobileNavCont: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  list: {
    fontSize: "16px",
    color: "#222",
    fontWeight: "900",
    textDecoration: "none",
    textTransform: "uppercase",
    width: "100%",
    textAlign: "center",
  },
  ul: {
    display: "flex",
    width: "90%",
    height: "100%",
    margin: "0px 5%",
    justifyContent: "center",
  },
  link: {
    fontSize: "16px",
    height: "100%",
    color: "#222",
    fontWeight: "900",
    textDecoration: "none",
    textTransform: "uppercase",
    width: "100%",
    textAlign: "center",
  },
  profile: {
    display: "flex",
  },
  profileImg: {
    marginRight: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
}));
const MobileNav = () => {
  const classes = useStyles();
  const location = useLocation();
  const pathName = location.pathname;
  const { user, person, signUserOut } = useGlobalContext();

  return (
    <Box className={classes.mobileNavCont}>
      <List className={classes.list}>
        <ListItem className={classes.ul}>
          <Link
            to="/"
            className={
              pathName === "/"
                ? `${classes.link} ${classes.active}`
                : `${classes.link}`
            }
          >
            Home
          </Link>
        </ListItem>
        <ListItem className={classes.ul}>
          <Link
            to="/about"
            className={
              pathName === "/about"
                ? `${classes.link} ${classes.active}`
                : `${classes.link}`
            }
          >
            About Us
          </Link>
        </ListItem>
        {user && (
          <ListItem className={classes.ul}>
            <Link
              to="/createpost"
              className={
                pathName === "/createpost"
                  ? `${classes.link} ${classes.active}`
                  : `${classes.link}`
              }
            >
              Create post
            </Link>
          </ListItem>
        )}
        <ListItem className={classes.ul}>
          <Link
            to="/posts"
            className={
              pathName === "/posts"
                ? `${classes.link} ${classes.active}`
                : `${classes.link}`
            }
          >
            Posts
          </Link>
        </ListItem>
        <ListItem className={classes.ul}>
          {!user ? (
            <Link
              to="/login"
              className={
                pathName === "/login"
                  ? `${classes.link} ${classes.active}`
                  : `${classes.link}`
              }
            >
              Login
            </Link>
          ) : (
            <Box className={classes.profile}>
              <img src={person.image} alt={"img"} className={classes.avatar} />
              <Button className={classes.link} onClick={signUserOut}>
                Log Out
              </Button>
            </Box>
          )}
        </ListItem>
      </List>
    </Box>
  );
};

export default MobileNav;
