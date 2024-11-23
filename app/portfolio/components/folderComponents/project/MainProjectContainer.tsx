'use client';

import Image from "next/image";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import DetailProjectContainer from "./DetailProjectContainer";
import { useRouter } from "next/navigation";
import { useNowCarouselStore } from "@/app/store";


export interface PropsDataType {
    nowProject: string;
    nowCarousel: number;
    setNowCarousel: Dispatch<SetStateAction<number>>;
}

export default function MainProjectContainer(){

    const [nowProjectState, setNowProjectState] = useState<[string, number]>(['', -1]);
    const router = useRouter();

    const { resetNowCarousel } = useNowCarouselStore();

    let allNameData :string[] = [];
    for (const data of PROJECT_NAME_ARR){
        if(data.name !== ''){
            allNameData.push(data.name);
        }
    }

    const headerRef = useRef<HTMLHeadingElement>(null);

    const scrollToHeader = () => {
        if (headerRef.current) {
            headerRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return(
        <div className="p-3 pb-4 bg-dark" style={{overflow : 'hidden'}}>
            <h2 className="header-title text-white p-3 animate__animated animate__flipInX" ref={headerRef}>Project</h2>
            {/* hidden detail prompt */}
            {
                nowProjectState[0] !== '프로젝트 전체 확인' ?
                <DetailProjectContainer nowProject={nowProjectState} />:
                allNameData.map((and, i) => <DetailProjectContainer key={and} nowProject={[and, i]} />)
            }

            <div className="row w-100 row-center" style={{margin : 'auto'}}>
                {
                    PROJECT_NAME_ARR.map((pna, i) => 
                        <div 
                            className="col-sm-6 col-lg-4 col-12 mt-3"
                            key={pna.explain + i.toString()}
                        >
                            <div className="project-container w-100">
                                <p className="header-title">
                                    <div style={{maxWidth : 20, position : 'relative'}}>
                                        <Image src={pna.url} width={20} height={20} layout="responsive" alt={pna.name} />                                    
                                    </div>
                                    {' '}{pna.name}
                                </p>
                                <p>{pna.explain}</p>
                                <button 
                                    className="btn p-1 btn-dark animate__animated animate__fadeInDown read-btn"
                                    style={{
                                        position : 'absolute',
                                        bottom : 20,
                                        right : 20
                                    }}
                                    onClick={() => {
                                        setNowProjectState([pna.name, pna.index]);
                                        // carousel store reset
                                        resetNowCarousel();
                                        // header로 scroll
                                        scrollToHeader();
                                        router.refresh();
                                    }}
                                >더 알아보기</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export const PROJECT_NAME_ARR = [
    {index : 0, explain : '유튜브 댓글 분석 웹페이지', name : '유튜뷰', url : '/project/유튜뷰/font-full.png'},
    {index : 1, explain : '단어 유사도 추측 게임', name : '꼬들꼬들', url : '/project/꼬들꼬들/icon.png'},
    {index : 2, explain : '게임 메이플스토리 BGM/OST 플레이어', name : 'Storify', url : '/project/storify/icon.png'},
    {index : 3, explain : '실시간 위치 추적 지도 앱', name : '불편한 지도', url : '/project/map/icon.png'},
    {index : 4, explain : '포켓몬 팬게임', name : '포켓몬 미니 게임', url : '/project/pokemon/icon.png'},
    {index : 5, explain : '', name : '프로젝트 전체 확인', url : '/project/book/icon.png'},
]