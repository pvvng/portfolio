'use client';

import { useEffect, useState } from "react";

export default function GenkidamaContainer(){

    // 실제 뷰포트 사이즈
    const [viewPortSize, setViewPortSize] = useState(0);
    // 사용자 뷰포트의 실제 넓이의 10퍼센트
    const [genkidamaSize, setGenkidamaSize] = useState(0);

    useEffect(() => {

        const calculateWidth = () => {
            setGenkidamaSize(document.documentElement.clientWidth * 0.1);
            setViewPortSize(document.documentElement.clientWidth);
        };
    
        // 페이지가 로드될 때와 창이 리사이즈될 때 10% 넓이로 설정 & viewport 사이즈 재설정
        calculateWidth();
        window.addEventListener('resize', calculateWidth);
    
        // 컴포넌트가 언마운트될 때 이벤트 리스너를 정리
        return () => {
          window.removeEventListener('resize', calculateWidth);
        };
      }, []);

    return(
        <div className="p-2 mt-5">
            <p className="text-center fw-bold mb-5">원기옥을 클릭해 오공을 도와주세요!</p>
            <div 
                style={{
                    width : viewPortSize * 0.5, 
                    height : viewPortSize * 0.5,
                    display : 'flex',
                    justifyContent:'center',
                    alignItems : 'center',
                    margin : 'auto'
                }}>
                <div 
                    className="aura-circle"
                    onClick={() => {
                        if(genkidamaSize <= viewPortSize * 0.5){
                            setGenkidamaSize(pre => pre * 1.5);
                        }else{
                            
                        }
                    }}
                    style={{
                        width : genkidamaSize, 
                        height : genkidamaSize, 
                        borderRadius : '50%',
                        margin : 'auto',
                        transition : 'all 0.5s',
                        background : 'white'
                    }}
                ></div>
            </div>
            <div className="row w-100" style={{margin : 'auto', justifyContent : 'center', alignItems : 'center'}}>
                <div className="col-md-4 col-lg-3 col-5">
                    <img src="/main/원기옥컷5.jpg" width="100%" />
                </div>
            </div>
        </div>
    )
}