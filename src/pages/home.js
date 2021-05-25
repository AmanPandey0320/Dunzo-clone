import React from 'react';
import Navbar from '../components/navbar';
import { HomeWrapper } from '../styles/home'

class Home extends React.Component{

    render(){
        return(
            <HomeWrapper>
                <Navbar/>
            </HomeWrapper>
        );
    }
}

export default Home;