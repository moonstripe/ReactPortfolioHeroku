import React from 'react';

import { Paper, Typography, makeStyles } from "@material-ui/core";
import { Renderer } from './Renderer'

const padding = '15px';

const useStyles = makeStyles(theme => ({
    padding: {
        paddingLeft: padding,
        paddingRight: padding,
        paddingTop: padding,
        paddingBottom: padding,
    }
}));



export const WritingContentEndpoint = (props) => {
    const classes = useStyles();

    return (
        <Paper className={classes.padding}>
            <Typography variant='h4'>{props.title}</Typography>

            <Typography variant='h6' color="textSecondary">{props.description}</Typography>
            <br/>
            <Renderer text={props.body}/>
        </Paper>
    )
}
