'use client';

import { useEffect, useState } from "react";
import { DataType } from "../projectData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

export default function CarouselContainer({projectData} : {projectData : DataType}){

    const [nowCarousel, setNowCarousel] = useState(0);
    const [isClicked, setIsClicked] = useState(false);
    const carouselLength = projectData.read_me.length;

    const moveCounter = 100 / carouselLength;
    const maxCounter = -(moveCounter * (carouselLength - 1));
    const minCounter = 0;

    useEffect(() => {
        let interval : NodeJS.Timeout
        
        // 사용자가 클릭해서 캐러셀 움직였다면 자동 회전 정지
        if(!isClicked){
            interval= setInterval(() => {
                handleCarousel('n');
            }, 5000);
        }else{
            return () => clearInterval(interval);
        }

        return () => clearInterval(interval);
    },[isClicked]);

    const handleCarousel = (state : string, user ?: boolean) => {
        if(user){
            setIsClicked(true);
        }

        if(state === 'p'){
            setNowCarousel(pre => pre + moveCounter);
        }
        if(state === 'n'){
            setNowCarousel(pre => pre - moveCounter);
        }
    }

    useEffect(()=>{
        if(nowCarousel < maxCounter){
            setNowCarousel(minCounter);
        }
        if(nowCarousel > minCounter){
            setNowCarousel(maxCounter);
        }
    },[nowCarousel]);

    return(
        <>
            <div style={{overflow : 'hidden', position : 'relative'}}>
                <div className="row row-center" style={{width : carouselLength + '00%', transition : 'all 1s', transform : `translateX(${nowCarousel + '%'})`, margin : 'auto'}}>
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