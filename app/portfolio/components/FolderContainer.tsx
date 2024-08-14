'use client';

import { useFolderStore, useWindowStore } from '@/app/store';
import { useRef, useState } from 'react';
import Draggable, { DraggableEvent } from 'react-draggable';
import { useLongPress } from 'use-long-press';

export default function FolderContainer(
    {folderName, index} : 
    {folderName :string, index : number}
){
    const { setNumber } = useFolderStore();
    const { isClosed, minimize } = useWindowStore();

    const nodeRef = useRef(null);
    const [isLongPressed, setIsLongPressed] = useState(false);

    // 길게 누르기 핸들러
    const longPressHandler = () => {
        setIsLongPressed(true);
    };

    // 길게 누르기 훅 사용
    const bind = useLongPress(longPressHandler, {
        // 1000ms = 1초
        threshold: 1000, 
        onCancel : () => {
            // 길게 누르기가 취소되었을 때
            setIsLongPressed(false);
        },
        onFinish : () => {
            // 길게 누르기가 끝났을 때
            setIsLongPressed(false);
        }
    });

    // 드래그 시작을 조건적으로 허용
    const handleStart = (e :DraggableEvent) => {
        if (!isLongPressed) {
            // 드래그 시작을 방지
            e.preventDefault(); 
            // 이 부분이 중요: 드래그를 막기 위해 false를 반환
            return false; 
        }
    };

    return (
        <Draggable 
            nodeRef={nodeRef} 
            disabled = {true}
            onDrag={(e) => handleStart(e)}
        >
            <div 
                ref={nodeRef} 
                className='margin-container' 
                style={{
                    width : '80px', 
                    height : '120px', 
                    zIndex : 10, 
                    // 드래그 가능 상태에 따라 커서 변경
                    cursor: isLongPressed ? 'move' : 'grab',
                }}
                {...bind()}
            >
                <div 
                    className='folder-container' 
                    style={{ 
                        width: '100%',
                        zIndex : 1,
                        position : 'relative'
                    }}
                    onDoubleClick={() => {
                        setNumber(index); 
                        if(isClosed){
                            minimize();
                        }
                    }}
                >
                    <div className="row" style={{ margin: 'auto' }}>
                        <div className="folder-tab col-3"></div>
                        <div className="folder col-12"></div>
                    </div>
                </div>

                <h6 
                    className='text-black text-center m-0 mt-1' 
                    style={{
                        zIndex : 10, 
                        transition : 'all 0.2s', 
                        fontSize : '12px',
                    }}
                >{folderName}</h6>
            </div>
        </Draggable>
    );
}