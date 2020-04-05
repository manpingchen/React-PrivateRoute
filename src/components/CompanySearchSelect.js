/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import * as localforage from 'localforage';

const useStyles = makeStyles({
    popupIndicatorOpen: {
        display: 'none'
    },
    popupIndicator: {
        display: 'none'
    },
    searchInput: {
        position: 'relative',
        maxWidth: 600,
        minWidth: 200,
        width: '40vw !important',
        marginBottom: 36,
    },
    searchIcon: {
        position: 'absolute',
        top: 15,
        right: 20,
    },
    clearIndicator: {
        right: 46
    }
})


const SearchSelect = () => {
    const classes = useStyles()
    const [ company, setCompany ] = useState();

    //SetItem to indexDB by LocalForage when the state of company is changed
    useEffect(() => {
        localforage.setItem('company', company)
    },[company])

    return (
        <Autocomplete
        id="search-select-company"
        classes={{
            popupIndicatorOpen: classes.popupIndicatorOpen,
            popupIndicator: classes.popupIndicator,
            clearIndicator: classes.clearIndicator
        }}
        options={companys}
        getOptionLabel={option => option.title}
        onInputChange={(event, value) => setCompany(value)}
        style={{ width: 300 }}
        renderInput={params => 
            <div className={classes.searchInput}>
                <TextField {...params} label="Search..." variant="outlined" />
                <SearchIcon className={classes.searchIcon} color='action' />
            </div>
        }
        />
    );
}

export default SearchSelect;

//Company List
const companys = [
    { title: 'FEC HQ', location: 'Taiwan' },
    { title: 'AKAM', location: 'Netherlands' },
    { title: 'FEC Spain', location: 'Spain' },
    { title: 'FEC Italy', location: 'Italy' },
    { title: 'FEC China', location: 'China' },
    { title: 'FEC USA', location: 'USA' },
    { title: "FEC Germany", location: 'Germany' },
    { title: 'FEC UK', location: 'UK' },
    { title: 'FEC Korea', location: 'Korea' },
    { title: "FEC Sydney", location: 'Sydney' },
    { title: 'FEC Canada', location: 'Canada' },
    { title: 'FEC Australia', location: 'Australia' },
    { title: "FEC Thailand", location: 'Thailand' },
];
