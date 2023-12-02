import React, {useState} from "react";
import {TextField, Button, Typography, Paper} from '@material-ui/core';
import useStyles from "./styles.js";

const Form = () => {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags:'',
        selectedFile:''
    });
    const classes = useStyles();
    const handleSubmit = () => {

    };
    return (
        <Paper className={classes.paper}>
            <Form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                <Typography variant="h6">Creating a Memory</Typography>
                    <TextField 
                        name="creator" 
                        variant="outlined" 
                        label="Creator" 
                        fullWidth 
                        value={postData.creator} 
                        onChange={
                            (e) => setPostData({
                                ...postData, creator: e.target.value
                            })}
                    />
            </Form>
        </Paper>
    );
}

export default Form;