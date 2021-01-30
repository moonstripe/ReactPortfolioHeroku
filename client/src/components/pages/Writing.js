import React, {useEffect, useState} from 'react';
import {Box, Grid, makeStyles, Typography} from "@material-ui/core";
import {WritingContentCard} from "../utils/contentCard";
import {Switch, Route, Link, useLocation} from "react-router-dom";
import {WritingContentEndpoint} from "../utils/ContentEndpoint";
import axios from "axios";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    card: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export const Writing = () => {

    const [pieces, setPieces] = useState([]);
    let location = useLocation();

    console.log(location);

    const renderPieces = (arr) => {
        return (
            arr.map((el) => (
                    <Grid item xs={12} md={12}>
                        <Box className={classes.card}>
                            <WritingContentCard
                                title={el.title}
                                description={el.description}
                                body={el.body}
                                demourl={'/writing/' + el.title.replace(/\s/g, '').toLowerCase()}
                            />
                        </Box>
                    </Grid>
                )
            )
        )
    }

    const renderContent = (arr) => {
        return (
            arr.map((el) => (
                    <Route path={'/writing/' + el.title.replace(/\s/g, '').toLowerCase()}>
                        <Grid item xs={12} md={12}>
                            <WritingContentEndpoint
                                title={el.title}
                                description={el.description}
                                body={el.body}
                                />
                        </Grid>
                    </Route>
                )
            )
        )
    }


    const pullWriting = async () => {

        try {
            const res = await axios.get('/api/writing/');
            return res.data
        } catch (e) {
            console.log(e);
            throw new Error(e);
        }
    }

    useEffect(() => {
        pullWriting()
            .then(result => {
                console.log('writing:', result)
                setPieces(result);
            })
    }, [])


    const classes = useStyles();

    return (
        <Box className={classes.root}>

            <Grid container>
                <Grid item xs={3}></Grid>
                <Grid container xs={7}>
                    <Grid item xs={12}>
                        <Link to='/writing' style={{color: 'inherit', textDecoration: 'inherit'}}>
                            <Typography variant="h4" gutterBottom>Writing</Typography>
                        </Link>
                    </Grid>
                    <Grid container xs={12}>
                        <Switch>
                            <Route exact path='/writing'>
                                {
                                    pieces ? (
                                        renderPieces(pieces)
                                    ) : null
                                }
                            </Route>

                            {
                                pieces ? renderContent(pieces) : null
                            }
                        </Switch>

                    </Grid>

                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        </Box>
    )
};
