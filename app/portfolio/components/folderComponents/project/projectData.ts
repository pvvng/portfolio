export const KKODLE_RM_DATA = {
    name : '꼬들꼬들',
    simple_explain : '단어 유사도 추측 게임',
    icon : '/project/꼬들꼬들/icon.png',
    github_link : 'https://github.com/pvvng/kkomentle',
    velog_link : 'https://velog.io/@pvvng/series/%ED%86%A0%EC%9D%B4%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%BC%AC%EB%93%A4%EA%BC%AC%EB%93%A4',
    deploy_link : 'https://kkodle-kkodle.netlify.app/',
    manpower : 1,
    term : '2024.07.10 ~ 2024.08.04 (25일)',
    env : [
        {url : "/stack/React.svg", name : 'React.js'},
        {url : "/stack/TypeScript.svg", name : 'TypeScript'},
        {url : "/stack/MongoDB.svg", name : 'MongoDB'},
    ],
    manage : [
        {url : "/stack/Git.svg", name : 'Git'},
        {url : "/stack/github.png", name : 'Github'},
    ],
    deploy : {url : "/stack/Netlify-Dark.svg", name : 'Netlify'},
    library : [
        'tanstack/react-query',
        'openai',
        'cosine-similarity',
        'zustand',
        'axios',
        'moment',
        'next-auth',
        'next-pwa',
        'recharts',
        'react-bootstrap',
        'fontawesome',
    ],
    explain : [
        {
            title : 'open AI의 embedding API로 얻은 단어 유사도로 오늘의 정답을 추측하는 게임입니다.',
            explain : '꼬맨틀에서 영감을 받아 제작되었습니다. 기본적인 레이아웃은 꼬맨틀을 참고하였습니다.'
        },
        {
            title : 'TypeScript로 타입 에러 제어',
            explain : 'TypeScript를 사용하여 Type Error로 인한 사고 발생을 미연에 방지하고자 하였습니다.'
        },
        {
            title : 'Zustand를 활용한 전역적 상태 관리',
            explain : '기존에 전역 상태 관리 라이브러리로 redux-toolkit을 사용하였는데, 이 프로젝트에선 비교적 문법이 쉽고 가벼운 Zustand를 사용해보았습니다.',
        },
        {
            title : 'React-Query를 이용한 효율적인 비동기 통신 처리',
            explain : 'React-Query(Tanstack-Query) 를 사용하여 좀 더 효과적인 비동기 통신 처리를 지향했습니다.',
        },
        {
            title : 'Kakao 소셜 로그인 & 공유하기',
            explain : 'Kakao 소셜 로그인이 가능하며, 별도의 로그인 페이지도 구현하였습니다. 공유하기 버튼을 통해 웹페이지 공유가 가능합니다.'
        },
        {
            title : 'localstorage에 게임 데이터 저장',
            explain : '게임의 플레이 정보 (정답을 맞혔는지, 추측 단어들의 배열, 플레이 시간, 오늘 날짜) 등을 localstorage에 저장하였습니다.'
        },
        {
            title : 'PWA로 네이티브 앱 처럼 다운 가능',
            explain : 'PWA를 사용하여 네이티브 앱 처럼 홈 화면에 추가 가능합니다.'
        }
    ],

}

const PROJECT_NAME_ARR = [
    {explain : '단어 유사도 추측 게임', name : '꼬들꼬들', url : '/project/꼬들꼬들/icon.png'},
    {explain : '게임 메이플스토리 BGM/OST 플레이어', name : 'Storify', url : '/project/storify/icon.png'},
    {explain : '실시간 위치 추적 지도 앱', name : '불편한 지도', url : '/project/map/icon.png'},
    {explain : '포켓몬 팬게임', name : '로켓단이되', url : '/project/pokemon/icon.png'},
    {explain : '책 검색 웹사이트', name : '교풍문고', url : '/project/book/icon.png'},
]