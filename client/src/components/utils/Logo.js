import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, SvgIcon, Icon} from "@material-ui/core";
import {NightsStayOutlined} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
    moonButton: {
        marginRight: theme.spacing(1)
        //    icon styles
    },
    root: {
        '& > svg': {
            margin: theme.spacing(2),
        },
    }

}))

const Moonstripe = (props) => {

    return (
        <Icon {...props} style={{ width: "200px", height: "auto"}}>
            <img src='/moonstripe-logo-2.svg'/>
        </Icon>
    );
}

const Logo = () => {
    const classes = useStyles();

    return (
        <div
            style={{
                display: 'inline-flex',
            }}
        >
            <Typography variant="h4" color='textPrimary'>moonstripe</Typography>
        </div>
    )
}

export default Moonstripe;
