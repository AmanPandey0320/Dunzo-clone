import { Container } from '@material-ui/core';
import React from 'react';
import useStyles from './styles/body';

const BodyWrapper = ({children, ...props}) => {
    const classes = useStyles();
    return ( 
        <div>
            <Container className={classes.root}>
                {children}
            </Container>
        </div>
     );
}
 
export default BodyWrapper;