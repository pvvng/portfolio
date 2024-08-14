'use client';

import { useFolderStore, useWindowStore } from "@/app/store";
import MainFolderContainer from "./folderComponents/MainFolderContainer";
import Draggable from "react-draggable";
import { useRef, useState } from "react";

export default function DetailPromptContainer({height} : {height ?: string}){
    const { isMinimized, isMaximized, isClosed, minimize, maximize, close } = useWindowStore();
    const { number } = useFolderStore();
    const nodeRef = useRef(null);

    const [isDragging, setIsDragging] = useState(false);
    const [dragStartPos, setDragStartPos] = useState<{ x: number, y: number } | null>(null);

    const handleStart = (e: any) => {
        setIsDragging(false);
        setDragStartPos({ x: e.clientX, y: e.clientY });
    };

    const handleDrag = (e: any) => {
        if (dragStartPos) {
            const distance = Math.sqrt(
                Math.pow(e.clientX - dragStartPos.x, 2) +
                Math.pow(e.clientY - dragStartPos.y, 2)
            );
            if (distance > 5) {
                setIsDragging(true);
            }
        }
    };

    const handleStop = () => {
        setDragStartPos(null);
        setTimeout(() => setIsDragging(false), 0);
    };

    if (isClosed) return null; // 창이 닫혔을 때 아무것도 렌더링하지 않음

    return (
        <Draggable 
            nodeRef={nodeRef} 
            onStart={handleStart}
            onDrag={handleDrag}
            onStop={handleStop}
            cancel="scrollable-content"
        >
            <div 
                ref={nodeRef} 
                className={
                `window ${isMinimized ? 'minimized' : ''} ${isMaximized ? 'maximized' : ''}`
                }>
                <div 
                    className="window-header"
                    onDoubleClick={() => {
                        if(!isMaximized && isMinimized){
                            maximize();
                        }else if(!isMinimized && isMaximized){
                            minimize();
                        }
                    }}
                >
                    <div className="window-buttons">
                        <button className="minimize-button" onClick={minimize}></button>
                        <button className="maximize-button" onClick={maximize}></button>
                        <button className="close-button" onClick={close}></button>
                    </div>
                    <div className="window-title no-select">
                        {
                            number === 0?
                            'About Me':
                            number === 1?
                            'Project':
                            'All'
                        }
                    </div>
                </div>
                <div className="window-content text-black scrollable-content" style={{maxHeight : height}}>
                    {/* 창 내용 */}
                    <MainFolderContainer />
                </div>
            </div>
        </Draggable>
    );
}