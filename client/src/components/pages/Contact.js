import React from 'react';
import axios from 'axios';
import {reduxForm, Field} from 'redux-form';
import TextField from '@material-ui/core/TextField';
import {Typography, Box, Grid, makeStyles} from "@material-ui/core";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    field: {
        width: 'full',
    },
    butt: {
        marginTop: '15px'
    }
}))

const Contact = (props) => {

    const TextFieldInput = ({input, meta, label}) => {
        // console.log('FIELD COMPONENT PROPS', props);
        return <TextField
            {...input}
            label={label}
        />;
    };
    const LongTextFieldInput = ({input, meta, label}) => {
        // console.log('FIELD COMPONENT PROPS', props);
        return <TextField
            {...input}
            label={label}
            multiline
            rows={4}
        />;
    };

    const {handleSubmit, history} = props;

    // console.log(props);
    const handleContact = async (formValues, dispatch) => {
        console.log(formValues);

        try {
            const res = await axios.post('/api/contact', formValues);
            console.log(res);
            // history.push('/');
        } catch (e) {
            console.log(e);
            throw new Error(e);
        }
    }

    const classes = useStyles();

    return (
        <Box className={classes.root}>

            <Grid container>
                <Grid item xs={3}></Grid>
                <Grid container xs={7}>
                    <Grid item xs={12}>
                        <Typography variant="h4" gutterBottom>Contact</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='body1'>Leave your comments here:</Typography>
                        <form noValidate autoComplete="off" >
                            <Grid container>
                                <Grid item xs={12}>
                                    <Field
                                        className={classes.field}
                                        name='email'
                                        label='email'
                                        component={TextFieldInput}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        className={classes.field}
                                        name='name'
                                        label='name'
                                        component={TextFieldInput}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        className={classes.field}
                                        name='message'
                                        label='message'
                                        component={LongTextFieldInput}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        onClick={handleSubmit(handleContact)}
                                        variant="contained"
                                        color="primary"
                                        className={classes.butt}
                                    >
                                        Send Contact
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>

                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>

        </Box>
)
};


export const WrappedContact = reduxForm({form: 'signInForm'})(Contact);
