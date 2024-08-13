'use client';

import { DataType, KKODLE_RM_DATA } from "./projectData";
import ProjectBadgeContainer from "./bodyContainer/ProjectBadgeContainer";
import ExplainContainer from "./bodyContainer/ExplainContainer";
import HeaderContainer from "./bodyContainer/HeaderContainer";
import CarouselContainer from "./bodyContainer/CarouselContainer";

export default function DetailProjectContainer(){

    const projectData :DataType = {...KKODLE_RM_DATA};

    return(
        <div className="p-sm-3 p-2 bg-white rounded-3 container">
            <HeaderContainer projectData={projectData} />
            <CarouselContainer projectData={projectData} />
            <ProjectBadgeContainer projectData={projectData} />
            <ExplainContainer projectData={projectData} />
        </div>
    )
}

