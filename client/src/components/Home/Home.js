import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";
import { Container, Grow, Grid, Paper, AppBar, TextField, Button } from "@material-ui/core";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import Paginate from "../Pagination";
import { useNavigate, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';
import useStyles from './styles';

function useQuery(){
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
     const [currentId, setCurrentId] = useState(0);
     const dispatch = useDispatch();
     const query = useQuery();
     const history = useNavigate();
     const page = query.get('page') || 1;
     const searchQuery = query.get('searchQuery');
     const classes = useStyles();
     const [search, setSearch] = useState('');
     const [tags, setTags] = useState([]);
     useEffect(() => {
       dispatch(getPosts());
     }, [currentId, dispatch]);
     const searchPost = () => {
        if (search.trim()) {
          // dispatch -> fetch search post
        }else {
          history.push('/');
        }
     }
     const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
          searchPost();
        }
     }
     const handleAdd = (tag) => setTags([...tag, tag]);
     const handleDelete = (tagToDelete) =>
       setTags(tags.filter((tag) => tag !== tagToDelete));
    return (
      <Grow in>
        <Container maxWidth="xl">
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
            className={classes.gridContainer}
          >
            <Grid item xs={12} md={9} sm={6}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} md={3} sm={6}>
              <AppBar
                className={classes.appBarSearch}
                position="static"
                color="inherit"
              >
                <TextField 
                name="search" 
                variant="outlined" 
                label="Search Memories" 
                onKeyPress={handleKeyPress}
                fullWidth 
                value={search}
                onChange={(e) => setSearch(e.target.value)}/>
                <ChipInput 
                  style={{ margin: '10px 0'}}
                  value={tags}
                  onAdd={handleAdd}
                  onDelete={handleDelete}
                  label="Search Tags"
                  variant="outlined"
                />
                <Button onClick={searchPost} className={classes.searchButton} color="primary" variant="contained">Search</Button>
              </AppBar>
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