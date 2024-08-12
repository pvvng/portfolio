'use client';

import { RefObject, useEffect, useState } from 'react';

export default function FolderContainer(
    {folderName, index} : 
    {folderName :string, index : number}
){

    const [isMount, setIsMount] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        setIsMount(true);

        return () => {setIsMount(false)}
    },[])

    // if(!isMount) return null;

    return (
        <div className='margin-container' style={{width : '80px', height : '120px', zIndex : 10}}>
            <div 
                className='folder-container' 
                style={{ 
                    width: '100%',
                    zIndex : 1,
                    position : 'relative'
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onDoubleClick={() => {console.log(folderName)}}
            >
                <div className="row" style={{ margin: 'auto' }}>
                    <div className="folder-tab col-3"></div>
                    <div className="folder col-12"></div>
                </div>
            </div>

            <p 
                className='text-black text-center m-0' 
                style={{
                    zIndex : 10, 
                    transition : 'all 0.2s', 
                    opacity : isHovered ? 1 : 0
                }}
            >{folderName}</p>
        </div>
    );
}
