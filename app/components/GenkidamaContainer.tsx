'use client';

import { useEffect, useState } from "react";

export default function GenkidamaContainer(){

    const [viewPortSize, setViewPortSize] = useState(0);
    // 사용자 뷰포트의 실제 넓이의 10퍼센트
    const [genkidamaSize, setGenkidamaSize] = useState(0);

    useEffect(() => {
        setViewPortSize(document.documentElement.clientWidth);

        const calculateWidth = () => {
            setGenkidamaSize(document.documentElement.clientWidth * 0.1);
        };
    
        // 페이지가 로드될 때와 창이 리사이즈될 때 10% 넓이로 설정
        calculateWidth();
        window.addEventListener('resize', calculateWidth);
    
        // 컴포넌트가 언마운트될 때 이벤트 리스너를 정리
        return () => {
          window.removeEventListener('resize', calculateWidth);
        };
      }, []);

    return(
        <div className="p-2 mt-5">
            <p className="text-center fw-bold">원기옥을 클릭해 오공을 도와주세요!</p>
            <div 
                onClick={() => {
                    console.log(genkidamaSize,viewPortSize * 0.5)
                    if(genkidamaSize <= viewPortSize * 0.8){
                        setGenkidamaSize(pre => pre * 1.5);
                    }
                }}
                style={{
                    width : genkidamaSize, 
                    height : genkidamaSize, 
                    borderRadius : '50%',
                    margin : 'auto',
                    transition : 'all 0.5s',
                    background : '#a7d3e5'
                }}>
            </div>
            <div className="row w-100" style={{margin : 'auto', justifyContent : 'center', alignItems : 'center'}}>
                <div className="col-md-4 col-lg-3 col-5">
                    <img src="/main/원기옥컷5.jpg" width="100%" />
                </div>
            </div>
        </div>
    )
}