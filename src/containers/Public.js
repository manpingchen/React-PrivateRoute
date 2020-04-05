import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import StyledBtn from '../components/StyledBtn'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        flexDirection: 'column',
        '& a': {
            textDecoration: 'none',
            marginTop: 30,
        }
    }
})

const Public = () => {
    const classes = useStyles()
         
    return(
        <div className={classes.root}>
            <Typography variant="h4">You are not logged in!</Typography>
            <Typography variant="h3">This is a public page.</Typography>
            <StyledBtn linkPath="/login" btnText="Log In" />
        </div>
    )
}

export default Public;