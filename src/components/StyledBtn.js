import React from 'react'; 
import { NavLink } from 'react-router-dom';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles( (theme) => ({
    btn: {
        width: 300,
        lineHeight: '3em',
        borderRadius: 4,
        display: 'block',
        textAlign: 'center',
        boxShadow: '0 0 12px #ddd',
        color: '#000',
        padding: theme.spacing(5),
        height: 300,
    }
}))

const StyledBtn = props => {

    const classes = useStyles()

    return(
            <NavLink to={{pathname: props.linkPath }} className={classes.btn} onClick={props.clickBtn} >
                <Typography variant="h6">{props.btnTitle}</Typography>    
                <Typography variant="body2">{props.btnText}</Typography>  
            </NavLink>
    )
}


export default StyledBtn;