'use client';

import { useFolderStore, useWindowStore } from "@/app/store";
import MainFolderContainer from "./folderComponents/MainFolderContainer";
import Draggable, { DraggableEvent } from "react-draggable";
import { useEffect, useRef, useState } from "react";
import { useLongPress } from 'use-long-press';
import LoadingSpinner from "./LoadingSpinner";

export default function DetailPromptContainer({height} : {height ?: string}){
    const { isMinimized, isMaximized, isClosed, minimize, maximize, close } = useWindowStore();
    const { number } = useFolderStore();
    const nodeRef = useRef(null);
    const [isLongPressed, setIsLongPressed] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        // 터치 디바이스인지 확인하는 함수
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

        setIsTouchDevice(isTouchDevice);
    }, []);

    // // 길게 누르기 핸들러
    // const longPressHandler = () => {
    //     setIsLongPressed(true);
    // };

    // // 길게 누르기 훅 사용
    // const bind = useLongPress(longPressHandler, {
    //     // 1000ms = 1초
    //     threshold: 1000, 
    //     onCancel : () => {
    //         // 길게 누르기가 취소되었을 때
    //         setIsLongPressed(false);
    //     },
    //     onFinish : () => {
    //         // 길게 누르기가 끝났을 때
    //         setIsLongPressed(false);
    //     }
    // });

    // // 드래그 시작을 조건적으로 허용
    // const handleStart = (e :DraggableEvent) => {
    //     if (!isLongPressed) {
    //         // 드래그 시작을 방지
    //         e.preventDefault(); 
    //         // 이 부분이 중요: 드래그를 막기 위해 false를 반환
    //         return false; 
    //     }
    // };

    if (isClosed) return null; // 창이 닫혔을 때 아무것도 렌더링하지 않음

    return (
        <Draggable 
            nodeRef={nodeRef} 
            disabled = {isTouchDevice}
            // onDrag={(e) => handleStart(e)}
            cancel="scrollable-content"
        >
            <div 
                ref={nodeRef} 
                className={
                    `window ${isMinimized ? 'minimized' : ''} ${isMaximized ? 'maximized' : ''}`
                }
                style={{
                    // 드래그 가능 상태에 따라 커서 변경
                    cursor: isLongPressed ? 'move' : 'grab',
                }}
                // {...bind()}
            >
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
                        <button className="close-button" onClick={close}></button>
                        <button className="minimize-button" onClick={minimize}></button>
                        <button className="maximize-button" onClick={maximize}></button>
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
                {
                    height === '0px' ? 
                    <div className="bg-dark p-4 row row-center" style={{margin : 'auto', height : '400px'}}>
                        <LoadingSpinner />
                    </div>:
                    <div className="window-content text-black scrollable-content" style={{maxHeight : height}}>
                        <MainFolderContainer />
                    </div>
                }
            </div>
        </Draggable>
    );
}