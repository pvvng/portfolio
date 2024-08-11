'use client';

import { useEffect, useState } from "react";

const IMAGE_URL = [
    { url: "/main/원기옥컷1.jpg", classname: "col-12 cut0" },
    { url: "/main/원기옥컷4.jpg", classname: "col-4 cut1" },
    { url: "/main/원기옥컷3.jpg", classname: "col-4 cut2" },
    { url: "/main/원기옥컷2.jpg", classname: "col-4 cut3" },
];

export default function DrangonBallContainer() {

    // 초기값을 IMAGE_URL.length로 설정
    const [activeIndex, setActiveIndex] = useState(IMAGE_URL.length); 

    // viewPort 사이즈 검증
    const [nowViewPortSize, setNowViewPortSize] = useState(0);

    useEffect(() => {
        const updateActiveIndex = () => {
            const triggerHeight = 10; // 애니메이션 시작 지점
    
            IMAGE_URL.slice().reverse().forEach((_, reversedIndex) => {
                const i = IMAGE_URL.length - 1 - reversedIndex;
                const element = document.getElementById(`image-div-${i}`);
                if (element) {
                    const elementTop = element.getBoundingClientRect().top + window.scrollY;
    
                    // 역순으로 이미지를 활성화
                    if (elementTop - triggerHeight <= window.scrollY && i < activeIndex) {
                        setActiveIndex(i);
                    }
                }
            });
        };
        
        // 뷰포트 사이즈 감시
        setNowViewPortSize(document.documentElement.clientWidth);
        // 활성화된 컷 인덱스 업데이트
        updateActiveIndex();
    }, [activeIndex]);

    return (
        <div
            className="w-100 row"
            style={{
                margin: 'auto',
                maxWidth: '768px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {
                    activeIndex !== IMAGE_URL.length &&
                    <img
                        className={`bubble${nowViewPortSize <= 340 ? '-low':' '}`}
                        src="/main/말풍선.png"
                        width="100%"
                        height="100%"
                        style={{ position: 'absolute', padding: 0 }}
                    />
                }

                {IMAGE_URL.map((data, i) => {
                    return (
                        <div
                            id={`image-div-${i}`}
                            key={data.url + i.toString() + data.classname}
                            className={
                                `${data.classname} ${activeIndex <= i ? `move-cut${i}` : ''}`
                            }>
                            <img
                                src={data.url}
                                width="100%"
                                height="auto"
                            />
                        </div>
                    )
                })}
        </div>
    )
}
