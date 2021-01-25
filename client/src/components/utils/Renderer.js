import {Box, Typography} from "@material-ui/core";
import { Brightness1Outlined, Brightness2Outlined, Brightness3Outlined } from "@material-ui/icons";
import React from "react";

export const Renderer = (props) => {

    // console.log('renderer:',props);

    return (
        <Box>
            {props.text.split('\n\n').map(para =>
                <Typography paragraph>
                    {para.split('\n').reduce((total, line) => [total, <Brightness2Outlined gutterBottom style={{ marginLeft: "25vw", marginBottom: "15px",display: 'block', alignSelf: 'center'}}/>, line])}
                </Typography>
            )}
        </Box>
    )
}


export const miniRenderer = (props) => {

    console.log('renderer:', props);

    return (
        <Box>
            {props.text.split('\n\n').map(para =>
                <Typography paragraph>
                    {para}
                </Typography>
            )[0]}
        </Box>
    )
}
