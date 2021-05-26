import React from 'react';
import {MdLocationOn} from 'react-icons/md';
import useStyles from './styles/location';
import { Theme } from '../assets/data/theme'
import { Typography } from '@material-ui/core';
import { IoIosArrowDown } from 'react-icons/io';

const Location = (props) => {
    const classes = useStyles();
    const {uiHandler} = props;
    return ( 
        <div onClick={uiHandler({type:'TOGGLE_LOCATION',data:true})} className={classes.root}>
            <div><MdLocationOn size="1.3em" color={Theme.main.icon}/></div>
            <div ><Typography className={classes.typography}>Set Location&nbsp;</Typography></div>
            <div><span style={{paddingTop:'5%'}}><IoIosArrowDown color={Theme.main.body}/></span></div>
        </div>
    );
}
 
export default Location;