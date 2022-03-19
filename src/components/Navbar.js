import * as React from "react";
import {
  Container,
  AppBar,
  Toolbar,
  makeStyles,
  List,
  ListItem,
  Button,
  Box,
  IconButton,
} from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import { useGlobalContext } from "../context";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: "white",
    color: "black",
    height: 100,
  },
  box: {
    height: "100%",
  },
  toolbar: {
    height: "100%",
  },
  dot: {
    color: "orange",
    fontWeight: "bold",
    fontSize: 40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    textTransform: "uppercase",
    flexGrow: "2",
    textDecoration: "none",
    color: "#222",
  },
  //list
  list: {
    display: "flex",
    flexGrow: "2",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  ul: {
    display: "flex",
    justifyContent: "center",
  },
  link: {
    fontSize: "16px",
    color: "#222",
    fontWeight: "900",
    textDecoration: "none",
    textTransform: "uppercase",
    width: "100%",
    textAlign: "center",
  },
  linkBtn: {
    fontSize: "16px",
    color: "#222",
    fontWeight: "900",
    textDecoration: "none",
    textTransform: "uppercase",
    width: "100%",
    textAlign: "center",
    transition: "all 0.2s ease-in",
    marginLeft: 5,
    "&:hover": {
      backgroundColor: "orange",
      color: "white",
    },
  },
  active: {
    color: "orange",
  },
  profile: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: 150,
    textDecoration: "none",
    color: "#222",
  },
  profileImg: {
    marginRight: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  iconButton: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));
const Navbar = () => {
  const classes = useStyles();
  const location = useLocation();
  const pathName = location.pathname;
  const { user, person, signUserOut, menu, toggleMenu } = useGlobalContext();
  const [positions, setPositions] = React.useState("static");

  const changePosition = () => {
    let scrollY = window.scrollY;
    let intViewportWidth = window.innerWidth;
    if (scrollY >= 700 && intViewportWidth > 900) {
      setPositions("sticky");
    } else {
      setPositions("static");
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", changePosition);
    return () => window.removeEventListener("scroll", changePosition);
  }, []);
  return (
    <AppBar position={positions} className={classes.navbar}>
      <Container className={classes.box}>
        <Toolbar className={classes.toolbar}>
          <Link to="/" className={classes.title}>
            Latos Blog <span className={classes.dot}>.</span>
          </Link>
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
            <ListItem>
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
              <ListItem>
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
            <ListItem>
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
            <ListItem>
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
                  <img
                    src={person.image}
                    alt={"img"}
                    className={classes.avatar}
                  />
                  <Button className={classes.linkBtn} onClick={signUserOut}>
                    Log Out
                  </Button>
                </Box>
              )}
            </ListItem>
          </List>
          <IconButton
            size="medium"
            className={classes.iconButton}
            onClick={toggleMenu}
          >
            {menu ? (
              <CancelIcon className={classes.bars} />
            ) : (
              <MenuIcon className={classes.bars} />
            )}
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
