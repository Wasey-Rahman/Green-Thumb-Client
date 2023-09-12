import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Indoor from '../Indoor/Indoor';
import Outdoor from '../Outdoor/Outdoor';
import Planning from '../Planning/Planning';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Category></Category>
            <Indoor></Indoor>
            <Planning></Planning>
            <Outdoor></Outdoor>
            
        </div>
    );
};

export default Home;