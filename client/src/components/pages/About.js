import React, {useEffect, useLayoutEffect, useState} from 'react';
import MediaQuery from "react-responsive/src/Component";
import {Box, Divider, Grid, Typography, makeStyles, ButtonGroup} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    card: {},
    type: {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        paddingTop: theme.spacing(1),
    },
    button: {
        marginRight: theme.spacing(1),
        marginLeft: theme.spacing(1),
        width: "90%",
        marginBottom: theme.spacing(1)
    }

}));

export const About = () => {
    const [scroll, setScroll] = useState(0)

    const classes = useStyles();


    useLayoutEffect(() => {
        // console.log(window.scrollY)
        const handleScroll = () => {
            console.log(window.scrollY)
            setScroll(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll, {passive: true});
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scroll]);

    return (
        <Box>
            <Grid container>
                <Grid item md={3} xs={2}></Grid>
                {/*DESKTOP*/}
                <MediaQuery minDeviceWidth={1224}>
                    <Grid container md={7} xs={9}>
                        <Grid md={12} style={{height: '21vh'}}/>
                        <Grid md={12}>
                            <Typography variant="h2" secondary>Nice to meet you,</Typography>
                        </Grid>
                        {/*<Grid md={12} style={{height: '14vh'}}/>*/}
                        {/*{*/}
                        {/*    scroll > 0*/}
                        {/*        ? <Grid md={12}>*/}
                        {/*            <Typography variant="h2" secondary style={{ opacity: scroll/100}}>just call me</Typography>*/}
                        {/*            <Typography variant="h1" primary style={{ opacity: (scroll-50)/100}}>Moonstripe.</Typography>*/}
                        {/*        </Grid>*/}

                        {/*        : null*/}

                        {/*}*/}
                        <Grid md={12} style={{height: '35vh'}}/>

                        {
                            scroll > 200
                                ? <Grid md={12}>
                                    <Box>
                                        <Typography variant="h6" align='right' className={classes.card} style={{
                                            color: 'black',
                                            opacity: scroll > 399 ? 1 : ((scroll - 200) / 100) - 0.2
                                        }}>I am a <NavLink to='/coding'
                                                           style={{color: 'black'}}>
                                            web developer</NavLink> working with the MERN stack ...</Typography>
                                        <Card>
                                            <CardMedia image="/CodingAbt.png" style={{
                                                width: 'full',
                                                height: '21vh',
                                                backgroundColor: 'white',
                                                opacity: (scroll - 200) / 100
                                            }}>

                                            </CardMedia>
                                        </Card>

                                    </Box>

                                </Grid>
                                : null

                        }
                        <Grid md={12} style={{height: '7vh'}}/>

                        {
                            scroll > 400
                                ? <Grid md={12}>
                                    <Box>
                                        <Typography variant="h6" align='left' className={classes.card} style={{
                                            color: 'black',
                                            opacity: scroll > 599 ? 1 : ((scroll - 400) / 100) - 0.2
                                        }}>... a <NavLink to='/coding'
                                                          style={{color: 'black'}}>
                                            writer</NavLink> of the little things ...</Typography>
                                        <Card>
                                            <CardMedia image="/WritingAbt.png" style={{
                                                width: 'full',
                                                height: '21vh',
                                                backgroundColor: 'white',
                                                opacity: (scroll - 400) / 100
                                            }}>

                                            </CardMedia>
                                        </Card>

                                    </Box>

                                </Grid>
                                : null

                        }
                        <Grid md={12} style={{height: '7vh'}}/>
                        {
                            scroll > 600
                                ? <Grid md={12}>
                                    <Box>
                                        <Typography variant="h6" align='right' className={classes.card} style={{
                                            color: 'black',
                                            opacity: scroll > 799 ? 1 : ((scroll - 600) / 100) - 0.2
                                        }}>... a <NavLink to='/coding'
                                                          style={{color: 'black'}}>
                                            student</NavLink> of all things techromancy.</Typography>
                                        <Card>
                                            <CardMedia image="/LearningAbt.png" style={{
                                                width: 'full',
                                                height: '21vh',
                                                backgroundColor: 'white',
                                                opacity: (scroll - 600) / 100
                                            }}>

                                            </CardMedia>
                                        </Card>

                                    </Box>

                                </Grid>
                                : null

                        }
                        <Grid md={12} style={{height: '14vh'}}/>
                        {
                            scroll > 800
                                ? <Grid container md={12}>
                                    <Grid md={12}>
                                        <Typography variant="h2" secondary
                                                    style={{opacity: scroll > 999 ? 1 : ((scroll - 800) / 100) - 0.2}}>You can
                                            call me</Typography>
                                        <Typography variant="h1" primary
                                                    style={{opacity: scroll > 999 ? 1 : ((scroll - 800) / 100) - 0.2}}>Moonstripe.</Typography>
                                    </Grid>
                                </Grid>

                                : null

                        }
                        <Grid md={12} style={{height: '7vh'}}/>
                        {
                            scroll > 1000
                                ? <Grid md={12}>
                                    <Typography variant='h6' gutterBottom style={{opacity: scroll > 1199 ? 1 : ((scroll - 1000) / 100) - 0.2}}>Find me on:</Typography>
                                    <Grid container>
                                        <Grid md={4}><Button variant="contained" className={classes.button}
                                                             href="https://github.com/moonstripe11"
                                                             target="_blank" style={{opacity: scroll > 1199 ? 1 : ((scroll - 1000) / 100) - 0.2}}>GitHub</Button></Grid>
                                        <Grid md={4}><Button variant="contained" className={classes.button}
                                                             href="mailto:moonstripe@gmail.com"
                                                             target="_blank" style={{opacity: scroll > 1199 ? 1 : ((scroll - 1000) / 100) - 0.2}}>Email</Button></Grid>
                                        <Grid md={4}><Button variant="contained" className={classes.button}
                                                             href="/contact" style={{opacity: scroll > 1199 ? 1 : ((scroll - 1000) / 100) - 0.2}}>Direct</Button></Grid>

                                    </Grid>
                                </Grid>
                                : null
                        }
                        <Grid md={12} style={{height: '35vh'}}/>
                        <Grid md={12}>
                            <Typography variant={'body2'}>designed from the ground up by moonstripe.</Typography>
                        </Grid>
                    </Grid>

                </MediaQuery>

                {/*MOBILE*/}
                <MediaQuery maxDeviceWidth={1224}>
                    <Grid container md={7} xs={9}>
                        <Grid md={12} style={{height: '21vh'}}/>
                        <Grid md={12}>
                            <Typography variant="h2" secondary>Nice to meet you,</Typography>
                        </Grid>
                        {/*<Grid md={12} style={{height: '14vh'}}/>*/}
                        {/*{*/}
                        {/*    scroll > 0*/}
                        {/*        ? <Grid md={12}>*/}
                        {/*            <Typography variant="h2" secondary style={{ opacity: scroll/100}}>just call me</Typography>*/}
                        {/*            <Typography variant="h1" primary style={{ opacity: (scroll-50)/100}}>Moonstripe.</Typography>*/}
                        {/*        </Grid>*/}

                        {/*        : null*/}

                        {/*}*/}
                        <Grid md={12} style={{height: '35vh'}}/>

                        {
                            scroll > 200
                                ? <Grid md={12}>
                                    <Box>
                                        <Typography variant="h6" align='right' className={classes.card} style={{
                                            color: 'black',
                                            opacity: scroll > 399 ? 1 : ((scroll - 200) / 100) - 0.2
                                        }}>I am a <NavLink to='/coding'
                                                           style={{color: 'black'}}>
                                            web developer</NavLink> working with the MERN stack ...</Typography>
                                        <Card>
                                            <CardMedia image="/CodingAbt.png" style={{
                                                width: 'full',
                                                height: '21vh',
                                                backgroundColor: 'white',
                                                opacity: (scroll - 200) / 100
                                            }}>

                                            </CardMedia>
                                        </Card>

                                    </Box>

                                </Grid>
                                : null

                        }
                        <Grid md={12} style={{height: '7vh'}}/>

                        {
                            scroll > 400
                                ? <Grid md={12}>
                                    <Box>
                                        <Typography variant="h6" align='left' className={classes.card} style={{
                                            color: 'black',
                                            opacity: scroll > 599 ? 1 : ((scroll - 400) / 100) - 0.2
                                        }}>... a <NavLink to='/coding'
                                                          style={{color: 'black'}}>
                                            writer</NavLink> of the little things ...</Typography>
                                        <Card>
                                            <CardMedia image="/WritingAbt.png" style={{
                                                width: 'full',
                                                height: '21vh',
                                                backgroundColor: 'white',
                                                opacity: (scroll - 400) / 100
                                            }}>

                                            </CardMedia>
                                        </Card>

                                    </Box>

                                </Grid>
                                : null

                        }
                        <Grid md={12} style={{height: '7vh'}}/>
                        {
                            scroll > 600
                                ? <Grid md={12}>
                                    <Box>
                                        <Typography variant="h6" align='right' className={classes.card} style={{
                                            color: 'black',
                                            opacity: scroll > 799 ? 1 : ((scroll - 600) / 100) - 0.2
                                        }}>... a <NavLink to='/coding'
                                                          style={{color: 'black'}}>
                                            student</NavLink> of all things techromancy.</Typography>
                                        <Card>
                                            <CardMedia image="/LearningAbt.png" style={{
                                                width: 'full',
                                                height: '21vh',
                                                backgroundColor: 'white',
                                                opacity: (scroll - 600) / 100
                                            }}>

                                            </CardMedia>
                                        </Card>

                                    </Box>

                                </Grid>
                                : null

                        }
                        {
                            scroll > 1000
                                ? <Grid container md={12}>
                                    <Grid md={12}>
                                        <Grid md={12} style={{height: '14vh'}}/>
                                        <Typography variant="h6" secondary
                                                    style={{opacity: scroll > 1099 ? 1 : ((scroll - 1000) / 100) - 0.2}}>You can
                                            call me</Typography>
                                        <Grid md={12} style={{height: '3.5vh'}}/>
                                        <Typography variant="h3" primary
                                                    style={{opacity: scroll > 1099 ? 1 : ((scroll - 1000) / 100) - 0.2}}>Moonstripe.</Typography>
                                    </Grid>
                                    <Grid md={12} style={{height: '28vh'}}/>
                                </Grid>

                                : <Grid md={12} style={{height: '28vh'}}/>

                        }
                        {
                            scroll > 1000
                                ? <Grid md={12}>
                                    <Typography variant='h6' gutterBottom style={{opacity: scroll > 1199 ? 1 : ((scroll - 1000) / 100) - 0.2}}>Find me on:</Typography>
                                    <Grid container>
                                        <Grid xs={12}><Button variant="contained" className={classes.button}
                                                             href="https://github.com/moonstripe11"
                                                             target="_blank" style={{opacity: scroll > 1199 ? 1 : ((scroll - 1000) / 100) - 0.2}}>GitHub</Button></Grid>
                                        <Grid xs={12}><Button variant="contained" className={classes.button}
                                                             href="mailto:moonstripe@gmail.com"
                                                             target="_blank" style={{opacity: scroll > 1199 ? 1 : ((scroll - 1000) / 100) - 0.2}}>Email</Button></Grid>
                                        <Grid xs={12}><Button variant="contained" className={classes.button}
                                                             href="/contact" style={{opacity: scroll > 1199 ? 1 : ((scroll - 1000) / 100) - 0.2}}>Direct</Button></Grid>

                                    </Grid>
                                </Grid>
                                : null
                        }
                        <Grid md={12} style={{height: '35vh'}}/>
                        {
                            scroll < 3 ? <Grid md={12}>
                                <Typography variant={'body2'}>designed from the ground up by moonstripe.</Typography>
                            </Grid> : null
                        }
                    </Grid>

                </MediaQuery>
                <Grid item md={2} xs={1}></Grid>
            </Grid>
        </Box>
    )
};
