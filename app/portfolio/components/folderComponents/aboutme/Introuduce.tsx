'use client';

import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import CopyAlertBox from "./CopyAlertBox";

export default function Introduce(){

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
        <div className="p-2" style={{margin : 'auto'}}>
            <p className="m-0">명지대학교 / 정보통신공학과</p>
            <p>(2022년 입학 ~ 재학 중)</p>
            <p>{' '}2002.12.21</p>
            <div style={{position : 'relative'}}>
                {
                    isCopySuccess === true ?
                    <CopyAlertBox color= "#509AF8" />:
                    isCopySuccess === false ?
                    <CopyAlertBox color= "#EF665B" />:
                    null
                }
                <p 
                    style={{color : 'blue', cursor : 'pointer'}} 
                    onClick={() => 
                        copyToClipboard('t6u80o@naver.com', setIsCopySuccess)
                    }
                >t6u80o@naver.com</p>
            </div>
            <br/>   
            <>
                <button className="p-btn social-icon-btn hover-btn" style={{marginRight : '5px'}}>
                    <Link href="https://github.com/pvvng?tab=repositories" aria-label="go_to_github" target="_black">
                        <Image src="/stack/github.png" width="30" height="30" alt="github-logo" />
                        <span className="tooltip-link">Github</span>
                    </Link>
                </button>
                <button className="p-btn social-icon-btn hover-btn">
                    <Link href="https://velog.io/@pvvng/posts" aria-label="go_to_velog" target="_black">
                        <Image src="/stack/velog-icon.webp" width="30" height="30" alt="velog-logo" />
                        <span className="tooltip-link">Velog</span>
                    </Link>
                </button>
            </>                
        </div>
    )
}

/** 클립보드에 텍스트 복사하는 함수 */
export async function copyToClipboard (
    textToCopy :string, 
    setIsCopySuccess : Dispatch<SetStateAction<boolean|string>>
){
    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopySuccess(true);
    } catch (error) {
      setIsCopySuccess(false);
    }
};