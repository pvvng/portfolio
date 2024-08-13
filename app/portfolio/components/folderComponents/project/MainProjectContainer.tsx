'use client';

import Image from "next/image";
import { useState } from "react";
import DetailProjectContainer from "./DetailProjectContainer";

const PROJECT_NAME_ARR = [
    {explain : '단어 유사도 추측 게임', name : '꼬들꼬들', url : '/project/꼬들꼬들/icon.png'},
    {explain : '게임 메이플스토리 BGM/OST 플레이어', name : 'Storify', url : '/project/storify/icon.png'},
    {explain : '실시간 위치 추적 지도 앱', name : '불편한 지도', url : '/project/map/icon.png'},
    {explain : '포켓몬 팬게임', name : '로켓단이되', url : '/project/pokemon/icon.png'},
    {explain : '책 검색 웹사이트', name : '교풍문고', url : '/project/book/icon.png'},
]

export default function MainProjectContainer(){

    const [isHover, setIsHover] = useState(Array(PROJECT_NAME_ARR.length).fill(false));

    const handleMouseHover = (i :number) => {
        let temp = Array(PROJECT_NAME_ARR.length).fill(false);
        temp[i] = true;
        setIsHover([...temp]);
    }

    return(
        <div className="p-3 pb-4 bg-dark">
            <h2 className="header-title text-white p-3 animate__animated animate__flipInX">Project</h2>
            {/* hidden detail prompt */}
            <DetailProjectContainer />

            <div className="row w-100 row-center" style={{margin : 'auto'}}>
                {
                    PROJECT_NAME_ARR.map((pna, i) => 
                        <div 
                            className="col-sm-6 col-lg-4 col-12 mt-3"
                            key={pna.explain + i.toString()}
                        >
                            <div 
                                className="project-container w-100"
                                onMouseEnter={() => handleMouseHover(i)}
                                onMouseLeave={() => 
                                    setIsHover(Array(PROJECT_NAME_ARR.length).fill(false))
                                }
                            >
                                <p className="header-title">
                                    <Image src={pna.url} width={20} height={20} alt={pna.name} />
                                    {' '}{pna.name}
                                </p>
                                <p>{pna.explain}</p>
                                {
                                    isHover[i] &&
                                    <button 
                                    className="p-btn p-1 btn-genkidama animate__animated animate__fadeInDown"
                                    style={{
                                        position : 'absolute',
                                        bottom : 20,
                                        right : 20
                                    }}>Read More!</button>
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}