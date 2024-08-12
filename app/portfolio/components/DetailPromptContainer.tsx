'use client';

import { useWindowStore } from "@/app/store";
import MainFolderContainer from "./folderComponents/MainFolderContainer";
import { useEffect, useRef, useState } from "react";

export default function DetailPromptContainer({height} : {height ?: string}){
    const { isMinimized, isMaximized, isClosed, minimize, maximize, close } = useWindowStore();

    const [scrollTop, setScrollTop] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);

    // 스크롤 이벤트
    useEffect(() => {
        const handleScroll = () => {
            if (contentRef.current) {
                setScrollTop(contentRef.current.scrollTop);
            }
        };

        handleScroll()

        const contentElement = contentRef.current;
        if (contentElement) {
            contentElement.addEventListener('scroll', handleScroll);
        }

        // 이벤트 리스너 클린업
        return () => {
            if (contentElement) {
                contentElement.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    if (isClosed) return null; // 창이 닫혔을 때 아무것도 렌더링하지 않음

    return (
        <div className={`window ${isMinimized ? 'minimized' : ''} ${isMaximized ? 'maximized' : ''}`}>
            <div className="window-header">
                <div className="window-buttons">
                    <button className="minimize-button" onClick={minimize}></button>
                    <button className="maximize-button" onClick={maximize}></button>
                    <button className="close-button " onClick={close}></button>
                </div>
                <div className="window-title">Window Title</div>
            </div>
            <div className="window-content text-black" style={{maxHeight : height}} ref={contentRef}>
                {/* 창 내용 */}
                <MainFolderContainer scrollTop = {scrollTop} />
            </div>
        </div>
    );
}