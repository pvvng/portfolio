'use client'

import './folder.css';
import 'animate.css';
import Overview from './aboutme/overview';
import AboutMe from './aboutme/AboutMe';

export default function AboutMeContainer({scrollTop} : {scrollTop : number}) {

    return (
        <>
            <Overview />
            <AboutMe />
        </>
    );
}
