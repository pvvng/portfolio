import { faAddressBook, faCakeCandles, faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import '../folder.css';
import SkillBadge from "./SkillBadge";
import Link from "next/link";
import Introduce from "./Introuduce";

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
        <div className={
            !inView?
            'about-me-container top-container p-3':
            'about-me-container bg-white top-container p-3'
        } ref={targetRef}>
            {/* title */}
            <div className={
                !inView?
                '':
                'animate__animated animate__slideInUp'
                }
            >
                <h2 className='header-title text-center mt-5'>about me</h2>
                <h4 className="header-title text-center mt-3">김동우</h4>
                <div className="text-center" style={{margin : 'auto'}}>
                    <span className='badge bg-dark text-white'>#추진력</span>
                    <span className='badge bg-dark text-white'>#메타인지</span>
                    <span className='badge bg-dark text-white'>#열정</span>
                </div>
            </div>
            <br />
            <Introduce />
            <SkillBadge />
        </div>
    )
}