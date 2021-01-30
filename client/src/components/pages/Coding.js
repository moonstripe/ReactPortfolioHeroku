import React from 'react';
import {Box, Grid, Paper, makeStyles, useTheme, Typography} from "@material-ui/core";
import { CodingContentCard } from "../utils/contentCard";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    card: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export const Coding = () => {

    const classes = useStyles();

    return (
        <Box className={classes.root}>

            <Grid container>
                <Grid item xs={3}></Grid>
                <Grid container xs={7}>
                    <Grid item xs={12}>
                        <Typography variant="h4" gutterBottom>Coding</Typography>
                    </Grid>
                    <Grid container xs={12}>
                        <Grid item xs={12} md={4}>
                            <Box className={classes.card}>
                                <CodingContentCard
                                    title={'Koogle Books'}
                                    description={'One of the more interesting homeworks from the UC Berkeley Full-Stack Flex Bootcamp. Allows users to search for and save their favorite books.'}
                                    imgsrc='/projectImages/kooglebooks.png'
                                    demourl='https://kooglebooks.herokuapp.com/'
                                    githuburl='https://github.com/moonstripe11/hw21-googleBooks'
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box className={classes.card}>
                                <CodingContentCard
                                    className={classes.card}
                                    title={'Passify'}
                                    description={'For our second project in the UC Berkeley Full-Stack Flex Bootcamp, we tried our hand at a password manager. Next steps would be to build a chrome extension for easy access and usability.'}
                                    imgsrc='/projectImages/passifylogo.png'
                                    demourl='https://passify-proj2.herokuapp.com/'
                                    githuburl='https://github.com/moonstripe11/passify'
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box className={classes.card}>
                                <CodingContentCard
                                    className={classes.card}
                                    title={'ScriptBot 1902'}
                                    description={'My first Facebook bot project from back in 2018. Written in Python, terribly inefficient, and currently idle, it used to post a basic screenplay scene. The content was generated using very simple Markov Chains.'}
                                    imgsrc=' /projectImages/spb.jpg'
                                    demourl='https://www.facebook.com/ScriptBot1902'
                                    githuburl='https://github.com/moonstripe11/ScriptBot1902'
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box className={classes.card}>
                                <CodingContentCard
                                    className={classes.card}
                                    title={'hmm'}
                                    description={'thonk'}
                                    imgsrc=' /projectImages/comingsoon.png'
                                    demourl='www.facebook.com'
                                    githuburl='www.facebook.com'
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box className={classes.card}>
                                <CodingContentCard
                                    className={classes.card}
                                    title={'hmm'}
                                    description={'thonk'}
                                    imgsrc=' /projectImages/comingsoon.png'
                                    demourl='www.facebook.com'
                                    githuburl='www.facebook.com'
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box className={classes.card}>
                                <CodingContentCard
                                    className={classes.card}
                                    title={'hmm'}
                                    description={'thonk'}
                                    imgsrc=' /projectImages/comingsoon.png'
                                    demourl='www.facebook.com'
                                    githuburl='www.facebook.com'
                                />
                            </Box>
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        </Box>
    )
};

