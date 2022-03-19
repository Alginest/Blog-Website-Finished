import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import aboutUsImage from "../../img/about-us.jpg";
const useStyles = makeStyles((theme) => ({
  aboutHeading: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 100,
    marginBottom: 100,
  },
  headingText: {
    margin: "30px 0",
    lineHeight: "1.8",
    textAlign: "center",
    color: "#7a7a7a",
  },
}));
const AboutHeading = () => {
  const classes = useStyles();
  return (
    <Box className={classes.aboutHeading}>
      <img src={aboutUsImage} alt="" />
      <Typography variant="subtitle1" className={classes.headingText}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad sit
        reprehenderit consequatur magnam, consequuntur enim expedita tempora
        eius temporibus esse commodi, eligendi dolor cupiditate perspiciatis.
        Repellendus error nobis quisquam nemo sunt laboriosam, ad eligendi
        fugiat, sint, odio quod reprehenderit totam quis. Quia minima autem
        recusandae aut cupiditate quis, repudiandae molestiae.
      </Typography>

      <Typography variant="subtitle1" className={classes.headingText}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad sit
        reprehenderit consequatur magnam, consequuntur enim expedita tempora
        eius temporibus esse commodi, eligendi dolor cupiditate perspiciatis.
        Repellendus error nobis quisquam nemo sunt laboriosam, ad eligendi
        fugiat, sint, odio quod reprehenderit totam quis. Quia minima autem
        recusandae aut cupiditate quis, repudiandae molestiae.
      </Typography>
      <Box></Box>
    </Box>
  );
};

export default AboutHeading;
