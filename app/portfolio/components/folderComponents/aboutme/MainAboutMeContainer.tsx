'use client'

import '../folder.css';
import 'animate.css';
import Overview from './overview';
import AboutMe from './AboutMe';
import Interview from './Interview';

export default function MainAboutMeContainer({scrollTop} : {scrollTop : number}) {

    return (
        <>
            <Overview />
            <AboutMe />
            <Interview scrollTop = {scrollTop} />
        </>
    );
}
