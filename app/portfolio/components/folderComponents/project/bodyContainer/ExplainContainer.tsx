import Link from "next/link";
import { DataType } from "../projectData";
import Image from "next/image";

export default function ExplainContainer({projectData} : {projectData : DataType}){
    return(
        <div className="p-3">
            {
                projectData.explain.map((e, i) => 
                    <div key={e.title} className="mt-2">
                        <p className="header-title">
                            {i > 0 && <span>{i}.{' '}</span>}
                            {e.title}
                        </p>
                        {e.explain && <><p>{e.explain}</p></>}
                    </div>
                )
            }
            {
                projectData.light_explain&&
                <>
                    <hr/>
                    <p className="header-title">주요 기능 및 특징</p>
                    {
                        projectData.light_explain.map((ple, i) => 
                            <p key={i}>{ple.title}</p>
                        )
                    }
                </>
            }

            {
                projectData.about &&
                <>
                    <hr />
                    <p className="header-title mb-3">프로젝트에서 알게된 점</p>
                </>
            }
            <ul>
                {
                    projectData.about &&
                    projectData.about.map((pda, i) => <li className="mb-2" key={i}>{pda}</li>)
                }
            </ul>

            <hr />
            <h5 className="header-title mb-3">후기</h5>
            {
                <div className="p-3 rounded-2" style={{background : '#eee'}}>
                    <strong>{projectData.review}</strong>
                </div>
            }

            <hr />
            <p className="header-title m-0">프로젝트에 대한 더 자세한 설명이 필요하신가요?</p>
            <button className="p-btn social-icon-btn bg-white hover-btn">
                <Link href = {projectData.github_link} target="_blank" aria-label={'go_to_' + projectData.name + 'github'}>
                    <Image src="/stack/github.png" width="30" height="30" alt="github-logo" />
                    <span className="tooltip-link">Github</span>
                </Link>
            </button>

            <br/>
            {
                projectData.velog_link &&
                <>
                    <p className="header-title m-0 mt-2">프로젝트를 정리한 내용이 궁금하신가요?</p>
                    <button className="p-btn social-icon-btn hover-btn bg-white">
                        <Link href={projectData.velog_link} target="_blank" aria-label={'go_to_' + projectData.name + 'velog'}>
                            <Image src="/stack/velog-icon.webp" width="30" height="30" alt="velog-logo" />
                            <span className="tooltip-link">Velog</span>
                        </Link>
                    </button>
                </>
            }
        </div>
    )
}