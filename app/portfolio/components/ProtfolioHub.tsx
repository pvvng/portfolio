'use client';

import { useWindowStore } from "@/app/store";
import DetailPromptContainer from "./DetailPromptContainer";
import FolderContainer from "./FolderContainer";
import TaskBar from "./TaskBar";

const FOLDER_NAME_ARR = ['About Me','Project', 'All'];

export default function ProtfolioHubContainer(){

    const { isMinimized, isMaximized, isClosed } = useWindowStore();

    return(
        <div 
            className='w-100 bg-genkidama p-2' 
            style={{minHeight : '100vh', position : 'relative', overflow : 'hidden'}}
        >
            {
                isMinimized &&
                <div 
                    className='row w-100 mt-5' 
                    style={{margin : 'auto',  alignItems :'center'}}>
                        <div className="col-md-2 col-12">
                            <div className="row w-100 row-center" style={{margin : 'auto'}}>
                                {FOLDER_NAME_ARR.map((name, i) => 
                                    <div className='col-md-12 col-4' key={name + i}>
                                        <FolderContainer
                                            folderName={name} 
                                            index={i} 
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    <div className='col-md-10 col-12'>
                        <DetailPromptContainer height={'300px'} />
                    </div>
                </div>
            }

            {
                isMaximized &&
                <DetailPromptContainer height="calc(100vh - 120px)" />
            }

            {
                isClosed &&
                <div 
                    className='row w-100 mt-5' 
                    style={{margin : 'auto',  alignItems :'center'}}>
                        <div className="col-md-2 col-12">
                            <div className="row w-100 row-center" style={{margin : 'auto'}}>
                                {FOLDER_NAME_ARR.map((name, i) => 
                                    <div className='col-md-12 col-4' key={name + i}>
                                        <FolderContainer
                                            folderName={name} 
                                            index={i} 
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                </div>
            }

            <TaskBar />
        </div>
    )

}