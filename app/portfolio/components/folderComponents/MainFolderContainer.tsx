'use client'

import AboutMeContainer from "./AboutMeContainer";
import './folder.css';

export default function MainFolderContainer({scrollTop} : {scrollTop : number}){
    return(
        <>
            <AboutMeContainer scrollTop = {scrollTop} />
        </>
    )
}