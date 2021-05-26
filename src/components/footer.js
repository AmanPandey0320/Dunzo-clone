import React from 'react';
import useStyles from './styles/footer';

const FooterWrapper = ({children,...props}) => {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
            {children}
        </div>
     );
}
 
export default FooterWrapper;