'use client';

import Link from "next/link";
import { DataType } from "../projectData";
import Image from "next/image";

export default function HeaderContainer({projectData} : {projectData : DataType}){

    return(
        <>
            <div id="button-container" className="float-end">
                {
                    projectData.deploy_link&&
                    <button className="p-btn social-icon-btn bg-white hover-btn">
                        <Link href={projectData.deploy_link} target="_blank" aria-label={'go_to_' + projectData.name}>
                            <Image src={projectData.icon} width="30" height="30" alt={projectData.name}/>
                            <span className="tooltip-link">{projectData.name}</span>
                        </Link>
                    </button>
                }
                <button className="p-btn social-icon-btn bg-white hover-btn mx-2">
                    <Link href = {projectData.github_link} target="_blank" aria-label={'go_to_' + projectData.name + 'github'}>
                        <Image src="/stack/github.png" width="30" height="30" alt="github-logo" />
                        <span className="tooltip-link">Github</span>
                    </Link>
                </button>
                {
                    projectData.velog_link &&
                    <button className="p-btn social-icon-btn hover-btn bg-white">
                        <Link href={projectData.velog_link} target="_blank" aria-label={'go_to_' + projectData.name + 'velog'}>
                            <Image src="/stack/velog-icon.webp" width="30" height="30" alt="velog-logo" />
                            <span className="tooltip-link">Velog</span>
                        </Link>
                    </button>
                }
            </div>

            <h2 className="header-title">{projectData.name}</h2>
            <p className="m-0">{projectData.simple_explain}</p>

            <div style={{clear : 'both'}}></div>
        </>
    )
}