import Image from "next/image";
import { DataType } from "../projectData";

export default function ProjectBadgeContainer({projectData} : {projectData : DataType}){
    return(
        <div className="bg-dark text-white p-3 rounded-2">
            <p>개발 인력 : {projectData.manpower} 명</p>
            <p>개발 기간 : {projectData.term}</p>
            <p className="m-0">개발 환경</p>    
            {
                projectData.env.map(badge => 
                    <span key={badge.name} className="badge mb-3 bg-white text-black" style={{marginRight : '5px'}}>
                        <Image src={badge.url} width="15" height="15" alt={badge.name} />
                        {' '}{badge.name}
                    </span>
                )
            }
            <p className="m-0">작업 관리</p>
            {
                projectData.manage.map(badge => 
                    <span key={badge.name} className="badge mb-3 bg-white text-black" style={{marginRight : '5px'}}>
                        <Image src={badge.url} width="15" height="15" alt={badge.name} />
                        {' '}{badge.name}
                    </span>
                )
            }
            <p className="m-0">라이브러리</p>
            {
                projectData.library.map(badge => 
                    <span key={badge.name} className="badge mb-3 bg-white text-black" style={{marginRight : '5px'}}>
                        {
                            badge.url &&
                            <><Image src={badge.url} width="15" height="15" alt={badge.name} />{' '}</>
                        }
                        {badge.name}
                    </span>
                )
            }
            <p className="m-0">배포</p>
            {
                <span key={projectData.deploy.name} className="badge mb-3 bg-white text-black" style={{marginRight : '5px'}}>
                    <Image src={projectData.deploy.url} width="15" height="15" alt={projectData.deploy.name} />
                    {' '}{projectData.deploy.name}
                </span>
            }
        </div>
    )
}