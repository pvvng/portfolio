'use client';

import { useFolderStore, useWindowStore } from "@/app/store";
import MainFolderContainer from "./folderComponents/MainFolderContainer";
import Draggable from "react-draggable";
import { useRef } from "react";

export default function DetailPromptContainer({height} : {height ?: string}){
    const { isMinimized, isMaximized, isClosed, minimize, maximize, close } = useWindowStore();
    const { number } = useFolderStore();
    const nodeRef = useRef(null);

    if (isClosed) return null; // 창이 닫혔을 때 아무것도 렌더링하지 않음

    return (
        <Draggable nodeRef={nodeRef}>
            <div ref={nodeRef} className={`window ${isMinimized ? 'minimized' : ''} ${isMaximized ? 'maximized' : ''}`}>
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
                <div className="window-content text-black" style={{maxHeight : height}}>
                    {/* 창 내용 */}
                    <MainFolderContainer />
                </div>
            </div>
        </Draggable>
    );
}