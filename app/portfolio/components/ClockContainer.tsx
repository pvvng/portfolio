'use client';

import moment from "moment-timezone";
import { useEffect, useState } from "react";

export default function ClockContainer(){

    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {

        // 클라이언트에서만 초기 시간을 설정
        setCurrentTime(moment().format('YYYY-MM-DD HH:mm'));

        const timer = setInterval(() => {
            let formattedTime = moment().format('YYYY-MM-DD HH:mm');
            if(currentTime !== formattedTime){
                setCurrentTime(moment().format('YYYY-MM-DD HH:mm'));
            }
        }, 1000);

        return () => clearInterval(timer);
    },[currentTime])

    return(
        <div>
            <div className="m-0 text-black">
                <p className="m-0">{currentTime.split(' ')[0]}</p>
                <p className="m-0">{currentTime.split(' ')[1]}</p>
            </div>
        </div>
    )
}