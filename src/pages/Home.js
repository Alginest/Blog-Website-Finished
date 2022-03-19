import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import MainButton from "../buttons/MainButton";
import CarouselSlide from "../components/CarouselSlide";
import HeadingBg from "../img/cta-bg.jpg";
import Blog from "../components/Blog";
import SideLetter from "../components/SideLetter";
const useStyles = makeStyles((theme) => ({
  caroCont: {
    marginTop: theme.spacing(5),
  },
  bigCont: {
    height: "auto",
  },
  blogTitle: {
    width: "100%",
    margin: "100px 0",
    backgroundImage: `url(${HeadingBg})`,
    height: "200px",
    backgroundColor: "#222",
    display: "flex",
    alignItems: "center",
  },
  titleInside: {
    display: "flex",
    justifyContent: "space-between",
    width: "90%",
    margin: "0 5%",
  },
}));
const Home = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mainCont}>
      <Box className={classes.caroCont}>
        <CarouselSlide />
        <Container className={classes.bigCont}>
          <Box className={classes.blogTitle}>
            <Box className={classes.titleInside}>
              <Box className={classes.titleText}>
                <Typography
                  variant="h5"
                  style={{ color: "orange" }}
                  gutterBottom
                >
                  Best Blog in the area!
                </Typography>
                <Typography
                  variant="h4"
                  style={{ color: "white", fontWeight: "bold" }}
                >
                  Be creative and sustain bloggers!
                </Typography>
              </Box>
              <MainButton />
            </Box>
          </Box>
          {/*blog section*/}
          <Grid container spacing={4}>
            <Grid item lg={8}>
              <Blog />
            </Grid>
            <Grid item lg={4}>
              <SideLetter />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
