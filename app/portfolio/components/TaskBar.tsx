'use client'

import Image from "next/image"
import ClockContainer from "./ClockContainer"
import Link from "next/link"
import NoteContainer from "./NoteContainer"

export default function TaskBar(){
    return(
        <div className='taskbar'>
            <div 
                className='row row-center w-100' 
                style={{
                    margin :'auto', 
                    justifyContent : 'center', 
                    alignItems : 'center'
                }}
            >
                <div className='col-6 text-center'>
                    <button className="p-btn social-icon-btn">
                        <Link href="https://github.com/pvvng?tab=repositories" aria-label="go_to_github" target="_black">
                            <Image src="/stack/github.png" width="30" height="30" alt="github-logo" />
                        </Link>
                    </button>
                    <button className="p-btn social-icon-btn">
                        <Link href="https://velog.io/@pvvng/posts" aria-label="go_to_velog" target="_black">
                            <Image src="/stack/velog-icon.webp" width="30" height="30" alt="velog-logo" />
                        </Link>
                    </button>
                </div> 
                <div className='col-6 text-center'>
                    <ClockContainer />
                </div>
            </div>
        </div>
    )
}
