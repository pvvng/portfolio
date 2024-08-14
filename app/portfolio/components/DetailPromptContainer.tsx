'use client';

import { useFolderStore, useWindowStore } from "@/app/store";
import MainFolderContainer from "./folderComponents/MainFolderContainer";
import Draggable from "react-draggable";
import { useRef, useState } from "react";

export default function DetailPromptContainer({ height }: { height?: string }) {
    const { isMinimized, isMaximized, isClosed, minimize, maximize, close } = useWindowStore();
    const { number } = useFolderStore();
    const nodeRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);

    if (isClosed) return null; // 창이 닫혔을 때 아무것도 렌더링하지 않음

    const handleStart = () => {
        setIsDragging(false);
    };

    const handleDrag = () => {
        setIsDragging(true);
    };

    const handleStop = () => {
        setTimeout(() => setIsDragging(false), 0); // 드래그 종료 후 상태 초기화
    };

    const handleDoubleClick = () => {
        if (!isDragging) {
            if (!isMaximized && isMinimized) {
                maximize();
            } else if (!isMinimized && isMaximized) {
                minimize();
            }
        }
    };

    return (
        <Draggable
            nodeRef={nodeRef}
            onStart={handleStart}
            onDrag={handleDrag}
            onStop={handleStop}
        >
            <div
                ref={nodeRef}
                className={`window ${isMinimized ? 'minimized' : ''} ${isMaximized ? 'maximized' : ''}`}
            >
                <div 
                    className="window-header"
                    onDoubleClick={handleDoubleClick}
                >
                    <div className="window-buttons">
                        <button className="minimize-button" onClick={() => !isDragging && minimize()}></button>
                        <button className="maximize-button" onClick={() => !isDragging && maximize()}></button>
                        <button className="close-button" onClick={() => !isDragging && close()}></button>
                    </div>
                    <div className="window-title no-select">
                        {number === 0 ? 'About Me' : number === 1 ? 'Project' : 'All'}
                    </div>
                </div>
                <div className="window-content text-black" style={{ maxHeight: height }}>
                    {/* 창 내용 */}
                    <MainFolderContainer />
                </div>
            </div>
        </Draggable>
    );
}
