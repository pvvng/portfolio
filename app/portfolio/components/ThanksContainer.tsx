'use client';

import Image from "next/image";
import Link from "next/link";
import { copyToClipboard } from "./folderComponents/aboutme/Introuduce";
import { useEffect, useState } from "react";
import CopyAlertBox from "./folderComponents/aboutme/CopyAlertBox";

export default function ThanksContainer(){

    const [isCopySuccess, setIsCopySuccess] = useState<boolean|string>('null');

    useEffect(() => {
        let timer : NodeJS.Timeout;

        if(isCopySuccess === true){
            timer = setTimeout(() => {
                setIsCopySuccess('null');
            }, 3000)
        }

        return () => clearTimeout(timer);
    }, [isCopySuccess]);

    return(
        <div className="p-3 text-center bg-dark" style={{position  :'relative'}}>
            <CopyAlertBox color= "#509AF8" />
            
            <div className="p-md-5 p-1 mt-5 mb-5">
                <h1 className="header-title thanks-title">Thank you!</h1>
                <h5 className="fw-bold text-white thanks-sub-title">봐주셔서 감사합니다!</h5>
                <div className="row row-center w-100" style={{margin : 'auto'}}>
                    <div className='col-4 text-center'>
                        <button className="p-btn social-icon-btn">
                            <Link href="https://github.com/pvvng?tab=repositories" style={{textDecoration : 'none'}} aria-label="go_to_github" target="_black">
                                <Image src="/stack/github.png" width="30" height="30" alt="github-logo" />
                                <p className="m-0" style={{color : 'black'}}>pvvng</p>
                            </Link>
                        </button>
                    </div> 
                    <div className='col-4 text-center'>
                        <button className="p-btn social-icon-btn">
                            <Link href="https://velog.io/@pvvng/posts" style={{textDecoration : 'none'}} aria-label="go_to_velog" target="_black">
                                <Image src="/stack/velog-icon.webp" width="30" height="30" alt="velog-logo" />
                                <p className="m-0" style={{textDecoration : 'none', color : 'black'}}>velog</p>
                            </Link>
                        </button>
                    </div> 
                    {
                        isCopySuccess === true ?
                        <CopyAlertBox color= "#509AF8" />:
                        isCopySuccess === false ?
                        <CopyAlertBox color= "#EF665B" />:
                        null
                    }
                    <div className='col-4 text-center'>
                        <button 
                            className="p-btn social-icon-btn"
                            onClick={() => {copyToClipboard('t6u80o@naver.com', setIsCopySuccess)}}
                        >
                            <Image src="/stack/naver.png" width="30" height="30" alt="velog-logo" />
                            <p className="m-0">naver</p>
                        </button>
                    </div> 
                </div>
            </div>
        </div>
    )
}