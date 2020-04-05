import React from 'react';
import { Typography, Container, makeStyles } from '@material-ui/core';
import StyledBtn from '../components/StyledBtn';
import Appbar from '../components/AppBar';
import { renderRoutes } from 'react-router-config';
import routes from '../routes/routes';

const useStyles = makeStyles( (theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        '& a': {
            textDecoration: 'none',
            marginTop: 30,
        }
    },
    container: {
        padding: theme.spacing(8),
        marginTop: theme.spacing(8),
    },
    optionsWrap: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(8),
        '& a': {
            margin: theme.spacing(2),
            width: '20%'
        }
    }
}))

const FEC = () => {
    const classes = useStyles()
    const userName = '';

    return(
        <div className={classes.root}>
            <Appbar />
            <Container maxWidth="lg" className={classes.container}>
                <Typography variant="h4" align="center">Settings</Typography>
                <div className={classes.optionsWrap}>
                    <StyledBtn className={classes.settingOption} linkPath="/account_center" btnTitle="Account Center" btnText="Manage your account for your partner and customers." />
                </div>
            </Container>
        </div>
    )
}

export default FEC;