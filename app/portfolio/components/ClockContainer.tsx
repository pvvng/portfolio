'use client';

import moment from "moment-timezone";
import { useEffect, useState } from "react";

export default function ClockContainer(){

    const [currentTime, setCurrentTime] = useState(moment().format('YYYY-MM-DD HH:mm'));

    useEffect(() => {
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
            <p className="m-0 text-black">
                {currentTime}
            </p>
        </div>
    )
}