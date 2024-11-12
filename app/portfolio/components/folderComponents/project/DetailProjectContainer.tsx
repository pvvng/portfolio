'use client';

import { BOOK_RM_DATA, DataType, KKODLE_RM_DATA, MAP_RM_DATA, POKEMON_RM_DATA, STORIFY_RM_DATA } from "./projectData";
import ProjectBadgeContainer from "./bodyContainer/ProjectBadgeContainer";
import ExplainContainer from "./bodyContainer/ExplainContainer";
import HeaderContainer from "./bodyContainer/HeaderContainer";
import CarouselContainer from "./bodyContainer/CarouselContainer";
import { useEffect, useState } from "react";

export default function DetailProjectContainer(
    {nowProject} : 
    {nowProject : [string, number] }
){

    let projectData :DataType|null =setDataByNowProject(nowProject[0]);

    const [isMount, setIsMount] = useState(false);

    useEffect(() => {

        setIsMount(true);

        return() => setIsMount(false);
    },[])

    if (!isMount) return null;
    if(!projectData) return null;

    return(
        <div className={"p-sm-5 p-3 bg-white rounded-3 container mt-3"}>
            <HeaderContainer projectData={projectData} />
            <CarouselContainer projectData={projectData} index={nowProject[1]} />
            <ProjectBadgeContainer projectData={projectData} />
            <ExplainContainer projectData={projectData} />
        </div>
    )
}

function setDataByNowProject(nowProjectName : string){
    let projectData : DataType|null = null;
    if(nowProjectName === ''){
        return null;
    }
    if(nowProjectName === '꼬들꼬들'){
        projectData = {...KKODLE_RM_DATA};
    }
    if(nowProjectName === 'Storify'){
        projectData = {...STORIFY_RM_DATA};
    }
    if(nowProjectName === '불편한 지도'){
        projectData = {...MAP_RM_DATA};
    }
    if(nowProjectName === '포켓몬 미니 게임'){
        projectData = {...POKEMON_RM_DATA};
    }
    if(nowProjectName === '교뿡문고'){
        projectData = {...BOOK_RM_DATA};
    }

    return projectData;
}