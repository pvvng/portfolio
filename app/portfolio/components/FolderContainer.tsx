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
    const [dragStartPos, setDragStartPos] = useState<{ x: number, y: number } | null>(null);
    const [isDragging, setIsDragging] = useState(false);

    const nodeRef = useRef(null);

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
