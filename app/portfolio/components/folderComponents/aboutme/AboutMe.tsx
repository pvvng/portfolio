import { useEffect, useRef, useState } from "react";
import '../folder.css';
import SkillBadge from "./SkillBadge";
import Introduce from "./Introuduce";
import Link from "next/link";
import Image from "next/image";

export default function AboutMe(){

    const [inView, setInView] = useState(false);

    const targetRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // 요소가 뷰포트에서 보일때
                    setInView(true);
                }
            });
        }, {
            root: null, 
            rootMargin: '0px',
            threshold: 0.1 
        });

        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        // Cleanup
        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
            }
        };
    }, []);

    return(
        // overview
        <div 
            className={
                !inView?
                'about-me-container top-container p-3':
                'about-me-container bg-white top-container p-3'
            } 
            style={{overflow : 'hidden'}}
            ref={targetRef}
        >
            {/* title */}
            <div className="p-2">
                <div className="float-end mt-5">
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
                </div>     
                <h2 className='header-title'>about me</h2>
                <div style={{clear : 'both'}} />
                <hr />
                <h4 className="header-title mt-3">
                    김동우
                    <span 
                        className="mx-2 fw-bold rounded bg-primary text-white px-2 p-1" 
                        style={{fontSize : '0.8rem'}}
                    >
                        Frontend-developer
                    </span>
                </h4>
                <div className="mt-3 m-auto">
                    <span className='badge bg-dark text-white'>#추진력</span>
                    <span className='badge bg-dark text-white'>#메타인지</span>
                    <span className='badge bg-dark text-white'>#열정</span>
                </div>
            </div>
            <Introduce />
            <SkillBadge />
        </div>
    )
}