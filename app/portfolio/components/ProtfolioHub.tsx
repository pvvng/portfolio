'use client';

import { useWindowStore } from "@/app/store";
import DetailPromptContainer from "./DetailPromptContainer";
import FolderContainer from "./FolderContainer";
import TaskBar from "./TaskBar";

const FOLDER_NAME_ARR = ['About Me', 'Interview', 'Skill & Tools', 'Career', 'Project', 'Thank You!'];

export default function ProtfolioHubContainer(){

    const { isMinimized, isMaximized, isClosed } = useWindowStore();

    console.log(isMinimized, isMaximized, isClosed)

    return(
        <div 
            className='w-100 bg-genkidama p-2' 
            style={{minHeight : '100vh', position : 'relative'}}
        >
            {
                isMinimized &&
                <div 
                    className='row w-100 mt-5' 
                    style={{margin : 'auto',  alignItems :'center'}}>
                        {FOLDER_NAME_ARR.map((name, i) => 
                            <div className='col-4 col-sm-2' key={name + i}>
                                <FolderContainer
                                    folderName={name} 
                                    index={i} 
                                />
                            </div>
                        )}
                    <div className='col-12'>
                        <DetailPromptContainer height={'300px'} />
                    </div>
                </div>
            }

            {
                isMaximized &&
                <DetailPromptContainer height="calc(100vh - 120px)" />
            }

            <TaskBar />
        </div>
    )

}