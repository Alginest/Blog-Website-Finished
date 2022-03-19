import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import imageOne from "../img/blog-post-01.jpg";
import imageTwo from "../img/blog-post-02.jpg";
import imageThree from "../img/blog-post-03.jpg";
import ArticleIcon from "@mui/icons-material/Article";
import ShareIcon from "@mui/icons-material/Share";
const useStyles = makeStyles((theme) => ({
  blogCont: {
    border: "1px solid  #e1e6e2",
    height: "800px",
    width: "100%",
  },
  img: {
    width: "100%",
  },
  blogTitle: {
    marginTop: 20,
  },
  line: {
    margin: "0 10px",
  },
  dates: {
    display: "flex",
  },
  underline: {
    width: "100%",
    height: "1px",
    backgroundColor: "#e1e6e2",
    margin: "30px 0",
  },
  textP: {
    lineHeight: 2,
    fontSize: 16,
    marginBottom: 20,
  },
  media: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  smallShare: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
const Blog = () => {
  const classes = useStyles();
  return (
    <>
      <section className={classes.blogCont}>
        <img src={imageOne} alt="blog1" className={classes.img} />
        <Container>
          <Box className={classes.blogTitle}>
            <Typography
              variant="h6"
              style={{ color: "orange", fontWeight: "bolder" }}
              gutterBottom
            >
              LIFESTYLE
            </Typography>
            <Typography
              variant="h6"
              style={{ fontWeight: "bolder" }}
              gutterBottom
            >
              Nature is the best for health.
            </Typography>
            <Box className={classes.dates}>
              <Typography variant="subtitle2" style={{ color: "#bcc2be" }}>
                Admin <span className={classes.line}> | </span>
              </Typography>
              <Typography variant="subtitle2" style={{ color: "#bcc2be" }}>
                May 31, 2022 <span className={classes.line}> | </span>
              </Typography>
              <Typography variant="subtitle2" style={{ color: "#bcc2be" }}>
                12 comments
              </Typography>
            </Box>
          </Box>
          <div className={classes.underline}></div>
          <Typography variant="body1" className={classes.textP}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Distinctio, magnam. Quis labore eos ratione recusandae reprehenderit
            nihil voluptatem temporibus odit ea aperiam aliquam laboriosam
            quisquam voluptatibus, nam quos qui dolorum id dicta maiores laborum
            ad. Voluptas harum assumenda cum dicta rem, consectetur ipsam ut non
            quibusdam a perferendis officiis voluptatem?
          </Typography>
          <div className={classes.underline}></div>
          <Box className={classes.media}>
            <Box className={classes.smallShare}>
              <ArticleIcon style={{ color: "orange", marginRight: "10px" }} />
              <Typography variant="body2" style={{ color: "#bcc2be" }}>
                Beauty, Nature
              </Typography>
            </Box>
            <Box className={classes.smallShare}>
              <ArticleIcon style={{ color: "orange", marginRight: "10px" }} />
              <Typography variant="body2" style={{ color: "#bcc2be" }}>
                Facebook, Twitter
              </Typography>
            </Box>
          </Box>
        </Container>
      </section>
      <section className={classes.blogCont} style={{ marginTop: "100px" }}>
        <img src={imageTwo} alt="blog1" className={classes.img} />
        <Container>
          <Box className={classes.blogTitle}>
            <Typography
              variant="h6"
              style={{ color: "orange", fontWeight: "bolder" }}
              gutterBottom
            >
              HEALTHY
            </Typography>
            <Typography
              variant="h6"
              style={{ fontWeight: "bolder" }}
              gutterBottom
            >
              Peace is the most important.
            </Typography>
            <Box className={classes.dates}>
              <Typography variant="subtitle2" style={{ color: "#bcc2be" }}>
                Admin <span className={classes.line}> | </span>
              </Typography>
              <Typography variant="subtitle2" style={{ color: "#bcc2be" }}>
                May 31, 2022 <span className={classes.line}> | </span>
              </Typography>
              <Typography variant="subtitle2" style={{ color: "#bcc2be" }}>
                25 comments
              </Typography>
            </Box>
          </Box>
          <div className={classes.underline}></div>
          <Typography variant="body1" className={classes.textP}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            pariatur reiciendis et maiores nostrum illum, sequi facere? Saepe
            optio vel provident. At repudiandae dolorum ipsam laborum
            consequatur pariatur, odit sapiente. Temporibus dolor, amet quisquam
            cupiditate veniam dolorem? Quis, temporibus animi.
          </Typography>
          <div className={classes.underline}></div>
          <Box className={classes.media}>
            <Box className={classes.smallShare}>
              <ArticleIcon style={{ color: "orange", marginRight: "10px" }} />
              <Typography variant="body2" style={{ color: "#bcc2be" }}>
                Outlook, View
              </Typography>
            </Box>
            <Box className={classes.smallShare}>
              <ShareIcon style={{ color: "orange", marginRight: "10px" }} />
              <Typography variant="body2" style={{ color: "#bcc2be" }}>
                Facebook, Twitter
              </Typography>
            </Box>
          </Box>
        </Container>
      </section>
      <section
        className={classes.blogCont}
        style={{ marginTop: "100px", marginBottom: "100px" }}
      >
        <img src={imageThree} alt="blog1" className={classes.img} />
        <Container>
          <Box className={classes.blogTitle}>
            <Typography
              variant="h6"
              style={{ color: "orange", fontWeight: "bolder" }}
              gutterBottom
            >
              LIFESTYLE
            </Typography>
            <Typography
              variant="h6"
              style={{ fontWeight: "bolder" }}
              gutterBottom
            >
              Nature is the best for health.
            </Typography>
            <Box className={classes.dates}>
              <Typography variant="subtitle2" style={{ color: "#bcc2be" }}>
                Admin <span className={classes.line}> | </span>
              </Typography>
              <Typography variant="subtitle2" style={{ color: "#bcc2be" }}>
                May 31, 2022 <span className={classes.line}> | </span>
              </Typography>
              <Typography variant="subtitle2" style={{ color: "#bcc2be" }}>
                32 comments
              </Typography>
            </Box>
          </Box>
          <div className={classes.underline}></div>
          <Typography variant="body1" className={classes.textP}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo natus
            explicabo velit molestias asperiores at odit, neque odio suscipit,
            illum nisi harum. Illum deserunt saepe reiciendis ipsum architecto,
            veniam hic quidem, minus vitae est numquam at reprehenderit
            doloribus voluptas facere suscipit officia iure! Facilis, totam.
          </Typography>
          <div className={classes.underline}></div>
          <Box className={classes.media}>
            <Box className={classes.smallShare}>
              <ArticleIcon style={{ color: "orange", marginRight: "10px" }} />
              <Typography variant="body2" style={{ color: "#bcc2be" }}>
                City, Suburbs
              </Typography>
            </Box>
            <Box className={classes.smallShare}>
              <ArticleIcon style={{ color: "orange", marginRight: "10px" }} />
              <Typography variant="body2" style={{ color: "#bcc2be" }}>
                Facebook, Twitter
              </Typography>
            </Box>
          </Box>
        </Container>
      </section>
    </>
  );
};

export default Blog;
