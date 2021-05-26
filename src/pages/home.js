import React, { useState } from 'react';
import Navbar from '../components/navbar';
import { HomeWrapper } from '../styles/home';
import BodyWrapper from '../components/body';
import { Breadcrumbs, Typography } from '@material-ui/core';
import useStyles from '../styles/home';
import { Link,useParams } from 'react-router-dom';
import { TiArrowRightThick } from 'react-icons/ti';
import Grid ,{ SmallGrid }from '../components/Grid';
import { mainScroll,daily,topPicks } from '../assets/data/scroller';
import { cityList } from '../assets/data/cityList'
import FooterWrapper from '../components/footer';
import Infobar from '../components/infoBar';
import DeliverArea from '../components/area';
import MainFooter from '../components/mainFooter';

const Home = (props) => {

    const classes = useStyles();
    const params = useParams();
    const [city,setCity] = useState(params.id);
    const [bread,setBread] = useState(['Home',cityList[city].name]);

    return(
        <HomeWrapper>
            <Navbar/>
            <BodyWrapper>
                <br/>
                <Breadcrumbs
                    separator={<TiArrowRightThick/>}
                >
                    {
                        bread.map((element,index) => <Link key={index} className={classes.breadLink} to="/">{element}</Link>)
                    }
                </Breadcrumbs>
                <br/>
                <Typography className={classes.header1} >{bread[bread.length - 1]}</Typography>
                <p className={classes.para}>
                    Why step out when you can get everything delivered home with the tap of a button? Bangalore’s favourite delivery app gets you Food, Grocery, Medicine, Pet Supplies, Fruits & Vegetables, Meat & Fish, Health & Wellness, Gifts and Send Packages from one end of the city to the other. From your local kirana stores to your favourite brands, grocery shopping to your forgotten charger, we are always on the move for you. Why worry about your chores, when you can get it all Dun!
                </p>
                <br/>
                <Grid big={true} items={mainScroll}/>
                <br/>
                <SmallGrid items={daily}/>
                <br/><br/><br/><br/>
                <Typography className={classes.header1} >Top picks for you</Typography>
                <br/>
                <Grid big={true} items={topPicks}/>
                <br/>
            </BodyWrapper>
            <FooterWrapper>
                <Infobar/>
                <DeliverArea city={params.id}/>
                <MainFooter/>
            </FooterWrapper>
        </HomeWrapper>
    );
}

export default Home;