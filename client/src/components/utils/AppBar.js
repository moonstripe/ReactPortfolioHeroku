import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { NavLink } from 'react-router-dom'
import Logo from "./Logo";

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: '#dfe3d3',
        zIndex: theme.zIndex.drawer + 1,
    },
    title: {
        flexGrow: 1,
    },

    offset: {
        marginLeft: 'calc(100vw/5)'
    }
}));

export default function MainAppBar() {
    const classes = useStyles();

    return (
            <AppBar position="static" className={classes.appBar}>
                <Toolbar className={classes.offset}>
                    <NavLink to='/'  style={{textDecoration: 'none'}}>
                        <Logo/>
                    </NavLink>
                </Toolbar>
            </AppBar>
    );
}
