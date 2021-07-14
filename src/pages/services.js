import React, { useEffect, useState } from 'react';
import useStyles,{ ServicesWrapper } from '../styles/services';
import Navbar from '../components/navbar';
import BodyWrapper from '../components/body';
import {useParams} from 'react-router-dom';
import { cityList } from '../assets/data/cityList'

const Services = (props) => {
    const params = useParams();
    const [bread,setBread] = useState([])
    useEffect(() => {
        const {city,area,type} = params;
        console.log(city,area,type);
    },[params])
    return ( 
        <ServicesWrapper>
            <Navbar/>
            
        </ServicesWrapper>
     );
}
export default Services;