'use client'

import Image from "next/image"
import ClockContainer from "./ClockContainer"

export default function TaskBar(){
    return(
        <div className='taskbar'>
            <div 
                className='row w-100' 
                style={{
                    margin :'auto', 
                    justifyContent : 'center', 
                    alignItems : 'center'
                }}
            >
                <div className='col-6 text-center'>
                    <button className="p-btn social-icon-btn">
                        <Image src="/stack/github.png" width="30" height="30" alt="github-logo" />
                    </button>
                    <button className="p-btn social-icon-btn">
                        <Image src="/stack/velog-icon.webp" width="30" height="30" alt="velog-logo" />
                    </button>
                </div> 

                <div className='col-6 text-center'>
                    <ClockContainer />
                </div>
            </div>
        </div>
    )
}
