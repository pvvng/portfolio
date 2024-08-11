'use client';

import './portfolio.css';
import { lazy, Suspense, useRef } from 'react';
import TaskBar from './components/TaskBar';

const FolderContainer = lazy(() => import ('./components/FolderContainer'));

const FOLDER_NAME_ARR = ['About Me', 'Interview', 'Skill & Tools', 'Career', 'Project'];

export default function PortfolioContainer(){

    const containerRef = useRef<HTMLDivElement>(null);

    return(
        <>
            <div 
                className="bg-genkidama w-100 p-5" 
                style={{minHeight : 'calc(100vh - 60px)', overflow : 'hidden'}}
            >
                <div className='w-100' ref={containerRef}>
                    <div className='row w-100' style={{margin : 'auto', justifyContent : 'center', alignItems : 'center'}}>
                        {FOLDER_NAME_ARR.map((name, i) => 
                            <div key={name + i} className='col-6'>
                                <FolderContainer 
                                    folderName={name} 
                                    index={i} 
                                    containerRef={containerRef} // ref 속성 전달
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <TaskBar />
        </>

    )
}