import { BOOK_RM_DATA, DataType, KKODLE_RM_DATA, MAP_RM_DATA, POKEMON_RM_DATA, STORIFY_RM_DATA } from "./projectData";
import ProjectBadgeContainer from "./bodyContainer/ProjectBadgeContainer";
import ExplainContainer from "./bodyContainer/ExplainContainer";
import HeaderContainer from "./bodyContainer/HeaderContainer";
import CarouselContainer from "./bodyContainer/CarouselContainer";

export default function DetailProjectContainer(
    {nowProject} : 
    {nowProject : string }
){

    let projectData :DataType|null =setDataByNowProject(nowProject);

    if(!projectData) return null;

    return(
        <div className="p-sm-5 p-3 bg-white rounded-3 container mt-3">
            <HeaderContainer projectData={projectData} />
            <CarouselContainer projectData={projectData} />
            <ProjectBadgeContainer projectData={projectData} />
            <ExplainContainer projectData={projectData} />
        </div>
    )
}

function setDataByNowProject(nowProject : string){
    let projectData : DataType|null = null;
    if(nowProject === ''){
        return null;
    }
    if(nowProject === '꼬들꼬들'){
        projectData = {...KKODLE_RM_DATA};
    }
    if(nowProject === 'Storify'){
        projectData = {...STORIFY_RM_DATA};
    }
    if(nowProject === '불편한 지도'){
        projectData = {...MAP_RM_DATA};
    }
    if(nowProject === '로켓단이되'){
        projectData = {...POKEMON_RM_DATA};
    }
    if(nowProject === '교뿡문고'){
        projectData = {...BOOK_RM_DATA};
    }

    return projectData;
}