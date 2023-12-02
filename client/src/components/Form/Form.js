import React from "react";
import {TextField, Button, Typography, Paper} from '@material-ui/core';
import useStyles from "./styles.js";

const Form = () => {
    const classes = useStyles();
    const handleSubmit = () => {

    };
    return (
        <Paper className={classes.paper}>
            <Form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>

            </Form>
        </Paper>
    );
}

export default Form;