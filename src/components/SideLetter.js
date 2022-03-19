import { makeStyles } from "@material-ui/core";
import React from "react";
import RecentPosts from "../components/SideLetterComponents/RecentPosts";
import Categories from "../components/SideLetterComponents/Categories";
import TagClouds from "./SideLetterComponents/TagClouds";
const useStyles = makeStyles((theme) => ({}));
const SideLetter = () => {
  const classes = useStyles();
  return (
    <section className={classes.SideLetter}>
      <RecentPosts />
      <Categories />
      <TagClouds />
    </section>
  );
};

export default SideLetter;
