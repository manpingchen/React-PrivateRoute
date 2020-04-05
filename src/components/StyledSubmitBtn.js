import React from 'react';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    btn: {
        width: 300,
        lineHeight: '3em',
        '&:hover': {
            background: '#4153fb',
            color: '#fff',
        }
    }
})

const StyledSubmitBtn = props => {

    const classes = useStyles()

    return(
        <Button variant="contained" type="submit" color="primary" className={classes.btn} href={props.linkpath} >
            {props.btnText}
        </Button>
    )
}


export default StyledSubmitBtn;