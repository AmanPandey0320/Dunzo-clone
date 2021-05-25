import { AppBar, Button, Container, IconButton, Toolbar,Typography } from '@material-ui/core';
import React from 'react';
import Logo from '../assets/images/logo.png';
import useStyles from './styles/navbar';
import LocationBar from './location';
import { Link } from 'react-router-dom';
import { RiShoppingCartLine,RiLoginCircleFill } from 'react-icons/ri';
import Tooltip from './tooltip';

const Navbar = (props) => {
    const classes = useStyles();
    return ( 
        <React.Fragment>
            <AppBar className={classes.appbar} position="fixed">
                <Container className={classes.root} disableGutters={true}>
                    <Toolbar>
                        <img className={classes.image} src={Logo} alt="logo"/>
                        <Tooltip
                         title={
                            <React.Fragment>
                              <Typography color="inherit">Tooltip with HTML</Typography>
                              <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
                              {"It's very engaging. Right?"}
                            </React.Fragment>
                          }
                        >
                            <div style={{width:'140px'}}>
                                <LocationBar/>
                            </div>
                        </Tooltip>
                    </Toolbar>
                    <Toolbar className={classes.actions}>
                        <Link className={`${classes.link} ${classes.smHide}`} to="/partner">
                            Dunzo for Partners
                        </Link>
                        <Link className={`${classes.link} ${classes.smHide}`} to="/delivery-partner" >
                            Need Delivery Partners?
                        </Link>
                        <Link className={classes.link} to="/checkout">
                            <IconButton>
                                <RiShoppingCartLine color="#000000" />
                            </IconButton>
                        </Link>
                        <Link className={classes.link} to="#">
                            <Button className={classes.button} onClick={()=>{alert('signin')}} >
                                <RiLoginCircleFill/>Sign In
                            </Button>
                        </Link>
                    </Toolbar>
                </Container>
            </AppBar>
        </React.Fragment>
     );
}
 
export default Navbar;