import React, { useContext } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Badge, Menu, MenuItem, List, ListItem, ListItemText, InputBase } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HelpOutline from '@material-ui/icons/HelpOutline';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import logo from '../assets/images/logo.png';
import { AuthContext } from '../auth/Auth';


const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
    width: '100%',
    '& header': {
        zIndex: '999',
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    // display: 'none',
    flexGrow: 1,
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    '& span': {
        paddingLeft: 10,
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
    }
  },
  logo: {
    width: 70,
  },
  rightSection:{
    display: 'flex',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    border: '1px solid #ddd',
    borderRadius: 4,
    top: 6,
    position: 'relative',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  menuList: {
    top: '40px !important',
  }
}));

const Appbar = () => {

  const classes = useStyles();

  //This is for the position of renderMenu and renderNotiMenu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorNotiEl, setAnchorNotiEl] = React.useState(null);

  const { logout } = useContext(AuthContext)  

  const isMenuOpen = Boolean(anchorEl);
  const isMenuNotiOpen = Boolean(anchorNotiEl);

  //The items of notification
  const notiItems = [
    {
      Group: `Group North `,
      Device_SN: `Device PP125xxxx0001 `,
      Company: 'AKAM',
      Service: '',
      Date: '2020/07/16 12:45'
    },
    {
      Group: `Group South `,
      Device_SN: `Device XP125xxxx0001 `,
      Company: 'FEC Spain',
      Service: '',
      Date: '2020/07/16 12:45'
    }
  ]
  

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationMenuOpen = event => {
    setAnchorNotiEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNotiMenuClose = () => {
    setAnchorNotiEl(null);
  };


  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      className={classes.menuList}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={logout}>Log Out</MenuItem>
    </Menu>
  );

  const renderNotiMenu = (
    <Menu
      anchorEl={anchorNotiEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      className={classes.menuList}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuNotiOpen}
      onClose={handleNotiMenuClose}
    >
        <List>
          {notiItems.map( (notiItem, index) => {
              return(
              <ListItem alignItems="flex-start" button onClick={handleMenuClose} key={index}>
                <ListItemText>
                  <Typography variant="body2">{notiItem.Device_SN} is already assigned to {notiItem.Company}.</Typography>
                  <Typography variant="caption" color="textSecondary">{notiItem.Date}</Typography>
                </ListItemText>
              </ListItem>
              )
          })}
        </List>
    </Menu>
  );

  
  return (
    <div className={classes.grow}>
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <div className={classes.title}>
          <img src={logo} alt='logo' className={classes.logo} /> 
            <Typography variant="caption" color="secondary">Platform</Typography>
          </div>
          <div className={classes.rightSection}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
            <IconButton 
                aria-label="Q&A" 
                color="inherit"
              >
                <Badge color="error">
                  <HelpOutline />
                </Badge>
            </IconButton>
            <IconButton 
              aria-label="Notifications" 
              color="inherit"
              onClick={handleNotificationMenuOpen}
            >
              <Badge variant="dot" color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="User"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
      {renderNotiMenu}
    </div>
  );
}


export default Appbar;