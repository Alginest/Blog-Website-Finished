import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { socialData } from "../../data/SocialData";
const useStyles = makeStyles((theme) => ({
  underline: {
    width: "100%",
    height: "1px",
    backgroundColor: "rgba(250,250,250,0.15)",
    margin: "60px 0",
  },
  footer: {
    width: "100%",
    marginTop: "100px",
    height: 300,
    backgroundColor: "#20232e",
    [theme.breakpoints.down("md")]: {
      height: "400px",
    },
  },
  innerBlock: {
    display: "flex",
    width: "100%",
  },
  socialCont: {
    width: "60%",
    margin: "0 20%",
    height: "100%",
    marginTop: "100px",
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  socialLink: {
    textTransform: "uppercase",
    textDecoration: "none",
    fontWeight: "bold",
    color: "white",
    fontSize: "14px",
    "&:hover": {
      color: "orange",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "10px 0",
    },
  },
  line: {
    marginLeft: "30px",
  },
  time: {
    color: "white",
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.footer}>
      <Container>
        <Box className={classes.innerBlock}>
          <Box className={classes.socialCont}>
            {socialData.map((social, index) => {
              const { url, title } = social;
              return (
                <Link to={url} key={index} className={classes.socialLink}>
                  {title}
                </Link>
              );
            })}
          </Box>
        </Box>
        <div className={classes.underline}></div>
        <Typography
          variant="subtitle1"
          align="center"
          style={{ color: "white" }}
        >
          COPYRIGHT 2022 LATOS BLOG CO. | DESIGN:
          <span style={{ color: "orange" }}> ALDIN DURAKOVIC</span>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
