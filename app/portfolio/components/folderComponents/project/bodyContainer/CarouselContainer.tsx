'use client';

import { useEffect, useRef, useState } from "react";
import { DataType } from "../projectData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNowCarouselStore } from "@/app/store";

export default function CarouselContainer({projectData, index} : {projectData : DataType, index : number}){

    const { nowCarousel, changeNowCarousel } = useNowCarouselStore();

    // 컴포넌트가 사용자의 시야에 들어왔는지 확인하는 상태
    const [inView, setInView] = useState(false);
    // 컴포넌트 부착 ref
    const targetRef = useRef<HTMLDivElement>(null);
    // 사용자가 클릭했는지 확인하는 상태
    const [isClicked, setIsClicked] = useState(false);

    // carousel data 변수
    const carouselLength = projectData.read_me.length;
    const moveCounter = 100 / carouselLength;
    const maxCounter = -(moveCounter * (carouselLength - 1));
    const minCounter = 0;

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // 요소가 뷰포트에서 보일때
                    setInView(true);
                }else{
                    setInView(false);
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

    /**
     * 종속성에 nowCarousel을 추가하여 캐러셀이 최초 1회만 동작하고 이후에는 동작하지 않는 문제 해결
     * isClicked 상태로만 zustand store 변경을 시키면 
     * 여러개의 컴포넌트가 동시에 렌더링 됐을 때 zustand store는 index 0만 처리하는 문제가 생김
     * 
     * 이 컴포넌트가 시야에 들어왔는지 확인하기 위한 inView 상태를 활용해 문제 해결
     */ 
    useEffect(() => {
        let interval: NodeJS.Timeout | undefined;
    
        if (inView && !isClicked) {
            interval = setInterval(() => {
                handleCarousel('n', false);
            }, 10000);
        }
    
        return () => {
            if (interval) clearInterval(interval);
        };
    },[inView, nowCarousel]);

    const handleCarousel = (state : string, user : boolean) => {

        if(user){
            setIsClicked(true);
        }

        if(state === 'p'){
            changeNowCarousel(nowCarousel[index] + moveCounter, index);
        }
        if(state === 'n'){
            changeNowCarousel(nowCarousel[index] - moveCounter, index);
        }
    }

    useEffect(()=>{
        if(nowCarousel[index] < maxCounter){
            changeNowCarousel(minCounter, index);
        }
        if(nowCarousel[index] > minCounter){
            changeNowCarousel(maxCounter, index);
        }
    },[nowCarousel]);

    return(
        <>
            <div style={{overflow : 'hidden', position : 'relative'}} ref={targetRef}>
                <div className="row row-center" style={{width : carouselLength + '00%', transition : 'all 1s', transform : `translateX(${nowCarousel[index] + '%'})`, margin : 'auto'}}>
                    {
                        projectData.read_me.map(
                            (pdr, i) => (
                                <div className="float-start row row-center p-5" key={pdr + i.toString()}  style={{margin : 'auto', width : 100 / carouselLength + '%'}}>
                                    <img 
                                        src={pdr.url} 
                                        width="100%" 
                                        style={{maxWidth : '360px'}}
                                        alt={projectData.name} 
                                    />
                                </div>
                            )
                        )
                    }
                </div>
                <button className="arrow-pre" 
                    onClick={() => handleCarousel('p', true)}>
                    <FontAwesomeIcon icon={faAngleUp} />
                </button>
                <button className="arrow-next" onClick={() => handleCarousel('n', true)}>                
                    <FontAwesomeIcon icon={faAngleUp} />
                </button>
            </div> 
        </>
    )
}