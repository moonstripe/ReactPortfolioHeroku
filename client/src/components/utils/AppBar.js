import React from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {NavLink} from 'react-router-dom'
import Moonstripe from "./Logo";
import {
    CodeOutlined,
    CreateOutlined,
    NightsStayOutlined,
    PersonOutlineOutlined,
    SearchOutlined, SendOutlined,
    ChevronLeft, ChevronRight

} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {Button, CssBaseline} from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";

const drawerWidth = 0;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        backgroundColor: '#dfe3d3',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    hide: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    moonButton: {
        marginRight: theme.spacing(2),
        borderRadius: 0,
        paddingLeft: "30px",
        marginLeft: "-30px"
    },
    drawerPaper: {
        paddingRight: theme.spacing(3),
    },
    drawerContainer: {
        overflow: 'auto',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    navlink: {
        font: "PT Mono"
    },
}));

export default function MainAppBar() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawer = () => {
        open ? setOpen(false) : setOpen(true);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div className={classes.root}>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <CssBaseline/>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawer}
                        edge="start"
                        className={classes.moonButton}>
                        <Moonstripe/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar/>
                <div className={classes.drawerContainer}>
                    <List>
                        <ListItem key="Coding">
                            <NavLink to='/coding' component={Button}>
                                <ListItemIcon><CodeOutlined/></ListItemIcon>
                                <ListItemText className={classes.navlink} primary="Code"/>
                            </NavLink>
                        </ListItem>
                        <ListItem key="Writing">
                            <NavLink to='/writing' component={Button}>
                                <ListItemIcon><CreateOutlined/></ListItemIcon>
                                <ListItemText className={classes.navlink} primary="Write"/>
                            </NavLink>
                        </ListItem>
                        <ListItem key="Learning">
                            <NavLink to='/learning' component={Button}>
                                <ListItemIcon><SearchOutlined/></ListItemIcon>
                                <ListItemText className={classes.navlink} primary="Learn"/>
                            </NavLink>
                        </ListItem>
                    </List>
                    <Divider/>
                    <List>
                        <ListItem button key="Home">
                            <NavLink to='/' component={Button}>
                                <ListItemIcon><PersonOutlineOutlined/></ListItemIcon>
                                <ListItemText className={classes.navlink} primary="About"/>
                            </NavLink>
                        </ListItem>
                        <ListItem button key="Contact">
                            <NavLink to='/contact' component={Button}>
                                <ListItemIcon><SendOutlined/></ListItemIcon>
                                <ListItemText className={classes.navlink} primary="Contact"/>
                            </NavLink>
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </div>
    );
}
