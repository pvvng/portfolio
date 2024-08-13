'use client';

import { useEffect, useRef, useState } from "react";

export default function Interview(){

    const [inView, setInView] = useState(false);

    const targetRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // 요소가 뷰포트에서 보일때
                    setInView(true);
                } 
            });
        }, {
            root: null, 
            rootMargin: '0px',
            threshold: 0.1 
        });

        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        // Cleanup
        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
            }
        };
    }, []);

    return(
        <div 
            className="p-3 bg-dark text-white" 
            ref={targetRef} 
            style={{position : "relative", overflowX : 'hidden'}}
        >
            <h2 className='header-title'>Interview</h2>
            <div className=
                {
                    inView ? 
                    "interview-container p-3 mt-4 mb-4 animate__animated animate__slideInRight":
                    "interview-container p-3 mt-4 mb-4"
                }
            >
                <p className="fw-bold">Q. 왜 프론트엔드 개발자를 선택했나요?</p>
                <p className="m-0">
                    제 성격과도 관련된 이야기입니다. 전 남들 앞에 나서기 좋아하고, 평가받으며 성장하는 것을 좋아합니다.
                    프론트엔드 개발자는 이런 제 성격과 유사한 부분이 많습니다.
                    클라이언트가 서비스에서 최초로 마주하는 부분이기도 하고, 백엔드, 서버, 클라이언트와 끊임없는 소통을 통해 발전하는 것이 좋았습니다.
                </p>
            </div>
            <div className=
                {
                    inView ? 
                    "interview-container p-3 mt-4 mb-4 animate__animated animate__slideInRight animate__delay-1s":
                    "interview-container p-3 mt-4 mb-4"
                }
            >
                <p className="fw-bold">Q. 일에 있어 가장 중요하게 생각하는 것이 있다면?</p>
                <p className="m-0">
                    저는 상호 존중과 효율을 중요시 생각합니다. 개발 내외부 부서와 협업이 잦은 개발자 특성 상 서로에 대한 상호 존중 없이는 좋은 작업을 할 수 없을 것이라고 생각합니다.
                    특히, 토론을 통해 좋은 의견을 얻기 위해서는 무작정 비난하는 것이 아닌 팩트를 기반으로 한 비판을 하는 것이 중요하다고 생각합니다.
                    또한, 효율적인 일처리를 중시하여 가장 신속하고 정확한 방식으로 일처리를 계획하고 그대로 실행하는 것을 좋아합니다.
                </p>
            </div>
            <div className=
                {
                    inView ? 
                    "interview-container p-3 mt-4 mb-4 animate__animated animate__slideInRight animate__delay-2s":
                    "interview-container p-3 mt-4 mb-4"
                }
            >
                <p className="fw-bold">Q. 역량을 키우기 위해 어떤 노력을 기울였나요?</p>
                <p className="m-0">
                    저는 토이 프로젝트를 통해 실제 사용 가능한 서비스를 제작하면서 공부하는 것을 선호합니다. 
                    프로젝트를 진행하다 보면 어떤 라이브러리를 알게 된다면 그것의 특징과 사용 방법 장점 등을 
                    빠르게 습득하고 진행 중인 프로젝트의 어떤 부분에 적용할 수 있는가.를 고민하는 과정을 필연적으로 거치게 됩니다. 
                    이 과정은 통해 새로이 알게 된 라이브러리의 활용을 이론적인 부분에서 더 나아가 조금 더 실무적인 부분에서 활용할 수 있게 합니다. 
                </p>
            </div>
        </div>
    )
}