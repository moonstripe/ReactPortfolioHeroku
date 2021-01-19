import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MainAppBar from "./components/utils/AppBar";
import MainDrawer from "./components/utils/Drawer";

import Toolbar from '@material-ui/core/Toolbar';
import {makeStyles} from "@material-ui/core";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import {Writing, Coding, Learning, WrappedContact, About} from './components/pages/';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    // appBar: {
    //     flexGrow: 1,
    //     zIndex: theme.zIndex.drawer + 1,
    // },
    content: {
        marginLeft: 'calc(100vw/5 + 240px)'
    },
}));


function App() {
    const classes = useStyles();

    return (
        <Router>
            <div className={classes.root}>
                <CssBaseline/>
                <MainAppBar/>
                <MainDrawer/>


            </div>
            <main className={classes.content}>
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
