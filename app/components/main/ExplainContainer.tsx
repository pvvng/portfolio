'use client'

import { useRouter } from 'next/navigation';
import './css/ExplainContainer.css';
import { useEffect, useRef } from 'react';

export default function ExplainCotainer(){

    const router = useRouter();

    const headerRef = useRef<HTMLHeadingElement>(null);

    const scrollToHeader = () => {
        if (headerRef.current) {
            headerRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        scrollToHeader();
    },[])

    return(
        <div className='mt-5 mt-sm-4 mt-md-3 mt-lg-0' ref={headerRef}>
            <div className="text-center fw-bold p-4">
                <h5 className="m-0 main-title">안녕하세요!</h5>
                <h6 className="m-0 mb-4 sub-title">프론트엔드 개발자 김동우입니다.</h6>
                <button 
                    className="p-btn btn-white ani-btn" 
                    onClick={() => {router.push('/portfolio')}}
                >포트폴리오 확인하기 😉</button>
            </div>
        </div>

    )
}