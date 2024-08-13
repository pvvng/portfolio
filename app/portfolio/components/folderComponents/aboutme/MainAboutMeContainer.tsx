'use client'

import '../folder.css';
import 'animate.css';
import Overview from './Overview';
import AboutMe from './AboutMe';
import Interview from './Interview';
import CareerContainer from './CareerContainer';

export default function MainAboutMeContainer() {

    return (
        <>
            <Overview />
            <AboutMe />
            <Interview />
            <CareerContainer />
        </>
    );
}
