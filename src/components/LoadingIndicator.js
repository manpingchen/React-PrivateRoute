import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles( () => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
    }
}))

const LoadingIndicator = () => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <CircularProgress />
        </div>
    )
}

export default LoadingIndicator;