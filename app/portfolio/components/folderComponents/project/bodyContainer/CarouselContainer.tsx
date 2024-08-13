'use client';

import { useEffect, useState } from "react";
import { DataType } from "../projectData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

export default function CarouselContainer({projectData} : {projectData : DataType}){

    const [nowCarousel, setNowCarousel] = useState(0);
    const carouselLength = projectData.read_me.length;

    const moveCounter = 100 / carouselLength;
    const maxCounter = -(moveCounter * (carouselLength - 1));
    const minCounter = 0;

    const handleCarousel = (state : string) => {

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
                <div style={{width : carouselLength + '00%', transition : 'all 1s', position : 'relative', transform : `translateX(${nowCarousel + '%'})`}}>
                    {
                        projectData.read_me.map(
                            (pdr, i) => (
                                <div className="float-start row row-center" key={pdr + i.toString()}  style={{margin : 'auto', width : 100 / carouselLength + '%'}}>
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
                <button className="arrow-pre" onClick={() => handleCarousel('p')}>
                    <FontAwesomeIcon icon={faAngleUp} />
                </button>
                <button className="arrow-next" onClick={() => handleCarousel('n')}>                
                    <FontAwesomeIcon icon={faAngleUp} />
                </button>
            </div>
        </>
    )
}