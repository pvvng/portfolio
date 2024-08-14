'use client';

import { useFolderStore, useWindowStore } from '@/app/store';
import { useRef, useState } from 'react';
import Draggable from 'react-draggable';

export default function FolderContainer(
    { folderName, index } : 
    { folderName: string, index: number }
){

    const { setNumber } = useFolderStore();
    const { isClosed, minimize } = useWindowStore();
    const [isHovered, setIsHovered] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    const nodeRef = useRef(null);

    const handleStart = () => {
        setIsDragging(false);
    };

    const handleDrag = () => {
        setIsDragging(true);
    };

    const handleStop = () => {
        setTimeout(() => setIsDragging(false), 0);
    };

    const handleDoubleClick = () => {
        if (!isDragging) {
            setNumber(index);
            if (isClosed) {
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
                className='margin-container' 
                style={{ width: '80px', height: '120px', zIndex: 10 }}
            >
                <div 
                    className='folder-container' 
                    style={{ 
                        width: '100%',
                        zIndex: 1,
                        position: 'relative'
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onDoubleClick={handleDoubleClick}
                >
                    <div className="row" style={{ margin: 'auto' }}>
                        <div className="folder-tab col-3"></div>
                        <div className="folder col-12"></div>
                    </div>
                </div>

                <p 
                    className='text-black text-center m-0' 
                    style={{
                        zIndex: 10, 
                        transition: 'all 0.2s', 
                        opacity: isHovered ? 1 : 0
                    }}
                >
                    {folderName}
                </p>
            </div>
        </Draggable>
    );
}