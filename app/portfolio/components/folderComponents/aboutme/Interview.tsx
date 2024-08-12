'use client';

import { useEffect, useRef, useState } from "react";

export default function Interview({scrollTop} : {scrollTop : number}){

    const [isCarouselActive, setIsCarouselActive] = useState(false);

    const targetRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);

    console.log(scrollTop)

    useEffect(() => {
        const handleScroll = () => {
            const targetElement = targetRef.current;
            if (!targetElement || isCarouselActive) return;

            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;

            if (window.scrollY >= targetPosition) {
                // 특정 위치에 도달했을 때 스크롤 정지
                window.scrollTo(0, targetPosition);
                setIsCarouselActive(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [isCarouselActive]);

    return(
        <div 
            className="p-3 bg-dark text-white" 
            style={{position : "relative", width : '500vw'}}
        >
            <h2 className='header-title'>Interview</h2>
            <div className="interview-container p-3 mt-4 mb-4 float-start" style={{width : '100vw'}}>
                <p className="fw-bold">Q. 왜 프론트엔드 개발자를 선택했나요?</p>
                <p>
                    제 성격과도 관련된 이야기입니다. 전 남들 앞에 나서기 좋아하고, 평가받으며 성장하는 것을 좋아합니다.
                    프론트엔드 개발자는 이런 제 성격과 유사한 부분이 많습니다.
                    클라이언트가 서비스에서 최초로 마주하는 부분이기도 하고, 백엔드, 서버, 클라이언트와 끊임없는 소통을 통해 발전하는 것이 좋았습니다.
                </p>
            </div>
            <div className="interview-container p-3 mt-4 mb-4 float-start" style={{width : '100vw'}}>
                <p className="fw-bold">Q. 왜 프론트엔드 개발자를 선택했나요?</p>
                <p>
                    제 성격과도 관련된 이야기입니다. 전 남들 앞에 나서기 좋아하고, 평가받으며 성장하는 것을 좋아합니다.
                    프론트엔드 개발자는 이런 제 성격과 유사한 부분이 많습니다.
                    클라이언트가 서비스에서 최초로 마주하는 부분이기도 하고, 백엔드, 서버, 클라이언트와 끊임없는 소통을 통해 발전하는 것이 좋았습니다.
                </p>
            </div>
            <div className="interview-container p-3 mt-4 mb-4 float-start" style={{width : '100vw'}}>
                <p className="fw-bold">Q. 왜 프론트엔드 개발자를 선택했나요?</p>
                <p>
                    제 성격과도 관련된 이야기입니다. 전 남들 앞에 나서기 좋아하고, 평가받으며 성장하는 것을 좋아합니다.
                    프론트엔드 개발자는 이런 제 성격과 유사한 부분이 많습니다.
                    클라이언트가 서비스에서 최초로 마주하는 부분이기도 하고, 백엔드, 서버, 클라이언트와 끊임없는 소통을 통해 발전하는 것이 좋았습니다.
                </p>
            </div>
            <div style={{clear : 'both'}}></div>
        </div>
    )
}

