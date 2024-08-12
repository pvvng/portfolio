import { faAddressBook, faCakeCandles, faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import '../folder.css';
import SkillBadge from "./SkillBadge";



export default function AboutMe(){

    const [inView, setInView] = useState(false);

    const targetRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // 요소가 뷰포트에서 보일때
                    setInView(true);
                } else {
                    // 요소가 뷰포트에서 보이지 않을 때
                    setInView(false); 
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
                'p-3':
                'p-3 animate__animated animate__slideInUp'
                }
            >
                <h2 className='header-title'>about me</h2>
                <div style={{margin : 'auto'}}>
                    <span className='badge bg-dark' style={{marginRight : 5}}>#추진력</span>
                    <span className='badge bg-dark' style={{marginRight : 5}}>#메타인지</span>
                    <span className='badge bg-dark' style={{marginRight : 5}}>#열정</span>
                </div>
            </div>
            <br />
            <div className="row row-center w-100" style={{margin : 'auto'}}>
                <div className="col-sm-6 col-12 mb-sm-0 mb-4">
                    <img src="/main/character.png" width="100%" alt="main-chracter" />
                </div>
                <div className="col-sm-6 col-12 text-center">
                    <p><FontAwesomeIcon icon={faCakeCandles} />{' '}2002.12.21</p>
                    <p><FontAwesomeIcon icon={faPerson} />{' '}남성</p>
                    <p><FontAwesomeIcon icon={faAddressBook} />{' '}t6u80o@naver.com</p>
                    <span className="badge bg-dark mb-3">Frontend-developer</span>
                    <br/>                   
                    <button className="p-btn social-icon-btn hover-btn" style={{marginRight : '5px'}}>
                        <Image src="/stack/github.png" width="30" height="30" alt="github-logo" />
                        <span className="tooltip-link">Github</span>
                    </button>
                    <button className="p-btn social-icon-btn hover-btn">
                        <Image src="/stack/velog-icon.webp" width="30" height="30" alt="velog-logo" />
                        <span className="tooltip-link">Velog</span>
                    </button>
                </div>
            </div>
            <SkillBadge />
        </div>
    )
}