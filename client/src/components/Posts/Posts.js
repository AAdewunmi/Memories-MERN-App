import React from "react";
import {Grid, CircularProgress} from '@material-ui/core';
import { useSelector } from 'react-redux';
import Post from './Post/Post.js';
import useStyles from "./styles.js";


const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  console.log(posts);
  return (
      !posts.length ? <CircularProgress></CircularProgress>:(
          <Grid className={classes.container} container alignItems="stretch" spacing={3}>
              
          </Grid>
      ));
};

export default Posts;
