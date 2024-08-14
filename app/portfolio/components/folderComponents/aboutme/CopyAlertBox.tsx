'use client';

import { useEffect, useState } from "react";

export default function CopyAlertBox({color} : {color : string}){

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setIsVisible(false); 
        }, 6000); 

        return () => {
            clearTimeout(timer1); 
        };
    }, []);

    return(    
        isVisible &&
        <div className="info float-up w-100" style={{background : color}}>
            <div className="info__title text-center">
                {
                    color === '#EF665B' ?
                    '클립보드에 복사 실패':
                    '클립보드에 복사 성공!'

                }
            </div>
        </div>
    )
}