import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";
import { Container, Grow, Grid, Paper, AppBar, TextField, Button } from "@material-ui/core";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import Paginate from "../Pagination";
import { useHistory, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';

function useQuery(){
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
     const [currentId, setCurrentId] = useState(0);
     const dispatch = useDispatch();
     const query = useQuery();
     const history = useHistory();
     const page = query.get('page') || 1;
     const searchQuery = query.get('searchQuery');
     useEffect(() => {
       dispatch(getPosts());
     }, [currentId, dispatch]);
    return (
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
                <Paper elevation={6}>
                  <Paginate />
                </Paper>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    );
}
export default Home;