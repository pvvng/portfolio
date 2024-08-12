'use client'

import '../folder.css';
import 'animate.css';
import Overview from './Overview';
import AboutMe from './AboutMe';
import Interview from './Interview';
import CareerContainer from './CareerContainer';

export default function MainAboutMeContainer({scrollTop} : {scrollTop : number}) {

    return (
        <>
            <Overview />
            <AboutMe />
            <Interview scrollTop = {scrollTop} />
            <CareerContainer />
        </>
    );
}
