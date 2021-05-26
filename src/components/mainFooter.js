import { Container,Grid } from '@material-ui/core';
import React from 'react';
import useStyles from './styles/mainFooter';
import driver from '../assets/images/driver.png';
import icon from '../assets/images/icon.png';
import { footerList } from '../assets/data/scroller'
import  { useHistory } from 'react-router-dom'

const MainFooter = (props) => {
    const classes = useStyles();
    const { cities,dunzo,getTouch } = footerList;
    const history = useHistory();
    return ( 
        <div className={classes.root} >
            <Container className={classes.innerRoot}>
                <p className={classes.pBold}>You can’t stop time, but you can save it!</p>
                <p className={classes.pRegg}>Living in the city, there is never enough time to shop for groceries, pick-up supplies, grab food and wade through traffic on the way back home. How about we take care of all of the above for you? What if we can give you all that time back? Send packages across the city and get everything from food, groceries, medicines and pet supplies delivered right to your doorstep. From any store to your door, just make a list and we’ll make it disappear. Just Dunzo It!</p><br/><br/>
                <hr className={classes.hr} />
                <br/><br/>
                <div className={classes.pBottom}>
                    <div className={classes.divLeft}>
                        <img className={classes.image} src={icon} alt="company icon"/>
                    </div>
                    <div className={classes.divCenter}>
                        <div className={classes.dunzo}>
                            <p>DUNZO</p>
                            <Grid container className={classes.inner}>
                                {
                                    dunzo.map((element,index) => {
                                        return(
                                            <Grid xs={4} lg={12} sm={12} item className={classes.item}>{element.text}</Grid>
                                        );
                                    })
                                }
                            </Grid>
                        </div>
                        <div className={classes.cities}>
                            <p>SERVICEABLE CITIES</p>
                            <Grid container className={classes.inner}>
                                {
                                    cities.map((element,index) => {
                                        return(
                                            <Grid onClick={e => history.push(element.path)} xs={4} lg={12}sm={12} item className={classes.item}>{element.text}</Grid>
                                        );
                                    })
                                }
                            </Grid>
                        </div>
                        <div className={classes.getTouch}>
                            <p>GET IN TOUCH</p>
                            <Grid container className={classes.inner}>
                                {
                                    getTouch.map((element,index) => {
                                        return(
                                            <Grid xs={4} lg={12} sm={12} item className={classes.item}>{element.text}</Grid>
                                        );
                                    })
                                }
                            </Grid>
                        </div>
                    </div>
                    <div className={classes.divRight}>
                        <img className={classes.image2} src={driver} alt="delivery boy"/>
                    </div>
                </div>
            </Container>
        </div>
     );
}
 
export default MainFooter;