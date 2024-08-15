'use client';

import { faNoteSticky } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function NoteContainer(){

    const [clickCounter, setClickCounter] = useState(0);

    return(
        <div 
            className="m-0 hover-btn text-center note-font" 
            style={{
                fontSize : '25px',
                margin : 'auto',
                position : 'absolute',
                color : clickCounter % 2 === 0 ? 'black' : 'white'
            }}
            onClick={() => setClickCounter(pre => pre + 1)}
        >
                <FontAwesomeIcon icon={faNoteSticky}/>
                {
                    clickCounter % 2 === 0 &&
                    <div style={{position : 'relative'}}>
                        <NotePageContainer />
                    </div>
                }
        </div>
    )
}

export function NotePageContainer(){
    return(
        <div  
            className="p-2 text-start rounded-1 animate__animated animate__fadeIn"  
            style={{
                background : '#ffd966', 
                width : '250px',
                zIndex : 10000,
                position : 'absolute',
                color : 'black',
                fontSize : 16,
                border : '1px solid #d4b000',
            }}
        >
            <NoteContentContainer />
        </div>
    )
}

function NoteContentContainer(){
    return(
        <>
            <h3 className="mx-1 note-font fw-bold" style={{fontSize : 30}}>포트폴리오 설명서</h3>
            <hr className="m-0" style={{color : '#ff5f56'}} />
            {
                NOTE_CONTENT.map((nc, i) => 
                    <div className="p-1" key={i}>
                        {
                            nc.includes('G') ?
                            <>
                                <button className="maximize-button" style={{width : 16, height : 16, borderRadius : '50%'}}></button>
                                <span style={{fontSize : 18}}>&nbsp;{nc.split(' ')[1]}&nbsp;{nc.split(' ')[2]}</span>
                            </>:
                            nc.includes('Y') ?
                            <>
                                <button className="minimize-button" style={{width : 16, height : 16, borderRadius : '50%'}}></button>
                                <span style={{fontSize : 18}}>&nbsp;{nc.split(' ')[1]}&nbsp;{nc.split(' ')[2]}</span>
                            </>:
                            nc.includes('R') ?
                            <>
                                <button className="close-button" style={{width : 16, height : 16, borderRadius : '50%'}}></button>
                                <span className="note-font"  style={{fontSize : 18}}>&nbsp;{nc.split(' ')[1]}</span>
                            </>:
                            <p 
                                className="m-0 note-font" 
                                style={{fontSize : 18}}
                            >{nc}</p>
                        }
                        {
                            i < NOTE_CONTENT.length - 1 &&
                            <hr className="m-0" style={{color : '#ff5f56'}} />
                        }
                    </div>
                )
            }
        </>
    )
}

const NOTE_CONTENT = [
    '1. 폴더를 더블클릭하여 폴더의 내용을 확인할 수 있어요.',
    '2. 윈도우 창의 헤더를 더블클릭하면 윈도우 창의 크기를 늘리거나 줄일 수 있어요.',
    '3. 윈도우 좌측 상단의 버튼을 클릭하여 윈도우 창의 크기를 늘어거나 줄이고, 끌 수 있어요.',
    'G 크기 키우기',
    'Y 크기 줄이기', 
    'R 닫기',
    '4. 데스크탑으로 웹페이지를 방문하면 윈도우 창, 폴더를 이동시킬 수 있어요.',
];