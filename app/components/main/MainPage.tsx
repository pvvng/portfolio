'use client'

import { useTitleFlagStore } from "@/app/store";
import DrangonBallContainer from "./DragonballContainer";
import GenkidamaContainer from "./GenkidamaContainer";

export default function MainPage(){

    const { titleFlag } = useTitleFlagStore();

    return(
        <div 
            className={ titleFlag ? "bg-genkidama" : ''}
            style={{minHeight : titleFlag ? '100vh' : ''}}
        >
            <DrangonBallContainer />
            <GenkidamaContainer />
        </div>
    )
}