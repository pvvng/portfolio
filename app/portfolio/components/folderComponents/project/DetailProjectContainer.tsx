'use client';

import Image from "next/image";
import { KKODLE_RM_DATA } from "./projectData";
import Link from "next/link";

export default function DetailProjectContainer(){

    const projectData = {...KKODLE_RM_DATA};

    return(
        <div className="p-sm-3 p-2 bg-white rounded-3">

            <div id="button-container" className="float-end">
                <button className="p-btn social-icon-btn bg-white mx-2">
                    <Link href = {projectData.github_link} target="_blank" aria-label={'go_to_' + projectData.name + 'github'}>
                        <Image src="/stack/github.png" width="30" height="30" alt="github-logo" />
                    </Link>
                </button>
                <button className="p-btn social-icon-btn bg-white">
                    <Link href={projectData.velog_link} target="_blank" aria-label={'go_to_' + projectData.name + 'velog'}>
                        <Image src="/stack/velog-icon.webp" width="30" height="30" alt="velog-logo" />
                    </Link>
                </button>
            </div>

            <h2 className="m-0 header-title">{projectData.name}</h2>
            <p className="m-0">{projectData.simple_explain}</p>
            <Link href={projectData.deploy_link} target="_blank" style={{textDecoration : 'none'}}>웹페이지 들어가보기</Link>

            <div style={{clear : 'both'}}></div>

            <div className="row row-center w-100" style={{margin : 'auto'}}>
                <div className="col-sm-6 col-12">
                    <img src={projectData.icon} width="100%" alt={projectData.name} />
                </div>
                <div className="col-sm-6 col-12">
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
                        <p className="m-0">배포</p>
                        {
                            <span key={projectData.deploy.name} className="badge mb-3 bg-white text-black" style={{marginRight : '5px'}}>
                                <Image src={projectData.deploy.url} width="15" height="15" alt={projectData.deploy.name} />
                                {' '}{projectData.deploy.name}
                            </span>
                        }
                    </div>
                </div>
            </div>

            <div className="p-3">
                {
                    projectData.explain.map(e => 
                        <div key={e.title}>
                            <hr/>
                            <p className="header-title">{e.title}</p>
                            <p>{e.explain}</p>
                        </div>
                    )
                }
            </div>


            <div className="p-3">
                <p className="header-title">설치한 라이브러리</p>
                {projectData.library.map(l => <p className="m-0" key={l}>{l}</p>)}
            </div>
        </div>
    )
}

