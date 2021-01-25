import React from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {NavLink} from 'react-router-dom'
import Logo from "./Logo";
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
}));

export default function MainAppBar() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawer = () => {
        open ? setOpen(false):setOpen(true);
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
                        <NightsStayOutlined style={{fill: 'black'}}/>
                    </IconButton>
                    <Logo/>
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
                            <NavLink to='/coding' style={{textDecoration: 'none'}} component={Button}>
                                <ListItemIcon><CodeOutlined/></ListItemIcon>
                                <ListItemText primary="Code"/>
                            </NavLink>
                        </ListItem>
                        <ListItem key="Writing">
                            <NavLink to='/writing' style={{textDecoration: 'none'}} component={Button}>
                                <ListItemIcon><CreateOutlined/></ListItemIcon>
                                <ListItemText primary="Write" style={{textDecoration: 'none'}}/>
                            </NavLink>
                        </ListItem>
                        <ListItem key="Learning">
                            <NavLink to='/learning' style={{textDecoration: 'none'}} component={Button}>
                                <ListItemIcon><SearchOutlined/></ListItemIcon>
                                <ListItemText primary="Learn"/>
                            </NavLink>
                        </ListItem>
                    </List>
                    <Divider/>
                    <List>
                        <ListItem button key="About">
                            <NavLink to='/about' style={{textDecoration: 'none'}} component={Button}>
                                <ListItemIcon><PersonOutlineOutlined/></ListItemIcon>
                                <ListItemText primary="About"/>
                            </NavLink>
                        </ListItem>
                        <ListItem button key="Contact">
                            <NavLink to='/contact' style={{textDecoration: 'none'}} component={Button}>
                                <ListItemIcon><SendOutlined/></ListItemIcon>
                                <ListItemText primary="Contact"/>
                            </NavLink>
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </div>
    );
}
