import React from 'react';
import clsx from "clsx";
import CssBaseline from '@material-ui/core/CssBaseline';
import MainAppBar from "./components/utils/AppBar";
import MainDrawer from "./components/utils/Drawer";

import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from "@material-ui/core";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import {Writing, Coding, Learning, WrappedContact, About} from './components/pages/';
const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    // appBar: {
    //     flexGrow: 1,
    //     zIndex: theme.zIndex.drawer + 1,
    // },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));


function App() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    return (
        <Router>
            <div className={classes.root}>
                <CssBaseline/>
                <MainAppBar/>


            </div>
            <main className={clsx(classes.content, {
                [classes.contentShift]: open,
            })}>
                <div className={classes.drawerHeader} />
                <Switch>
                    <Route path="/coding">
                        <Coding/>
                    </Route>
                    <Route path="/writing">
                        <Writing/>
                    </Route>
                    <Route path="/learning">
                        <Learning/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/contact">
                        <WrappedContact/>
                    </Route>
                </Switch>
            </main>
        </Router>
        //    AppBar, Drawer, Main Content
    );
}

export default App;
