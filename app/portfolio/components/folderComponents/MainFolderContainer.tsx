'use client'

import MainAboutMeContainer from './aboutme/MainAboutMeContainer';
import './folder.css';

export default function MainFolderContainer({scrollTop} : {scrollTop : number}){
    return(
        <>
            <MainAboutMeContainer scrollTop = {scrollTop} />
        </>
    )
}