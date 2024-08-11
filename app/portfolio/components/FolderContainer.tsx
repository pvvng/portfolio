'use client';

import { RefObject, useEffect, useState } from 'react';
import { Rnd } from 'react-rnd';

export default function FolderContainer(
    {folderName, index, containerRef} : 
    {folderName :string, index : number, containerRef : RefObject<HTMLDivElement>}
){

    const [isMount, setIsMount] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    // ref.current가 null일 경우를 처리
    const bounds = containerRef.current ? containerRef.current : undefined;


    useEffect(() => {
        setIsMount(true);

        return () => {setIsMount(false)}
    },[])

    if(!isMount) return null;

    return (
        <Rnd
            default={{
                x: 0,
                y: 0,
                width: 80,
                height: 120,
            }}
            minWidth={80} // 최소 너비 설정
            maxWidth={80} // 최소 너비 설정
            minHeight={120} // 최소 높이 설정
            maxHeight={120} // 최소 높이 설정
            // 부모 요소 내에서만 이동 가능
            bounds={bounds}
        >
            <div 
                className='folder-container' 
                style={{ 
                    width: '100%',
                    zIndex : 1,
                    position : 'relative'
                }}
                onMouseEnter={() => setIsClicked(true)}
                onMouseLeave={() => setIsClicked(false)}
                onDoubleClick={() => {console.log(folderName)}}
            >
                <div className="row" style={{ margin: 'auto' }}>
                    <div className="folder-tab col-3"></div>
                    <div className="folder col-12"></div>
                </div>
            </div>
            {isClicked &&
                <p 
                    className='text-black text-center m-0' 
                    style={{zIndex : 10,}}
                >{folderName}</p>
            }
        </Rnd>
    );
}
