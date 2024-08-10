'use client';

import { useEffect, useState } from "react";

const IMAGE_URL = [
    {url : "/main/원기옥컷1.jpg", classname : "col-12 cut"},
    {url : "/main/원기옥컷4.jpg", classname : "col-4 cut"},
    {url :"/main/원기옥컷3.jpg", classname : "col-4 cut"},
    {url : "/main/원기옥컷2.jpg", classname : "col-4 cut"},
];

export default function DrangonBallContainer(){

    return(
        <div 
            className="w-100 row" 
            style={{
                margin : 'auto', 
                maxWidth : '768px', 
                position : 'relative',
                overflow : 'hidden'
            }}>
            <img 
                className={"bubble"}
                src="/main/말풍선.png" 
                width = "100%" 
                height= "100%"
                style={{position : 'absolute', padding :0}}
            />
            {IMAGE_URL.map((data, i) => {
                return(
                    <div 
                        key={data.url + i.toString() + data.classname} 
                        className={data.classname + 'move-cut1'}>
                        <img 
                            src={data.url} 
                            width="100%" 
                            height="auto" 
                        />
                    </div>
                )

            })}
        </div>

    )
}