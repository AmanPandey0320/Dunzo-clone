import React, { useEffect, useState } from 'react';
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
import SigninModal from '../components/signIn';
import SignIn from '../components/signIn_main';

const Home = (props) => {

    const classes = useStyles();
    const params = useParams();
    const [bread,setBread] = useState([]);
    const [paths,setPaths] = useState([]);
    const [location,setLocation] = useState(false);
    const [signin,setSignin] = useState(false)

    const uiHandler = ({type,data}) => (event) => {
        if(type === 'TOGGLE_LOCATION'){
            setLocation(data);
        }
        if(type === 'TOGGLE_SIGNIN'){
            setSignin(data);
        }
    }

    useEffect(()=>{
        const subArea = cityList[params.city].subList.filter(area => area.path === `/${params.id}`);
        setPaths(['/',`/city/${params.city}`,`/city/${params.city}/${params.id}`]);
        setBread(['Home',cityList[params.city].name,subArea[0].name]);
    },[params]);

    return(
        <HomeWrapper>
            <Navbar uiHandler={uiHandler}/>
            <SigninModal open={location} uiHandler={uiHandler}/>
            <SignIn open={signin} uiHandler={uiHandler}/>
            <BodyWrapper>
                <br/>
                <Breadcrumbs
                    separator={<TiArrowRightThick/>}
                >
                    {
                        bread.map((element,index) => <Link key={index} className={classes.breadLink} to={paths[index]} >{element}</Link>)
                    }
                </Breadcrumbs>
                <br/>
                <Typography className={classes.header1} >{bread[bread.length - 1]}</Typography>
                <p className={classes.para}>
                    Why step out when you can get everything delivered home with the tap of a button? Bangalore’s favourite delivery app gets you Food, Grocery, Medicine, Pet Supplies, Fruits & Vegetables, Meat & Fish, Health & Wellness, Gifts and Send Packages from one end of the city to the other. From your local kirana stores to your favourite brands, grocery shopping to your forgotten charger, we are always on the move for you. Why worry about your chores, when you can get it all Dun!
                </p>
                <br/>
                <Grid big={true} city={params.city} area={params.id} items={mainScroll}/>
                <br/>
                <SmallGrid city={params.city} area={params.id} items={daily}/>
                <br/><br/><br/><br/>
                <Typography className={classes.header1} >Top picks for you</Typography>
                <br/>
                <Grid big={true} city={params.city} area={params.id} items={topPicks}/>
                <br/>
            </BodyWrapper>
            <FooterWrapper>
                <Infobar/>
                <DeliverArea city={params.city}/>
                <MainFooter/>
            </FooterWrapper>
        </HomeWrapper>
    );
}

export default Home;