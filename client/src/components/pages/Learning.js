import React from 'react';
import {Box, Grid, Typography} from "@material-ui/core";

export const Learning = () => {

    return (
        <Box>
            <Grid container>
                <Grid item xs={3}></Grid>
                <Grid container xs={7}>
                <Grid xs={12}>
                    <Typography variant="h4" gutterBottom>Learning</Typography>
                </Grid>
                <Grid xs={12}>
                    <Typography variant="body1">Stay tuned for updates on IoT projects, woodworking, and sustainable energy harvesting!</Typography>
                </Grid>
                </Grid>

            </Grid>
        </Box>
    )
};
