import { Box, makeStyles, Typography } from "@material-ui/core";
import Carousel from "react-elastic-carousel";
import React from "react";
import { CarouselData } from "../data/CarouselData";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
];
const useStyles = makeStyles((theme) => ({
  item: {
    display: "flex",
    height: 500,
    width: "100%",
    backgroundColor: " #00008B",
    color: "white",
    margin: "0 15px",
    fontSize: "4em",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      height: 400,
    },
  },
  img: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "500px",
    zIndex: "1",
    [theme.breakpoints.down("sm")]: {
      height: 400,
    },
  },
  textDiv: {
    width: "100%",
    position: "absolute",
    bottom: "60px",
    left: "30px",
    zIndex: "2",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      left: 10,
      bottom: 50,
    },
  },
  title: {
    color: "orange",
    fontWeight: 900,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  commentDiv: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  smText: {
    margin: "0 5px",
    "&:hover": {
      color: "orange",
    },
  },
}));
const CarouselSlide = () => {
  const classes = useStyles();
  return (
    <Carousel breakPoints={breakPoints}>
      {CarouselData.map((slide) => {
        const { title, subtitle, date, name, comments, image, id } = slide;
        return (
          <div className={classes.item} key={id}>
            <img src={image} alt={name} className={classes.img} />
            <div className={classes.textDiv}>
              <Typography variant="h6" gutterBottom className={classes.title}>
                {title}
              </Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                {subtitle}
              </Typography>
              <Box className={classes.commentDiv}>
                <Typography variant="body2" className={classes.smText}>
                  {name}
                </Typography>
                <Typography variant="body2" className={classes.smText}>
                  {date}
                </Typography>
                <Typography variant="body2" className={classes.smText}>
                  {comments}
                </Typography>
              </Box>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default CarouselSlide;
