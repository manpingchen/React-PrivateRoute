import React from 'react';
import { Breadcrumbs, Link, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, Button, Typography, makeStyles } from '@material-ui/core';
import Appbar from '../components/AppBar';
import { HomeOutlined, AddOutlined } from '@material-ui/icons';
import SearchSelect from '../components/CompanySearchSelect';

const drawerWidth = 240;

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
    drawerPaper: {
        width: drawerWidth,
        position: 'fixed',
        top: theme.spacing(8),
        zIndex: '1',
    },
    content: {
        flexGrow: 1,
        boxSizing: 'border-box',
        padding: theme.spacing(8),
        marginTop: theme.spacing(5),
        width: `calc( 100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    titleSection: {
        marginBottom: theme.spacing(8),
        marginTop: theme.spacing(6),
        '& h4': {
            marginBottom: theme.spacing(2),
        },
    },
    searchTitle: {
        marginBottom: theme.spacing(2)
    },
    createCompanyBtn: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
    },
    companyTreeTitle: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
    }
}))

const AccountCenter = () => {
    const classes = useStyles();

    const drawer = (
        <div>
          <div className={classes.toolbar} />
            <List>
                <ListItem button to="/fec">
                    <ListItemIcon><HomeOutlined /></ListItemIcon>
                    <ListItemText>Home</ListItemText>
                </ListItem>
            </List>
            <Divider />
        </div>
      );

    return(
        <div className={classes.root}>
            <Appbar />
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Drawer
                    classes={{
                    paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    {drawer}
                </Drawer>
            </nav>
            <main className={classes.content}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/">
                        <HomeOutlined />
                    </Link>
                    <Typography color="textPrimary">Account Center</Typography>
                </Breadcrumbs>
                <div className={classes.titleSection}>
                    <Typography variant="h4">Account Page</Typography>
                    <Typography>Manage accounts for your customers and your partners</Typography>
                </div>
                <Typography variant="h5" className={classes.searchTitle}>Search Company</Typography>
                <SearchSelect />
                <Divider />
            </main>
        </div>
    )
}

export default AccountCenter;