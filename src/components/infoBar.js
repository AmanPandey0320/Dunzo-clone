import React from 'react';
import useStyles from './styles/infoBar';
import phone from '../assets/images/app.png';
import android from '../assets/images/android.svg';
import apple from '../assets/images/apple.svg';
import { Container } from '@material-ui/core';

const Infobar = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
            <Container className={classes.innerRoot}>
                <img className={classes.image} src={phone} alt="phone"/>
                <div className={classes.sideDiv} >
                    <p className={classes.sideText}>
                        All this from the convenience of your phone.<br/>
                        Download the Dunzo mobile app.<br/><br/>
                        <span>
                            <img className={classes.storeIcons} src={android} alt="android"/>
                            <img className={classes.storeIcons} src={apple} alt="apple"/>
                        </span>
                    </p>
                </div>
            </Container>
        </div>
     );
}
 
export default Infobar;