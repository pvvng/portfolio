'use client';

import { useEffect, useState } from "react";
import SonGohanContainer from "./Gohan";
import './css/GenkidamaContainer.css';
import { useTitleFlagStore } from "@/app/store";
import ExplainCotainer from "./ExplainContainer";

export default function GenkidamaContainer(){

    // 원기옥 크기 더 늘릴수 없을때 title 보여주기
    const { titleFlag, setTitleFlag } = useTitleFlagStore();
    // 실제 뷰포트 사이즈
    const [viewPortSize, setViewPortSize] = useState(0);
    // 사용자 뷰포트의 실제 넓이의 10퍼센트
    const [genkidamaSize, setGenkidamaSize] = useState(0);

    useEffect(() => {

        const calculateWidth = () => {
            setGenkidamaSize(document.documentElement.clientWidth * 0.1);
            setViewPortSize(document.documentElement.clientWidth);
            setTitleFlag(false);
        };
    
        // 페이지가 로드될 때와 창이 리사이즈될 때 
        // 원기옥 크기 : 10% 넓이로 설정 
        // viewport 사이즈 재설정
        // title 감시 플래그 상태 재설정
        calculateWidth();
        window.addEventListener('resize', calculateWidth);
    
        // 컴포넌트가 언마운트될 때 이벤트 리스너를 정리
        return () => {
          window.removeEventListener('resize', calculateWidth);
        };
    }, []);

    if(genkidamaSize === 0 || viewPortSize === 0) return null

    return(
        <div className="p-2" style={{margin :'auto'}}>
            {
                !titleFlag ?
                <p className="text-center fw-bold">원기옥을 클릭해 오공을 도와주세요!</p>:
                <ExplainCotainer />
            }
            <div 
                className="aura-circle-container"
                style={{
                    width : viewPortSize * 0.5 < 1600 ? viewPortSize * 0.5 : 1600, 
                    height : viewPortSize * 0.5 < 1600 ? viewPortSize * 0.5 : 1600,
                }}
                >
                <div 
                    className="aura-circle"
                    onClick={() => {
                        if(genkidamaSize <= (viewPortSize * 0.5 < 768 ? viewPortSize * 0.5 : 768)){
                            setGenkidamaSize(pre => pre * 1.5);
                        }else{
                            setTitleFlag(true);
                        }
                    }}
                    style={{
                        width : genkidamaSize, 
                        height : genkidamaSize, 
                        borderRadius: titleFlag ? '10px' : '50%',
                    }}
                >
                    <div
                        className="text-center p-2"
                        style={{
                            width : '80%',
                            maxWidth : '360px',
                            transition : 'all 1s',
                            opacity : titleFlag ? 1 : 0,
                            visibility : titleFlag ? 'visible' : 'hidden'
                        }}>
                            <img src="/main/character.png" draggable={false} width="100%" />
                    </div>
                </div>
            </div>
            {
                !titleFlag &&
                <SonGohanContainer />
            }
        </div>
    )
}