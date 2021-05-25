import { AppBar, Button, Container, IconButton, Menu, MenuList, Toolbar,Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Logo from '../assets/images/logo.png';
import useStyles from './styles/navbar';
import LocationBar from './location';
import { Link } from 'react-router-dom';
import { RiShoppingCartLine,RiLoginCircleFill } from 'react-icons/ri';
import  { BsThreeDotsVertical } from 'react-icons/bs';
import Tooltip from './tooltip';

const Navbar = (props) => {
    const classes = useStyles();
    const [menu,setMenu] = useState(false);
    const [anchor,setAnchor] = useState(null);
    const handleMenu = (open) => (e) => {
        if(menu === false){
            setAnchor(e.currentTarget);
        }else{
            setAnchor(null);
        }
        setMenu(open);
    }
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
                        <Link className={`${classes.link} ${classes.smHide}`} to="#">
                            <Button className={classes.button} onClick={()=>{alert('signin')}} >
                                <RiLoginCircleFill/>Sign In
                            </Button>
                        </Link>
                        <Link className={`${classes.link} ${classes.mdHide}`}>
                          <IconButton onClick={handleMenu(!menu)} >
                              <BsThreeDotsVertical color="#000000"/>
                              <Menu
                                className={classes.mdHide}
                                id="mobile menu"
                                open={menu}
                                anchorEl={anchor}
                                onClose={handleMenu(false)}
                                keepMounted
                              >
                                  <MenuList onClick={()=>{alert('signin')}}>
                                      <Link className={classes.link} to="#">
                                        Sign In to Dunzo
                                      </Link>
                                  </MenuList>
                                  <MenuList>
                                      <Link className={classes.link} to="/partner">
                                        Dunzo for Partners
                                      </Link>
                                  </MenuList>
                                  <MenuList>
                                      <Link className={classes.link} to="/delivery-partner">
                                        Need Delivery Partners?
                                      </Link>
                                  </MenuList>
                              </Menu>
                          </IconButton>
                        </Link>
                    </Toolbar>
                </Container>
            </AppBar>
        </React.Fragment>
     );
}
 
export default Navbar;