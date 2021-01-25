import React from 'react';
import { miniRenderer } from "./Renderer";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    coding: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '65vh',
    },
    writing: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 'auto',
    },
    media: {
        height: "140px",
    },
    actions: {
        justifyContent: "bottom",
        zIndex: 2
    }
});

export const CodingContentCard = ( props ) => {
    const classes = useStyles();

    return (
        <Card className={classes.coding}>
            <CardActionArea href={props.demourl} target={'_blank'}>
                <CardMedia
                    className={classes.media}
                    image={props.imgsrc}
                    title={props.title}
                />
                <CardContent align='left'>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.actions}>
                <Button size="small" color="primary" href={props.demourl} target={'_blank'}>
                    Project Demo
                </Button>
                <Button size="small" color="primary" href={props.githuburl} target={'_blank'}>
                    GitHub Repo
                </Button>
            </CardActions>
        </Card>
    );
}

export const WritingContentCard = ( props ) => {
    const classes = useStyles();

    return (
        <Card className={classes.writing}>
            <CardActionArea href={props.demourl}>
                <CardContent align={'left'}>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {props.description}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {props.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
