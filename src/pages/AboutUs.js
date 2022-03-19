import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import AboutHeading from "../components/AboutUsComponentes/AboutHeading";
import AboutInfo from "../components/AboutUsComponentes/AboutInfo";
import ImageBg from "../img/heading-bg.jpg";
const useStyles = makeStyles((theme) => ({
  headingBg: {
    width: "98%",
    height: "330px",
    backgroundImage: `url(${ImageBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    margin: "10px 15px",
    [theme.breakpoints.down("sm")]: {
      margin: "5px",
    },
  },
  underline: {
    width: "100%",
    height: "1px",
    backgroundColor: "#e1e6e2",
    margin: "60px 0",
  },
}));
const AboutUs = () => {
  const classes = useStyles();
  return (
    <section className={classes.heading}>
      <Box className={classes.headingBg}>
        <Container
          style={{
            display: "flex",
            alignItems: "center",
            height: "330px",
          }}
        >
          <Box className={classes.headingText}>
            <Typography
              variant="h6"
              style={{
                color: "orange",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              About Us
            </Typography>
            <Typography
              variant="h4"
              style={{
                color: "white",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              More about us!
            </Typography>
          </Box>
        </Container>
      </Box>
      <Container>
        <AboutHeading />
        <div className={classes.underline}></div>
        <AboutInfo />
      </Container>
    </section>
  );
};

export default AboutUs;
