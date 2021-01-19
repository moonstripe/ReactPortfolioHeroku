import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import { NightsStayOutlined } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
    moonButton: {
        marginRight: theme.spacing(1)
        //    icon styles
    },
}))

const Logo = () => {
    const classes = useStyles();

    return (
        <div
            style={{
                display: 'inline-flex',
                AlignItems: 'center'
            }}
        >
            <IconButton edge="start" color="inherit" aria-label="menu" className={classes.moonButton}>
                <NightsStayOutlined style={{fill: 'black'}}/>
            </IconButton>
            <Typography variant="h4" color='textPrimary'>moonstripe</Typography>
        </div>
    )
}

export default Logo;
